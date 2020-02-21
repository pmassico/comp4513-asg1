import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import MovieBrowser from "./components/MovieBrowser";
import Header from "./components/Header";
import {BrowserRouter as Link, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header />
        <Route path='/' exact component={Home}/>
        <Route path='/home' exact render={(props) => <Home/>}/>
        <Route path='/movies' exact render={(props) => <MovieBrowser/>}/>

        {/*<Route to='/movies' exact render = {props  =>*/}
        {/*    <MovieBrowser />} />*/}
    </div>
  );
}

export default App;
