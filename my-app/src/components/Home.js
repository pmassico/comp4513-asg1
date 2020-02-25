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
        let imgUrl = "https://images.unsplash.com/photo-1531278329486-539bf3bd6d5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1825&q=80";
        return(
            <div className="banner" style = {{ backgroundImage: `url(${imgUrl})`,
                height: '94vh',
                overflow: 'hidden',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                textAlign: "center"}}>
                <Card bg="dark" text="white" style={{width: "20rem", display:"inline-block", marginTop: "18em"}}>
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
            </div>
        );
    }
}

export default Home