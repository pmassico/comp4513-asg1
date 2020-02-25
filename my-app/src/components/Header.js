import React from "react";
import { Link } from 'react-router-dom';
import {Navbar, Nav} from "react-bootstrap";

class Header extends React.Component {

    render() {
        return(

                <Navbar variant="pills">
                    <Nav>
                        <Nav.Item><Nav.Link href='/' activeKey="link-1">TODO: A LOGO</Nav.Link></Nav.Item>
                        <Nav.Item ><Nav.Link href='/movies' activeKey="link-2">Movies</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href='/about' activeKey="link-3">About</Nav.Link></Nav.Item>
                    </Nav>

                </Navbar>
        );
    }
}
export default Header