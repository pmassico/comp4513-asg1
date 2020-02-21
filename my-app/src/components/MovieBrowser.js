import React from "react";
import queryString from 'query-string';
import Header from './Header';

class MovieBrowser extends React.Component {
    componentDidMount() {
        // if (this.props.location.search != null) {
        //     console.log(this.props.location.search );
        //     const values = queryString.parse(this.props.location.search);
        //     this.fetchDashboardData(values.search);
        // }
    }

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <p>Movie Browser</p>
            </div>

        );
    }
}
export default MovieBrowser