import React, { useState } from 'react'
import { Box } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PlaceIcon from '@mui/icons-material/Place';
import ChatIcon from '@mui/icons-material/Chat';

function BottomNavigationComponent() {
    const [ value, setValue ] = useState(0);
  return (
    <Box sx={{maxWidth:2500}}>
        <BottomNavigation
           showLabels
           value={value}
           onChange={(event, newValue) => {
            setValue(newValue)
           }}
        >
            <BottomNavigationAction label="Maps" icon={ <PlaceIcon /> } />
            <BottomNavigationAction label="Chats" icon={<ChatIcon />} />
        </BottomNavigation>
    </Box>
  )
}

export default BottomNavigationComponent   