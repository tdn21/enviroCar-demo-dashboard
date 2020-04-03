import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import { Apartment } from '@material-ui/icons';

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

const CitiesCount = props => {
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
              CITIES VISUALIZED
            </Typography>
            <Typography variant="h3">4</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <Apartment className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
        <div className={classes.difference}>
          <Typography
            className={classes.caption}
            variant="caption"
          >
            Monchengladbach, Munster, Hamm, Chemnitz
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

CitiesCount.propTypes = {
  className: PropTypes.string
};

export default CitiesCount;