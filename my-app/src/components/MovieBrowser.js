import React from "react";
import queryString from 'query-string';
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import Favorites from "./Favorites";
import Filters from "./Filters";
import {Link} from 'react-router-dom';

class MovieBrowser extends React.Component {
    componentDidMount() {
        this.setState({search: this.props.search})
        // if (this.props.location.search != null) {
        //     console.log(this.props.location.search );
        //     const values = queryString.parse(this.props.location.search);
        //     this.fetchDashboardData(values.search);
        // }
    }

    constructor(props) {
        super(props);
        this.state = { detailView: false,
                        currentMovie: [],
                        search: "",
                        favorites: []}
    }

    addToFavs = (e) => {
        console.log(this.props.movies.filter((movie) => movie.id == e.currentTarget.id));

        const movieToAdd = this.props.movies.filter((movie) => movie.id == e.currentTarget.id);
        const favsCopy = this.state.favorites;

        favsCopy.push({ id: e.currentTarget.id,
                        poster: movieToAdd[0].poster});
        this.setState({favorites: favsCopy});
    }

    // expandDetails = (e) => {
    //     // changes state so that renders a MovieDetails in the place of MovieList
    //     // get the clicked movie from the array
    //     const newMovie = this.props.movies.filter(movie => movie.id == e.currentTarget.id);
    //     //console.log(newMovie[0]);
    //
    //     //console.log(this.props.movies.find)
    //     this.setState({ currentMovie: newMovie[0], detailView: true });
    //     //this.setState({ detailView: true });
    // };

    searchArray = (a, b) => {
        return a.matches(b)
    }

    searchedMovies = () => {
        const movies = this.props.movies;
        let re = new RegExp(this.props.search, 'gi');

        let filtered = movies.filter((movie) => movie.title.match(re));
        console.log(filtered);
        return filtered;
    };

    render() {
            if (this.state.search != null) {
                // filter movies and display filtered movies
                return(
                    <div className='browser'>
                        <div className='header-row'>
                            <h1>Movie Browser</h1>
                            <p>Matching "{this.state.search}"</p>
                            <Link to='/movies'><button>Clear Search</button></Link>
                        </div>
                        <Favorites favorites={this.state.favorites} />
                        <Filters />
                        <MovieList movies={this.searchedMovies()}
                                   addToFavs={this.addToFavs} />
                    </div>
                );
            } else {
                return(
                    <div className='browser'>
                        <div className='header-row'>
                            <h1>Movie Browser</h1>
                            <p>All</p>
                        </div>

                        <Favorites favorites={this.state.favorites} />
                        <Filters />
                        <MovieList movies={this.props.movies}
                                   addToFavs={this.addToFavs} />
                    </div>
                );
            }
        }
}
export default MovieBrowser