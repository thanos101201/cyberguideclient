import React from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import ListIcon from '@mui/icons-material/List';
import DrawerComponent from './DrawerComponent';

function NavComponent(props) {
  return (
    <Box>
      <AppBar position='static'>
        <Toolbar>
          <IconButton size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
              <DrawerComponent drawerElements={props.drawerElements} />
          </IconButton>
          <Typography  sx={{ flex: 1, textAlign: 'center' }}>
            Cyber Guide
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavComponent