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
            const URL = 'http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL';
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
        if (comparison === "before" && values[0] > 0) {
            //look for all movies in movies with release_date under given value
            const movies = cloneDeep(this.state.movies);
            let matches = [];

            for (let m in movies) {
                // grab first 4 characters of release date
                if (movies[m] != null) {
                    let year = movies[m].release_date.substring(0, 4);
                    if (Number(year) <= values[0]) {
                        matches.push(m);
                    }
                } else {
                    continue;
                }
            }

            this.setState({ movies: matches })
        } else if (comparison === "after" && values[0] > 0) {

        } else if (comparison === "between" && values[0] > 0 && values[1] > 0) {

        }
    };

    // filterYear = (comparison, ...values) => {
    //
    //     if (comparison == "before" && values[0] > 0) {
    //         // look for all movies in movies with release_date under referenceToTextInput.value
    //         let condition = value;
    //         const movies = cloneDeep(this.state.movies);
    //         let matches = [];
    //
    //         for (let m in movies) {
    //             // grab first 4 characters of release date
    //             let year = m.release_date.subString(0, 4);
    //             //
    //             if (Number(year) <= Number(condition)) {
    //                 matches.push(m);
    //             }
    //         }
    //
    //         this.setState({ movies: matches })
    //     }
    // };

    /*
    filterYear = (e) => {
        // TODO: "this" does not work yet. im pretending it works so i can move on and figure it out later
        // TODO: updating text fields updates state, values are grabbed from state and not from input elements

        // also:
        // TODO: some way to add and remove filters individually

        // retrieve state

        // TEMP VARIABLES
        const tempState = [1950, 1950, 1900, 2000];
        const referenceToTextInput = e.currentTarget;
        const referenceToSecondTextInput = e.currentTarget;
        const value = referenceToTextInput.value;
        const value2 = referenceToSecondTextInput.value;
        const id = referenceToTextInput.id;

        //if length of change >0 then apply filter, if =0 then reset filter

        // or radio-year-before
        if (id == "number-year-before" && Number(value) > 0) {
            // look for all movies in movies with release_date under referenceToTextInput.value
            let condition = value;
            const movies = cloneDeep(this.state.movies);
            let matches = [];

            for (let m in movies) {
                // grab first 4 characters of release date
                let year = m.release_date.subString(0, 4);
                //
                if (Number(year) <= Number(condition)) {
                    matches.push(m);
                }
            }

            this.setState({ movies: matches })
        } else if (id == "number-year-after" && Number(value) > 0) {
            // look for all movies in movies with release_date above referenceToTextInput.value
            let condition = value;
            const movies = cloneDeep(this.state.movies);
            let matches = [];

            for (let m in movies) {
                // grab first 4 characters of release date
                let year = m.release_date.subString(0, 4);
                //
                if (Number(year) >= Number(condition)) {
                    matches.push(m);
                }
            }

            this.setState({ movies: matches })
        } else if (id == "number-year-after" && Number(value) > 0 && Number(value2) > 0) {
            // look for all movies in movies with release_date between referenceToTextInput.value and referencetosecond...
            let condition = value;
            let condition2 = value2;
            const movies = cloneDeep(this.state.movies);
            let matches = [];

            for (let m in movies) {
                // grab first 4 characters of release date
                let year = m.release_date.subString(0, 4);
                //
                if (Number(year) >= Number(condition) && Number(year) >= Number(condition2)) {
                    matches.push(m);
                }
            }

            this.setState({ movies: matches })
        }

        else {
            alert("Invalid input. Please enter a positive value.")
        }
    };
    */

    filterRating = () => {
        // TODO: fix year filter and copy paste to rating
    };

    render() {
        return (
                <div className="App">
                    <Header />
                    <Route path='/' exact component={Home} />

                    <Route path='/movies' exact render = { (props) =>
                        <MovieBrowser movies={this.state.movies}
                                      filterTitle={this.filterTitle}
                                      filterYear={this.filterYear}
                                      filterRating={this.filterRating} />} />

                    <Route path='/movies/search/:search' exact render = { (props) =>
                        <MovieBrowser movies={this.state.movies}
                                      search={props.match.params.search}/>}
                                      filterTitle={this.filterTitle}
                                      filterYear={this.filterYear}
                                      filterRating={this.filterRating} />

                    <Route path='/movie-details/:id' component={MovieDetails}/>
                    <Route path='/about' component={About} />
                    {/*<Route to='/movies' exact render = {props  =>*/}
                    {/*    <MovieBrowser />} />*/}
                </div>
        );
    }


}

export default App;
