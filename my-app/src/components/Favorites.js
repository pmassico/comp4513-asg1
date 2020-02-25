import React from "react";
import FavoriteItem from "./FavoriteItem";

class Favorites extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.favorites.length >0) {
            return(
                <div className="favorites">
                    <p>Favorites</p>
                    {this.props.favorites.map((f, i) => <FavoriteItem key={i} index={i} poster={f.poster} alt={f.title} deleteFav={this.props.deleteFav}/>)}
                </div>
            );
        } else return null;

    }
}
export default Favorites