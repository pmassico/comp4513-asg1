import React from "react";
import FavoriteItem from "./FavoriteItem";

class Favorites extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="favorites">
                <p>Favorites</p>
                {this.props.favorites.map((f, i) => <FavoriteItem key={i} poster={f.poster} alt={f.title} />)}
            </div>
        );
    }
}
export default Favorites