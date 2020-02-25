import React from "react";
import * as cloneDeep from 'lodash/cloneDeep';
import CastAndCrew from "./CastAndCrew";
import Favorites from "./Favorites";
import Figure from "react-bootstrap/Figure";

class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: []
        }
    }

    async componentDidMount() {
        try {
            const URL = `https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php?id=` + this.props.id;
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

    render() {
        const ratings = {...this.state.movie.ratings};
        const details = {...this.state.movie.details};
        let date = "undefined";
        if (typeof(this.state.movie.release_date) != "undefined") {
            date = this.state.movie.release_date.split("-");
        }
        return (
            <div className='row' id={this.state.movie.id} style={{marginTop: "5em"}}>

                <Favorites favorites={this.props.favorites} deleteFav={this.props.deleteFav}/>

                <div className='col-3'>
                    <Figure>
                        <Figure.Image rounded src={`https://image.tmdb.org/t/p/w342/` + this.state.movie.poster}/>
                    </Figure>
                </div>
                <div className='col' style={{textAlign: "left"}}>
                    <p><h2>{this.state.movie.title} </h2><h3>({date[0]})</h3></p>
                    <p>{this.state.movie.tagline}</p>
                    <p>{this.state.movie.runtime} minutes</p>
                    <p>more: <a href={"https://www.imdb.com/title/" + this.state.movie.imdb_id}>imdb</a> / <a href={"https://www.themoviedb.org/movie/" + this.state.movie.tmdb_id}>tmdb</a></p>
                    <p>{"average rating " + ratings.average} ({ratings.count} votes)</p>
                    <p>{"popularity " + ratings.popularity}</p>
                </div>
                <div className='col-3 rounded border' style={{paddingTop:"1rem", height: "50vh", overflowY: "scroll"}}>
                    <CastAndCrew production={this.state.production}/>
                </div>


                {/* a link to return to previous component */}
            </div>
        );
    }
}
export default MovieDetails