import React from "react";

class FavoriteItem extends React.Component {

    delete = () => {
        this.props.deleteFav(this.props.index);
    };

    render() {
        return(
            <div className="fav-item" onClick={this.delete}>
                <img src={`https://image.tmdb.org/t/p/w342/` + this.props.poster} alt={this.props.title}/>
            </div>
        );
    }
}

export default FavoriteItem