import React from "react";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";


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
            <tr id={this.props.id} onClick={this.props.expandDetails}>
                <td className=''>
                    <Link to={`/movie-details/${this.props.id}`} key={this.props.id}>
                        <figure className='figure'>
                            <img className='figure-img rounded' id='movie-list-poster' src={`https://image.tmdb.org/t/p/w342` + this.props.poster} alt={this.props.title}/>
                        </figure>
                    </Link>
                </td>
                <td className='movie-title'>
                    <Link to={`/movie-details/${this.props.id}`} key={this.props.id}>
                        <p>{this.props.title}</p>
                    </Link>
                </td>
                <td className='movie-year'>
                    <p>{year[0]}</p>
                </td>
                <td className='movie-rating'>
                    <p>{this.props.rating}</p>
                </td>
                <td className=''>
                    <Button onClick={this.props.addToFavs} id={this.props.id}>{"<3"}</Button>
                </td>
            </tr>


        )

    }
}
export default MovieListItem