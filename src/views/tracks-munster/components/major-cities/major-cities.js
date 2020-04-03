import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Button,
    Divider,
    List,
    ListItem,
    ListItemText,
    IconButton
} from '@material-ui/core';
import { ArrowRight } from '@material-ui/icons';

import Data from './data';

const useStyles = makeStyles(() => ({
    root: {
      height: '100%'
    },
    content: {
      padding: 0
    },
    image: {
      height: 48,
      width: 48
    },
    actions: {
      justifyContent: 'flex-end'
    }
  }));

  const MajorCities = props => {
      const { className, ...rest } = props;

      const classes = useStyles();

      const [cities] = useState(Data);

      return (
        <Card
          {...rest}
          className={clsx(classes.root, className)}
        >
          <CardHeader
            title="Cities"
            subheader={`4 out of ${cities.length}`}
          />
          <Divider /><Divider /><Divider /><Divider /><Divider />
          <CardContent className={classes.content}>
            <List>
              {cities.map((city, i) => (
                <ListItem
                  divider={i < cities.length - 1}
                  key={city.id}
                >
                  <ListItemText
                    primary={city.name}
                    secondary={`${cities.tracks_count} tracks in a Recording period of ${cities.recording_period}`}
                  />
                  <IconButton
                    edge="end"
                    size="small"
                  >
                    <ArrowRight />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </CardContent>
          <Divider />
          <CardActions className={classes.actions}>
            <Button
              color="primary"
              size="small"
              variant="text"
            >
              View all <ArrowRight />
            </Button>
          </CardActions>
        </Card>
      );
  };

  MajorCities.propTypes = {
      className: PropTypes.string
  };

  export default MajorCities;