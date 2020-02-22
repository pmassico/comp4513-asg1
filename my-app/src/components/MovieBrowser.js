import React from "react";
import queryString from 'query-string';
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import Favorites from "./Favorites";

class MovieBrowser extends React.Component {
    componentDidMount() {
        this.setState({search: this.props.search})
        // if (this.props.location.search != null) {
        //     console.log(this.props.location.search );
        //     const values = queryString.parse(this.props.location.search);
        //     this.fetchDashboardData(values.search);
        // }
    }

    constructor(props) {
        super(props);
        this.state = { detailView: false,
                        currentMovie: [],
                        search: "",
                        favorites: []}
    }

    addToFavs = (e) => {
        console.log(this.props.movies.filter((movie) => movie.id == e.currentTarget.id));

        const movieToAdd = this.props.movies.filter((movie) => movie.id == e.currentTarget.id);
        const favsCopy = this.state.favorites;

        favsCopy.push({ id: e.currentTarget.id,
                        poster: movieToAdd[0].poster});
        this.setState({favorites: favsCopy});
    }

    // expandDetails = (e) => {
    //     // changes state so that renders a MovieDetails in the place of MovieList
    //     // get the clicked movie from the array
    //     const newMovie = this.props.movies.filter(movie => movie.id == e.currentTarget.id);
    //     //console.log(newMovie[0]);
    //
    //     //console.log(this.props.movies.find)
    //     this.setState({ currentMovie: newMovie[0], detailView: true });
    //     //this.setState({ detailView: true });
    // };

    filteredMovies = () => {
        const filtered = this.props.movies.filter((movie) => movie.title === `%${this.props.search}%`);
        console.log(filtered)
    };

    /**
     * Filter array items based on search criteria (query)
     */
    filterItems = (arr, query) => {
        return arr.filter(function(el) {
            return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
        })
    }

    render() {
            if (this.state.search != null) {
                // filter movies and display filtered movies
                return(
                    <div>
                        <p>Movie Browser</p>
                        <p>Matching "{this.state.search}"</p>
                        <Favorites favorites={this.state.favorites} />

                        <MovieList movies={this.props.movies}
                                   addToFavs={this.addToFavs} />
                        {/* favorites bar */}
                        {/* filter sidebar */}
                    </div>
                );
            } else {
                return(
                    <div>
                        <p>Movie Browser</p>
                        <p>All</p>
                        <MovieList movies={this.props.movies}
                                   addToFavs={this.addToFavs} />
                        {/* favorites bar */}
                        {/* filter sidebar */}
                    </div>
                );
            }
        }
}
export default MovieBrowser