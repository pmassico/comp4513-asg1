import React from "react";
import MovieListItem from "./MovieListItem";
import {Link} from 'react-router-dom';

class MovieList extends React.Component {
    constructor(props) {
        super(props);
    }

    listHeader = () => {
        return(
            <div className='row sort-by'>
                <div className='col'>sort by</div>
                <div className='col-5'><h5><a onClick={this.sortMovies}>title</a></h5></div>
                <div className='col'><h5><a onClick={this.sortMovies}>release_date</a></h5></div>
                <div className='col'><h5><a onClick={this.sortMovies}>rating</a></h5></div>
                <div className='col'></div>
            </div>
        );
    };

    sortMovies = (e) => {
        let sortBy = e.currentTarget.innerHTML;

        if (sortBy === "title") {


        } else if (sortBy === "release_date") {

        } else if (sortBy === "rating") {

        }

    }

    render() {
        return(
            <div className='movie-list container'>
                {this.listHeader()}
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
                })}

            </div>

        );
    }
}
export default MovieList