import React from "react";
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { search:"" }
    }

    handler = (e) => {
        let newVal = e.currentTarget.value;
        this.setState({search: newVal} )
    };

    render(){
        return(
            <Container style={{textAlign: "center"}}>
                <Card bg="dark" text="white" style={{width: "20rem", display:"inline-block"}}>
                    <Card.Header>Movie Browser</Card.Header>
                    <Card.Body>

                        <FormControl placeholder="Movie Title" id='search' name='search' type="text"  onChange={this.handler}
                         style={{marginBottom: "1rem"}}/>

                        <Link to={`/movies/search/${this.state.search}`}>
                            {/* top right bottom left */}
                            <Button variant="primary" style={{marginRight: "0.5rem"}}>Search</Button>
                        </Link>

                        <Link to='/movies'>
                            <Button variant="secondary" style={{marginLeft:"0.5rem"}}>Show All</Button>
                        </Link>


                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default Home