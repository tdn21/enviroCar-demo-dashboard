import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
    CitiesCount,
    // CustomMap,
    MajorCities,
    PhenomenaVisualized,
    TracksBarChart,
    TracksByLength,
    TracksCount,
    VisualizedTracksCount
} from './components';

import CustomMap from './components/CustomMap/CustomMap';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(4)
    }
  }));

  const TracksMunster = () => {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <CitiesCount />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <PhenomenaVisualized />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <VisualizedTracksCount />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TracksCount />
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <CustomMap />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <TracksByLength />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <MajorCities />
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <TracksBarChart />
        </Grid>
      </Grid>
    </div>
  );  
  };

export default TracksMunster;