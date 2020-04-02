import React, { Component } from 'react';
import { StaticMap } from 'react-map-gl';
import DeckGL from 'deck.gl';
import {GeoJsonLayer} from '@deck.gl/layers';

// importing all-tracks data
import refMunsterAllTracks from '../../../../data/refMunsterAllTracks';

// Initial viewport state
const INITIAL_VIEW_STATE = {
    longitude: 7.63,
    latitude: 51.96,
    zoom: 11,
    minZoom: 2,
    maxZoom: 16,
    pitch: 0,
    bearing: 0
  }

//  Map title function
function MapTitle({month}) {
    return (
      <div style={{
        background: 'white',
        borderRadius: 3,
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
        fontFamily:
          'ff-clan-web-pro, "Helvetica Neue", Helvetica, sans-serif !important',
        fontSize: '12px',
        lineHeight: 2,
        height: 50,
        padding: '10px',
        position: 'relative',
        left: 20,
        top: 20,
        width: 120,
        zIndex: 100
      }}>
        <h2>{month}</h2>
      </div>
    );
  }

//  Render layers function
function renderLayers(data, highlightedMonth) {
  
    const filteredFeatures = !highlightedMonth ? data.features : data.features.filter(d => {
      const month = new Date(d.properties.begin).getMonth();
      return month === highlightedMonth-1;
    })

    const fiilteredData = {
      "type": "FeatureCollection",
      "properties": {},
      "features": filteredFeatures
    }
    
      return new GeoJsonLayer({
          id: 'geojson-layer',
          data: fiilteredData,
          pickable: true,
          extruded: true,
          lineWidthScale: 10,
          lineWidthMinPixels: 1,
          getLineColor: d => (d.properties.color || [255,255,0]),
          getLineWidth: 1,
          opacity: 0.1
          // onHover: ({object, x, y}) => {
          //   const tooltip = object.properties.id || object.properties.station;
          //   /* Update tooltip
          //      http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
          //   */
          // }
        }
      );
  }

//   Function to render map
function MapGl({ data, viewport, style, highlightedMonth, month }) {
    return (
        <div>
          <DeckGL
            className="deck-gl"
            style={{
                position:'relative',
                height: 550
            }}
            layers={[renderLayers(data, highlightedMonth)]}
            initialViewState={viewport} 
            controller
          >
            <StaticMap
              mapStyle={style}
              mapboxApiAccessToken="pk.eyJ1IjoiYWxwaGEtMjEiLCJhIjoiY2s3YXJ0dmFkMTJiMTNlcGJzNzg4OGJnMSJ9.2m3wZ5wlJQKr0N0aldKSTA"
            />
            <MapTitle className="map-title" month={month} />
          </DeckGL>
      </div>
    );
}

export default class CustomMap extends Component {
    state={
        style: 'mapbox://styles/mapbox/dark-v10',
        viewport: INITIAL_VIEW_STATE,
        highlightedMonth: '',
        month: ''
      }

    months = [11,12,1,2,3]
    _months = ['Nov 2019', 'Dec 2019', 'Jan 2020', 'Feb 2020', 'Mar 2020']

    tick() {
        const index = this.months.indexOf(this.state.highlightedMonth)
        const updatedIndex = index<4 && index>-1 ? index + 1 : 0;
        this.setState({highlightedMonth : this.months[updatedIndex]})
        this.setState({month : this._months[updatedIndex]})
      }

      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }

      componentWillUnmount() {
        clearInterval(this.timerID);
      }

      render() {
          return (
            <div>
                <MapGl 
                    data={refMunsterAllTracks}
                    viewport={this.state.viewport}
                    style={this.state.style}
                    highlightedMonth={this.state.highlightedMonth}
                    month={this.state.month}
                />
            </div>
          )
      }
}