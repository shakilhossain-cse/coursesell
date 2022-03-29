import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" className='py-4'>
    <Container>
    <Navbar.Brand as={NavLink} to="/">Navbar</Navbar.Brand>
    <Nav className="ms-auto">
      <Nav.Link href="#home" className="text-white">Home</Nav.Link>
      <Nav.Link href="#features" className="text-white">Features</Nav.Link>
      <Nav.Link href="#pricing" className="text-white">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default Header