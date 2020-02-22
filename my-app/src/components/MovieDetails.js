import React from "react";
import * as cloneDeep from 'lodash/cloneDeep';

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

    detailsPane = () => {
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

    singleCast = (actor) => {
        const production = {...this.state.movie.production};
        const cast = {...production.cast};

        console.log(cast);



        return(0
            // <div>
            //     <p>{actor.cast_id}</p>
            //     <p>{actor.character}</p>
            //     <p>{actor.credit_id}</p>
            //     <p>{actor.gender}</p>
            //     <p>{actor.id}</p>
            //     <p>{actor.name}</p>
            //     <p>{actor.order}</p>
            // </div>
        );
    }

    castAndCrew = () => {
        const production = {...this.state.movie.production};
        const cast = production.cast;
        const companies = {...production.companies};
        const countries = {...production.countries};
        const crews = {...production.crews};


        return(
            <div className='other-details'>
                <div>
                    <h3>Cast</h3>
                    {this.singleCast(cast)}
                </div>

                <div>
                    <h3>Crew</h3>

                </div>



            </div>
        );
    }

    render() {
        return (
            <div id={this.state.movie.id} className='browser'>
                <div className='header-row'>
                    <h1>Movie Browser</h1>
                    <p>Details</p>
                </div>
                {this.detailsPane()}
                {this.castAndCrew()}
                {/* a link to return to previous component */}
            </div>
        );
    }
}
export default MovieDetails