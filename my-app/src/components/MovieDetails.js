import React from "react";

class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={this.props.movie.id} className='movie-details' >
                <figure>
                    <img src={`https://image.tmdb.org/t/p/w342/` + this.props.movie.poster} />
                </figure>
                <p>{this.props.movie.title}, {this.props.movie.release_date}, {this.props.movie.ratings_average}</p>
                {/* a link to return to previous component */}
            </div>
        );
    }
}
export default MovieDetails