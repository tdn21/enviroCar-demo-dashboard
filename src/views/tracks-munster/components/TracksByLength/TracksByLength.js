import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';


// Styles
const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  chartContainer: {
    position: 'relative',
    height: '300px'
  },
  stats: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  month: {
    textAlign: 'center',
    padding: theme.spacing(1)
  },
  monthIcon: {
    color: theme.palette.icon
  }
}));


const TracksByLength = props => {
    const { className, ...rest } = props;
  
    const classes = useStyles();
    const theme = useTheme();
  
    const data = {
      datasets: [
        {
          data: [14.06, 57.86, 26.73, 0.5, 0.88],
          backgroundColor: [
            '#E6A667',
            '#48C7B2',
            '#A0BE68',
            '#72C588',
            '#4FC2D7'
          ],
          borderWidth: 3,
          borderColor: theme.palette.white,
          hoverBorderColor: theme.palette.white
        }
      ],
      labels: ['Nov 2019', 'Dec 2019', 'Jan 2020', 'Feb 2020', 'Mar 2020']
    };
  
    const options = {
      legend: {
        display: false
      },
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      cutoutPercentage: 80,
      layout: { padding: 0 },
      tooltips: {
        enabled: true,
        mode: 'index',
        intersect: false,
        borderWidth: 1,
        borderColor: theme.palette.divider,
        backgroundColor: theme.palette.white,
        titleFontColor: theme.palette.text.primary,
        bodyFontColor: theme.palette.text.secondary,
        footerFontColor: theme.palette.text.secondary
      }
    };
  
    const months = [
      {
        title: 'Nov 2019',
        value: '262',
        color: '#E6A667'
      },
      {
        title: 'Dec 2019',
        value: '1078',
        color: '#48C7B2'
      },
      {
        title: 'Jan 2020',
        value: '498',
        color: '#A0BE68'
      },
      {
        title: 'Feb 2019',
        value: '9',
        color: '#72C588'
      },
      {
        title: 'Mar 2020',
        value: '16',
        color: '#4FC2D7'
      }
    ];
  
    return (
      <Card
        {...rest}
        className={clsx(classes.root, className)}
      >
        <CardHeader
          title="Length of tracks per month"
        />
        <Divider />
        <CardContent>
          <div className={classes.chartContainer}>
            <Doughnut
              data={data}
              options={options}
            />
          </div>
          <div className={classes.stats}>
            {months.slice(0,3).map(month => (
              <div
                className={classes.month}
                key={month.title}
              >
                <span className={classes.monthIcon}>{month.icon}</span>
                <Typography variant="body2">{month.title}</Typography>
                <Typography
                  style={{ color: month.color }}
                  variant="h3"
                >
                  {month.value}Km
                </Typography>
              </div>
            ))}
          </div>
          <div className={classes.stats}>
            {months.slice(3).map(month => (
              <div
                className={classes.month}
                key={month.title}
              >
                <span className={classes.monthIcon}>{month.icon}</span>
                <Typography variant="body2">{month.title}</Typography>
                <Typography
                  style={{ color: month.color }}
                  variant="h3"
                >
                  {month.value}Km
                </Typography>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  };

  TracksByLength.propTypes = {
      className: PropTypes.string
  };

  export default TracksByLength;