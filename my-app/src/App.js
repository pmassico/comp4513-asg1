import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import MovieBrowser from "./components/MovieBrowser";
import Header from "./components/Header";
import About from "./components/About";
import { Route } from 'react-router-dom';
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import * as cloneDeep from "lodash/cloneDeep";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            favorites: [],
            moviesCopy: []
        }
    }

    async componentDidMount() {
        try {
            const URL = 'https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL';
            const data = await fetch(URL);
            const items = await data.json();
            this.setState( { movies: items, moviesCopy: items } );
        }
        catch (error) {
            console.error(error);
        }
    }

    filterTitle = (e) => {
        // if length of change >0 then apply filter, if =0 then reset filter
        if (e.currentTarget.value.length > 0) {
            console.log(e.currentTarget.value);
            const movies = cloneDeep(this.state.movies);

            let re = new RegExp(e.currentTarget.value, 'gi');

            let filtered = movies.filter((movie) => movie.title.match(re));
            //console.log(filtered);

            this.setState({ movies: filtered })
        } else {
            // only ever called if filter was changed but then returned to 0
            const resetMovies = cloneDeep(this.state.moviesCopy);
            this.setState({ movies: resetMovies});
            console.log("filter reset");
        }
    };

    filterYear = (comparison, ...values) => {
        // TODO: can add logic
        // that resets filter pool when radio button is changed + takes into consideration other filters
        const movies = cloneDeep(this.state.movies);
        let matches = [];

        if (comparison === "before" && values[0] >= 0) {
            //look for all movies in movies with release_date under given value
            for (let m in movies) {
                // grab first 4 characters of release date
                if (movies[m] != null) {
                    let year = movies[m].release_date.substring(0, 4);
                    if (Number(year) <= values[0]) {

                        matches.push(movies[m]);
                    }
                } else {
                    // no movie to match, do nothing
                }
            }

            this.setState({ movies: matches })

        } else if (comparison === "after" && values[0] >= 0) {
            for (let m in movies) {
                // grab first 4 characters of release date
                if (movies[m] != null) {
                    let year = movies[m].release_date.substring(0, 4);
                    if (Number(year) >= values[0]) {

                        matches.push(movies[m]);
                    }
                } else {
                    // no movie to match, do nothing
                }
            }

            this.setState({ movies: matches })

        } else if (comparison === "between" && values[0] >= 0 && values[1] >= 0) {
            for (let m in movies) {
                // grab first 4 characters of release date
                if (movies[m] != null) {
                    let year = movies[m].release_date.substring(0, 4);
                    if (Number(year) >= values[0] && Number(year) <= values[1]) {

                        matches.push(movies[m]);
                    }
                } else {
                    // no movie to match, do nothing
                }
            }

            this.setState({ movies: matches })

        }
    };

    filterRating = (comparison, ...values) => {
        // TODO: can add logic
        // that resets filter pool when radio button is changed + takes into consideration other filters
        const movies = cloneDeep(this.state.movies);
        let matches = [];

        if (comparison === "below" && values[0] >= 0) {
            //look for all movies in movies with release_date under given value
            for (let m in movies) {
                // grab first 4 characters of release date
                if (movies[m] != null) {
                    if (typeof(movies[m].ratings) != "undefined") {
                        let rating = movies[m].ratings.average;
                        if (Number(rating) <= values[0]) {

                            matches.push(movies[m]);
                        }
                    }
                } else {
                    // no movie to match, do nothing
                }
            }

            this.setState({ movies: matches })

        } else if (comparison === "above" && values[0] >= 0) {
            for (let m in movies) {
                // grab first 4 characters of release date
                if (movies[m] != null) {
                    if (typeof(movies[m].ratings) != "undefined") {
                        let rating = movies[m].ratings.average;
                        if (Number(rating) >= values[0]) {

                            matches.push(movies[m]);
                        }
                    }
                } else {
                    // no movie to match, do nothing
                }
            }

            this.setState({ movies: matches })

        } else if (comparison === "between" && values[0] >= 0 && values[1] >= 0) {
            for (let m in movies) {
                // grab first 4 characters of release date
                if (movies[m] != null) {
                    if (typeof(movies[m].ratings) != "undefined") {
                        let rating = movies[m].ratings.average;
                        if (Number(rating) >= values[0] && Number(rating) <= values[0]) {

                            matches.push(movies[m]);
                        }
                    }
                } else {
                    // no movie to match, do nothing
                }
            }

            this.setState({ movies: matches })

        }
    };

    addToFavs = (e) => {
        //console.log(this.props.movies.filter((movie) => movie.id == e.currentTarget.id));
        const movieToAdd = this.state.movies.filter((movie) => movie.id == e.currentTarget.id);
        const favsCopy = cloneDeep(this.state.favorites);
        favsCopy.push({ id: e.currentTarget.id,
            poster: movieToAdd[0].poster });
        this.setState({favorites: favsCopy});
    };

    render() {
        return (
                <div className="App container">
                    <Header />
                    <Route path='/' exact component={Home} />

                    <Route path='/movies' exact render = { (props) =>
                        <MovieBrowser movies={this.state.movies}
                                      addToFavs={this.addToFavs}
                                      favorites={this.state.favorites}
                                      filterTitle={this.filterTitle}
                                      filterYear={this.filterYear}
                                      filterRating={this.filterRating} /> } />

                    <Route path='/movies/search/:search' exact render = { (props) =>
                        <MovieBrowser search={props.match.params.search}
                                      movies={this.state.movies}
                                      addToFavs={this.addToFavs}
                                      favorites={this.state.favorites}
                                      filterTitle={this.filterTitle}
                                      filterYear={this.filterYear}
                                      filterRating={this.filterRating} /> } />

                    <Route path='/movie-details/:id' exact render = { (props) =>
                        <MovieDetails id={props.match.params.id}
                                      favorites={this.state.favorites}
                                      addToFavs={this.addToFavs}/> } />

                    <Route path='/about' component={About} />
                    {/*<Route to='/movies' exact render = {props  =>*/}
                    {/*    <MovieBrowser />} />*/}
                </div>
        );
    }


}

export default App;
