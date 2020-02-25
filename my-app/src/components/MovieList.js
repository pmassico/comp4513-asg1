import React from "react";
import MovieListItem from "./MovieListItem";
import {Link} from 'react-router-dom';
import {ListGroup} from "react-bootstrap";
import Table from "react-bootstrap/Table";

class MovieList extends React.Component {
    constructor(props) {
        super(props);
    }

    listHeader = () => {
        return(
            <thead>
                <tr className='sort-by'>
                    <th>sort by</th>
                    <th><a onClick={this.sortMovies}>title</a></th>
                    <th><a onClick={this.sortMovies}>release_date</a></th>
                    <th><a onClick={this.sortMovies}>rating</a></th>
                    <th></th>
                </tr>
            </thead>

        );
    };

    sortMovies = (e) => {
        let sortBy = e.currentTarget.innerHTML;

        if (sortBy === "title") {


        } else if (sortBy === "release_date") {

        } else if (sortBy === "rating") {

        }

    }

    //'col-8'
    render() {
        return(
            <div className="col-8 table-area">
                <Table bordered hover variant="dark" className='movie-list'>
                    {this.listHeader()}
                    { this.props.movies.map((movie, index) => {
                        let rating = "";
                        if (typeof(movie.ratings) != "undefined") {rating = movie.ratings.average}

                        return (
                            <tbody>
                            <MovieListItem
                                addToFavs={this.props.addToFavs}
                                expandDetails={this.props.expandDetails}
                                title={movie.title}
                                poster={movie.poster}
                                year={movie.release_date}
                                rating={rating}
                                id={movie.id}
                                key={index}
                                index={index}/>
                            </tbody>);
                    })}
                </Table>
            </div>


        );
    }
}
export default MovieList