import React from "react";
import queryString from 'query-string';
import MovieList from "./MovieList";

class MovieBrowser extends React.Component {
    componentDidMount() {
        // if (this.props.location.search != null) {
        //     console.log(this.props.location.search );
        //     const values = queryString.parse(this.props.location.search);
        //     this.fetchDashboardData(values.search);
        // }
    }

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <div>
                <p>Movie Browser</p>
                <p></p>
                <MovieList movies={this.props.movies}/>
            </div>

        );
    }
}
export default MovieBrowser