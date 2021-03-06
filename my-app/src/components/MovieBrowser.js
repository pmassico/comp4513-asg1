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
            movies: []}
    }

    searchedMovies = () => {
        const movies = cloneDeep(this.state.movies);
        let re = new RegExp(this.props.search, 'gi');

        let filtered = movies.filter((movie) => movie.title.match(re));
        //console.log(filtered);
        return filtered;
    };



    render() {
            if (this.state.search != null) {
                // filter movies and display filtered movies
                return(
                    <div>
                        <div className='row'>
                            <Favorites favorites={this.props.favorites} deleteFav={this.props.deleteFav} />
                        </div>

                        <div className='row' style={{marginTop: "1em"}}>
                            <Filters filterTitle={this.props.filterTitle}
                                     filterYear={this.props.filterYear}
                                     filterRating={this.props.filterRating}/>

                            <MovieList movies={this.searchedMovies()}
                                       addToFavs={this.props.addToFavs} />
                        </div>
                    </div>
                );
            } else {
                return(
                    <div>
                        <div className='row'>
                            <Favorites favorites={this.props.favorites} deleteFav={this.props.deleteFav} />
                        </div>
                        <div className='row' style={{marginTop: "1em"}}>
                            <Filters filterTitle={this.props.filterTitle}
                                     filterYear={this.props.filterYear}
                                     filterRating={this.props.filterRating} />
                            {/* this.state.movies will be everything by default, and then modified by filters */}

                            <MovieList movies={this.props.movies}
                                       addToFavs={this.props.addToFavs} />
                        </div>
                    </div>
                );
            }
        }
}
export default MovieBrowser