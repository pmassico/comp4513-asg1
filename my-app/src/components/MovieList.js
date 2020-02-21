import React from "react";
import MovieListItem from "./MovieListItem";

class MovieList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <ul>
                {this.props.movies.map((movie, index) =>
                    <MovieListItem

                        title={movie.title}
                        poster={movie.poster}
                        year={movie.release_date}
                        rating={movie.ratings.average}
                        id={movie.title}
                        key={index}/>)}
            </ul>

        );
    }
}
export default MovieList