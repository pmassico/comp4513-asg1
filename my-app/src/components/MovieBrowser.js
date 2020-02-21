import React from "react";
import queryString from 'query-string';
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";

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
        this.state = { detailView: false,
                        currentMovie: [] }
    }

    expandDetails = (e) => {
        // changes state so that renders a MovieDetails in the place of MovieList
        // get the clicked movie from the array
        const newMovie = this.props.movies.filter(movie => movie.id == e.currentTarget.id);
        //console.log(newMovie[0]);

        //console.log(this.props.movies.find)
        this.setState({ currentMovie: newMovie[0], detailView: true });
        //this.setState({ detailView: true });
    };

    resetState = () => {
        this.setState({detailView: false});
    }

    render() {

        if (this.state.detailView === false) {
            return(
                <div>
                    <p>Movie Browser</p>
                    <p>All</p>
                    <MovieList movies={this.props.movies}
                               expandDetails={this.expandDetails}/>
                </div>

            );
        } else {
            return(
                <div>
                    <p>Movie Browser</p>
                    <p>Details</p>
                    <MovieDetails movie={this.state.currentMovie}/>
                    <button onClick={this.resetState}>Reset State (TEST ONLY)</button>
                </div>

            );
        }

    }
}
export default MovieBrowser