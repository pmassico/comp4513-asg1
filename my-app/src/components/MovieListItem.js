import React from "react";

class MovieListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* poster: w9Z7A0GHEhIp7etpj0vyKOeU1Wx.jpg */}
                <img src={`https://image.tmdb.org/t/p/w342/` + this.props.poster} />
                <li id={this.props.id}>{this.props.title}, {this.props.year}, {this.props.rating}</li>
            </div>

        )

    }
}
export default MovieListItem