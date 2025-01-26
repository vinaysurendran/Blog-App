import { AppBar, Button, IconButton, Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'


const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
            <Button variant="text" color=''>Home</Button>
            <Button variant="text" color=''>Add Blog</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar