import React from "react";
import { Link } from 'react-router-dom';
import {Navbar, Nav} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }



    //`url(${imgUrl})`

    //https://react-bootstrap.github.io/components/modal/
    showModal =() => {
        this.setState({show: true})
    };

    closeModal = () => {
        this.setState({show: false})
    }

    render() {
        return(
                <Navbar variant="dark" bg="dark" style={{marginTop: '1em'}}>
                    <Navbar.Brand href='/'>
                        <img
                        src={require('../logo192.png')}
                        height="30px"
                        width="30px"
                        className="d-inline-block align-top"
                        alt="logo"
                        />
                    </Navbar.Brand>
                    <Nav className='mr-auto'>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/movies'>Movies</Nav.Link>
                        <Nav.Link onClick={this.showModal}>About</Nav.Link>
                    </Nav>
                    <Modal show={this.state.show} onHide={this.closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>About / Resources Used</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p><a href='https://thenounproject.com/search/?q=movie&i=2846264'>Logo used: Movie by Srinivas Agra from the Noun Project</a></p>
                            <p><a href="https://github.com/twbs/bootstrap/issues/27124#issuecomment-509009622">fixing cut off accordion border</a></p>
                            <p><a href="https://itnext.io/using-es6-to-destructure-nested-objects-in-javascript-avoid-undefined-errors-that-break-your-code-612ae67913e9">object destructuring</a></p>
                            <p><a href="https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/">sorting array of objects by property</a></p>ç
                            <p><a href="https://www.youtube.com/watch?v=NUQkajBdnmQ">React transition group tutorial by Ihatetomatoes on YouTube</a></p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={this.closeModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Navbar>
        );
    }
}
export default Header