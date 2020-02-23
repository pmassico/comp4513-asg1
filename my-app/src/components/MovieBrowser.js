import React from "react";
import queryString from 'query-string';
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import Favorites from "./Favorites";
import Filters from "./Filters";
import {Link} from 'react-router-dom';
import * as cloneDeep from 'lodash/cloneDeep';

class MovieBrowser extends React.Component {
    // State is wonky. Have to reload page through link to get movies back.
    componentDidMount() {
        this.setState({
            search: this.props.search,
            movies: this.props.movies})
    }

    constructor(props) {
        super(props);
        this.state = {
            detailView: false,
            currentMovie: [],
            search: "",
            favorites: [],
            movies: []}
    }

    addToFavs = (e) => {
        //console.log(this.props.movies.filter((movie) => movie.id == e.currentTarget.id));
        const movieToAdd = this.props.movies.filter((movie) => movie.id == e.currentTarget.id);
        const favsCopy = cloneDeep(this.state.favorites);
        favsCopy.push({ id: e.currentTarget.id,
                        poster: movieToAdd[0].poster });
        this.setState({favorites: favsCopy});
    }

    searchedMovies = () => {
        const movies = cloneDeep(this.state.movies);
        let re = new RegExp(this.props.search, 'gi');

        let filtered = movies.filter((movie) => movie.title.match(re));
        //console.log(filtered);
        return filtered;
    };

    resetFilter = () => {
        // undo whichever filter was done

    }

    browserHeader = () => {
        // add "filter state" to this? All / Filtered /
        return (
            <div className='header-row'>
                <h1>Movie Browser</h1>
                <p>Matching "{this.state.search}"</p>
                <Link to='/movies'><button>Clear Search</button></Link>
            </div>
        );
    }

    render() {
            if (this.state.search != null) {
                // filter movies and display filtered movies
                return(
                    <div className='browser'>
                        <div className='header-row'>
                            <h1>Movie Browser</h1>
                            <p>Matching "{this.state.search}"</p>
                            <Link to='/movies'><button>Clear Search</button></Link>
                        {/* put sort headers here */}
                        </div>

                        <Favorites favorites={this.state.favorites} />
                        <Filters filterTitle={this.props.filterTitle}
                                 filterYear={this.props.filterYear}
                                 filterRating={this.props.filterRating}/>
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
                        <Filters filterTitle={this.props.filterTitle}
                                 filterYear={this.props.filterYear}
                                 filterRating={this.props.filterRating} />
                        {/* this.state.movies will be everything by default, and then modified by filters */}
                        <MovieList movies={this.props.movies}
                                   addToFavs={this.addToFavs} />
                    </div>
                );
            }
        }
}
export default MovieBrowser