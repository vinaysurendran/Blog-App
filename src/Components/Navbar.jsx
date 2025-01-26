import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router'


const Navbar = () => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Blog Application
            </Typography>
            <Button variant="text" color='inherit'>
                <Link to={'/'}style={{ textDecoration: "none", color: "white" }}>Home</Link>
            </Button>
            <Button variant="text" color='inherit'>
                <Link to={'/add'}style={{ textDecoration: "none", color: "white" }}>Add Blog</Link>
            </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar