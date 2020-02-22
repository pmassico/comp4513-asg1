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

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            favorites: []
        }
    }

    async componentDidMount() {
        try {
            const URL = 'http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL';
            const data = await fetch(URL);
            const items = await data.json();
            this.setState( {movies: items } );
        }
        catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
                <div className="App">
                    <Header />
                    <Route path='/' exact component={Home} />

                    <Route path='/movies' exact render = { (props) =>
                        <MovieBrowser movies={this.state.movies}/>} />

                    <Route path='/movies/search/:search' exact render = { (props) =>
                        <MovieBrowser movies={this.state.movies} search={props.match.params.search}/>} />

                    <Route path='/movie-details/:id' component={MovieDetails}/>
                    <Route path='/about' component={About} />
                    {/*<Route to='/movies' exact render = {props  =>*/}
                    {/*    <MovieBrowser />} />*/}
                </div>
        );
    }


}

export default App;
