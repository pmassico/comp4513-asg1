import React from "react";

class MovieListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li id={this.props.id} className='movie-list-item' onClick={this.props.expandDetails}>
                <div>
                    <figure>
                        <img src={`https://image.tmdb.org/t/p/w342/` + this.props.poster} />
                    </figure>
                    <p>{this.props.title}, {this.props.year}, {this.props.rating}</p>
                </div>
            </li>


        )

    }
}
export default MovieListItem