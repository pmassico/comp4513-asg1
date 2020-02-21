import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MovieBrowser from "./MovieBrowser";
import About from "./About";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { search:"" }
    }

    handler = (e) => {
        let newVal = e.currentTarget.value;
        this.setState({search: newVal} )
    }

    render(){
        return(
            <div className="banner">
                <p>Movie Browser</p>
                <div>
                    <label htmlFor='search'>Title</label>
                    <input id='search' name='search' type="text"  onChange={this.handler}></input><br/>

                    <Link to='/movies'>
                        <button>Show All Movies</button>
                    </Link>
                    <Link to={'/movies?search='+ this.state.search}>
                        <button>Show Matching Movies</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Home