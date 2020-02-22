import React from "react";

class FavoriteItem extends React.Component {

    render() {
        return(
            <div className="fav-item">
                <img src={`https://image.tmdb.org/t/p/w342/` + this.props.poster} alt={this.props.title}/>
            </div>
        );
    }
}

export default FavoriteItem