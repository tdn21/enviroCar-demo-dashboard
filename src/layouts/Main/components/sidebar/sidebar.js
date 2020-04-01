import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DirectionsCar from '@material-ui/icons/DirectionsCar';
import ImageIcon from '@material-ui/icons/Image';

import SidebarNav from './components/SidebarNav';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Tracks',
      href: '/tracks',
      icon: <DirectionsCar />
    },
    {
      title: 'Consumption',
      href: '/consumption',
      icon: <ImageIcon />
    },
    {
      title: 'Speed',
      href: '/speed',
      icon: <ImageIcon />
    },
    {
      title: 'CO2',
      href: '/co2',
      icon: <ImageIcon />
    },
    {
      title: 'MAF',
      href: '/maf',
      icon: <ImageIcon />
    },
    {
      title: 'Intake Pressure',
      href: '/intake-pressure',
      icon: <ImageIcon />
    },
    {
      title: 'Intake Temperature',
      href: '/intake-temp',
      icon: <ImageIcon />
    },
    {
      title: 'Engine Load',
      href: '/engine-load',
      icon: <ImageIcon />
    }
    ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
        <Divider className={classes.divider} />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
