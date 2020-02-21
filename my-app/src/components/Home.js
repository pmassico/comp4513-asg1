import React from "react";
import { Link } from 'react-router-dom';

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
            <div className="banner">
                <p>Movie Browser - Home</p>
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