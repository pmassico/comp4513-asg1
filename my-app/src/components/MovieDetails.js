import React from "react";
import * as cloneDeep from 'lodash/cloneDeep';
import CastAndCrew from "./CastAndCrew";
import Favorites from "./Favorites";

class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: []
        }
    }

    async componentDidMount() {
        try {
            const URL = `http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php?id=` + this.props.id;
            const data = await fetch(URL);
            const item = await data.json();

            let production = null;

            if (typeof(item.production) != "undefined") {
                production = cloneDeep(item.production);
            }

            this.setState( {movie: item,
                                  production: production } );
            //console.log(item)
        }
        catch (error) {
            console.error(error);
        }
    }

    movieDetails = () => {
        const ratings = {...this.state.movie.ratings};
        const details = {...this.state.movie.details};
        let date = "undefined";
        if (typeof(this.state.movie.release_date) != "undefined") {
            date = this.state.movie.release_date.split("-");
        }
        return (
            <div className='details-container'>
                {/*<Favorites favorites={this.props.favorites}/>*/}
                <div>
                    <h2>{this.state.movie.title} ({date[0]})</h2>
                    <p>{this.state.movie.tagline}</p>
                    <figure>
                        <img src={`https://image.tmdb.org/t/p/w342/` + this.state.movie.poster} className='details-poster'/>
                    </figure>

                    <p></p>
                    <p>{this.state.movie.runtime} minutes</p>
                    <p>more: <a href={"https://www.imdb.com/title/" + this.state.movie.imdb_id}>imdb</a> / <a href={"https://www.themoviedb.org/movie/" + this.state.movie.tmdb_id}>tmdb</a></p>
                    <p>{"average rating " + ratings.average} ({ratings.count} votes)</p>
                    <p>{"popularity " + ratings.popularity}</p>

                </div>
            </div>
        );
    };

    render() {
        return (
            <div id={this.state.movie.id} className='browser'>
                <div className='header-row'>
                    <h1>Movie Browser</h1>
                    <p>Details</p>
                </div>

                <Favorites favorites={this.props.favorites}/>

                {this.movieDetails()}

                <CastAndCrew production={this.state.production}/>

                {/* a link to return to previous component */}
            </div>
        );
    }
}
export default MovieDetails