import React from "react";
import MovieListItem from "./MovieListItem";
import {Link} from 'react-router-dom';

class MovieList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            // <ul className='movie-list'>
            <div className='grid-container'>
                {this.props.movies.map((movie, index) =>
                        <MovieListItem
                            addToFavs={this.props.addToFavs}
                            expandDetails={this.props.expandDetails}
                            title={movie.title}
                            poster={movie.poster}
                            year={movie.release_date}
                            rating={movie.ratings.average}
                            id={movie.id}
                            key={index}
                            index={index}/>
                    )}
            </div>
            // </ul>

        );
    }
}
export default MovieList