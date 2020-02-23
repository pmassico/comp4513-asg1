import React from "react";
import * as cloneDeep from 'lodash/cloneDeep';
import CastAndCrew from "./CastAndCrew";

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
        return (
            <div className='details-container'>
                <div>
                    <h2>{this.state.movie.title}</h2>
                    <p>{this.state.movie.tagline}</p>
                    <figure>
                        <img src={`https://image.tmdb.org/t/p/w342/` + this.state.movie.poster} className='details-poster'/>
                    </figure>

                    <p>{this.state.movie.release_date}</p>
                    <p>{this.state.movie.runtime}</p>
                    <p>{"https://www.imdb.com/title/" + this.state.movie.imdb_id}</p>
                    <p>{"https://www.themoviedb.org/movie/" + this.state.movie.tmdb_id}</p>
                    <p>{"average rating " + ratings.average}</p>
                    <p>{"votes " + ratings.count}</p>
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
                {this.movieDetails()}
                <CastAndCrew production={this.state.production}/>
                {/*          cast={this.state.production.cast}
                             crew={this.state.production.crew}
                             companies={this.state.production.companies}
                             countries={this.state.production.countries} */}
                {/* a link to return to previous component */}
            </div>
        );
    }
}
export default MovieDetails