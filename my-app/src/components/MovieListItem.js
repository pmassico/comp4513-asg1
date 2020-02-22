import React from "react";
import {Link} from "react-router-dom";


class MovieListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={this.props.id} className='movie-list-item grid-row' onClick={this.props.expandDetails}>
                <div>
                    <Link to={`/movie-details/${this.props.id}`} key={this.props.id}>
                        <figure>
                            <img src={`https://image.tmdb.org/t/p/w342` + this.props.poster} alt={this.props.title}/>
                        </figure>
                    </Link>
                </div>
                <div className='movie-title'>
                    <Link to={`/movie-details/${this.props.id}`} key={this.props.id}>
                        <p>{this.props.title}</p>
                    </Link>
                </div>
                <div className='movie-year'>
                    <p>{this.props.year}</p>
                </div>
                <div className='movie-rating'>
                    <p>{this.props.rating}</p>
                </div>
                <div>
                    <button onClick={this.props.addToFavs} id={this.props.id}>❤</button>
                </div>
            </div>


        )

    }
}
export default MovieListItem