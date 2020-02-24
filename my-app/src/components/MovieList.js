import React from "react";
import MovieListItem from "./MovieListItem";
import {Link} from 'react-router-dom';

class MovieList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='grid-container'>
                { this.props.movies.map((movie, index) => {
                    let rating = "";
                    if (typeof(movie.ratings) != "undefined") {rating = movie.ratings.average}

                    return (
                        <MovieListItem
                        addToFavs={this.props.addToFavs}
                        expandDetails={this.props.expandDetails}
                        title={movie.title}
                        poster={movie.poster}
                        year={movie.release_date}
                        rating={rating}
                        id={movie.id}
                        key={index}
                        index={index}/>
                        );
                })
                }

            </div>

        );
    }
}
export default MovieList