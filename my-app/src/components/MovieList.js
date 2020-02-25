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
                    <th>poster</th>
                    <th>title</th>
                    <th>released</th>
                    <th>rating</th>
                    <th></th>
                </tr>
            </thead>

        );
    };

    render() {
        return(
            <div className="col-8 table-area">
                <Table bordered hover variant="dark" className='movie-list'>
                    {this.listHeader()}
                    { this.props.movies.map((movie, index) => {
                        let rating = "";
                        if (typeof(movie.ratings) != "undefined") {rating = movie.ratings.average}

                        return (
                            <tbody key={index}>
                            <MovieListItem
                                addToFavs={this.props.addToFavs}
                                title={movie.title}
                                poster={movie.poster}
                                year={movie.release_date}
                                rating={rating}
                                id={movie.id}
                                index={index}/>
                            </tbody>);
                    })}
                </Table>
            </div>


        );
    }
}
export default MovieList