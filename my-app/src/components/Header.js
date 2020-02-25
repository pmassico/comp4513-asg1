import React from "react";
import { Link } from 'react-router-dom';
import {Navbar, Nav} from "react-bootstrap";

class Header extends React.Component {

    render() {
        return(
                <Navbar variant="dark" bg="dark">
                    <Navbar.Brand href='/'>LOGO</Navbar.Brand>
                    <Nav className='mr-auto'>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/movies'>Movies</Nav.Link>
                        <Nav.Link href='/about'>About</Nav.Link>
                    </Nav>
                </Navbar>
        );
    }
}
export default Header