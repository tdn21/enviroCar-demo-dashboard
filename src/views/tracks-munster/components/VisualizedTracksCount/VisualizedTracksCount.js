import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
    Card,
    CardContent,
    Grid,
    Typography,
    Avatar
} from '@material-ui/core';
import { InsertChart } from '@material-ui/icons';

// Styles
const useStyles = makeStyles(theme => ({
    root: {
      height: '100%'
    },
    content: {
      alignItems: 'center',
      display: 'flex'
    },
    title: {
      fontWeight: 700
    },
    avatar: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      height: 56,
      width: 56
    },
    icon: {
      height: 32,
      width: 32
    },
    difference: {
      marginTop: theme.spacing(2),
      display: 'flex',
      alignItems: 'center'
    },
    differenceIcon: {
      color: theme.palette.error.dark
    },
    differenceValue: {
      color: theme.palette.error.dark,
      marginRight: theme.spacing(1)
    }
  }));

//   Visualized Tracks Counter component
const VisualizedTracksCount = props => {
    const { className, ...rest } = props;

    const classes = useStyles();
  
    return (
      <Card
        {...rest}
        className={clsx(classes.root, className)}
      >
        <CardContent>
          <Grid
            container
            justify="space-between"
          >
            <Grid item>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                TRACKS VISUALIZED
              </Typography>
              <Typography variant="h3">100</Typography>
            </Grid>
            <Grid item>
              <Avatar className={classes.avatar}>
                <InsertChart className={classes.icon} />
              </Avatar>
            </Grid>
          </Grid>
          <div className={classes.difference}>
            <Typography
              className={classes.caption}
              variant="caption"
            >
              For now, of Munster only
            </Typography>
          </div>
        </CardContent>
      </Card>
    );
  };

  VisualizedTracksCount.propTypes = {
      className: PropTypes.string
  }

  export default VisualizedTracksCount;