import React from 'react'
// import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

const NavBar = () => {
  return(
    <div>
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">RENT RECEIPT GENERATOR</Navbar.Brand>
        <Nav className="tentant-receipt">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/users">Users</Nav.Link>
        </Nav>

      </Navbar>


    </>
    </div>
  )
}


export default NavBar
