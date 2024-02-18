import React from 'react';
import { Map, Marker } from 'pigeon-maps';
import { BottomNavigation, Box, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import NavComponent from './NavComponent';
import BottomNavigationComponent from './BottomNavigationComponent';

const useStyles = makeStyles(() => ({
  mapContainer: {
    position: 'relative',
    width: '100%',
    height: '100vh', // Set height to 100vh for full viewport height
  },
  bottomNavigation: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: 0,
    width: '100%',
  },
}));

const markersData = [
  { id: 1, position: [37.7749, -122.4194], title: 'San Francisco' },
  { id: 2, position: [34.0522, -118.2437], title: 'Los Angeles' },
  { id: 3, position: [41.8781, -87.6298], title: 'Chicago' },
  { id: 4, position: [40.7128, -74.0060], title: 'New York City' },
];

function MapWithMarkers() {
  const classes = useStyles();

  return (
    <Box className={classes.mapContainer}>
      <NavComponent drawerElements={['Option 1', 'Option 2']} />
      <Map center={[37.7749, -122.4194]} zoom={4} width={'100%'} height={'100%'}>
        {markersData.map(marker => (
          <Marker key={marker.id} anchor={marker.position} payload={marker.id} />
        ))}
      </Map>
      <Paper className={classes.bottomNavigation}>
        <BottomNavigationComponent />
      </Paper>
    </Box>
  );
}

export default MapWithMarkers;
