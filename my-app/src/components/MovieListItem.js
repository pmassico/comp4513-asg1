import React from "react";
import {Link} from "react-router-dom";


class MovieListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let year = this.props.year;
        if (typeof(year) != "undefined") {
            year = year.split("-")
        }

        return (
            <div id={this.props.id} className='row' onClick={this.props.expandDetails}>
                <div className='col'>
                    <Link to={`/movie-details/${this.props.id}`} key={this.props.id}>
                        <figure>
                            <img className='figure-img rounded' id='movie-list-poster' src={`https://image.tmdb.org/t/p/w342` + this.props.poster} alt={this.props.title}/>
                        </figure>
                    </Link>
                </div>
                <div className='col-5 movie-title'>
                    <Link to={`/movie-details/${this.props.id}`} key={this.props.id}>
                        <p>{this.props.title}</p>
                    </Link>
                </div>
                <div className='col movie-year'>
                    <p>{year[0]}</p>
                </div>
                <div className='col movie-rating'>
                    <p>{this.props.rating}</p>
                </div>
                <div className='col'>
                    <button onClick={this.props.addToFavs} id={this.props.id}>❤</button>
                </div>
            </div>


        )

    }
}
export default MovieListItem