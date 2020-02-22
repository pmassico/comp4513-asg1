import React from "react";

class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: []
        }
    }

    async componentDidMount() {
        try {
            const URL = `http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php?id=` + this.props.match.params.id;
            const data = await fetch(URL);
            const item = await data.json();
            this.setState( {movie: item } );
            //console.log(item)
        }
        catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <div id={this.state.movie.id} className='movie-details' >
                <p>Movie Browser</p>
                <p>Details</p>
                <figure>
                    <img src={`https://image.tmdb.org/t/p/w342/` + this.state.movie.poster} />
                </figure>
                <p>{this.state.movie.title}, {this.state.movie.release_date}, {this.state.movie.ratings_average}</p>

                {/* a link to return to previous component */}
            </div>
        );
    }
}
export default MovieDetails