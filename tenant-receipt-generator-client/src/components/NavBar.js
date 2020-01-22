import React from 'react'
import {Link} from 'react-router-dom'
// import {Navbar, Nav} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const NavBar = () => {
  
  return(
    <Paper>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="HOME" 
          component={Link}
          to="/" />
        <Tab label="USERS" 
          component={Link}
          to="/users" />
      </Tabs>
    </Paper>
  )
}


export default NavBar
