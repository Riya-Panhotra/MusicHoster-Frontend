import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


export default function Header() {
    return (
        
        <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#features">SignIn</Nav.Link>
      <Nav.Link href="#pricing">Signup</Nav.Link>
    </Nav>
    
  </Navbar>


    )
}
