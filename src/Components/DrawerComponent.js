import React, { useEffect, useState } from 'react'
import { Box, Drawer, IconButton, ListItem, ListItemButton } from '@mui/material';
// import {MenuIcon} from '@mui/icons-material/Menu';
import ListIcon from '@mui/icons-material/List';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function DrawerComponent(props) {
  const [ drawerElements, setDrawerElements ] = useState([]);
  const [ open, setOpen ] = useState(false);
  useEffect(() => {
    setDrawerElements(props.drawerElements);
    console.log(drawerElements);
  }, []);
  const renderDrawerElements = () => {
    if(drawerElements.length === 0){
      return(
        <Box></Box>
      )
    }
    else{
      console.log(drawerElements);
      return drawerElements.map((e,key) => {
        return(
          <ListItem key={key} color='primary' sx={{marginTop:10}}>
            <ListItemButton sx={{borderRadius:10, color:'black'}} color='primary'>
              {e}
            </ListItemButton>
          </ListItem>
        );
      })
    }
  }
  return (
    <Box>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => setOpen(!open)}
          edge="start"
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
        >
          <ListIcon />
        </IconButton>
        <Drawer sx={{width:240, flexShrink:0}} variant='persistent' anchor='left' open={open}>
          <IconButton onClick={() => setOpen(!open)}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          {renderDrawerElements()}
        </Drawer>
    </Box>
  )
}

export default DrawerComponent;