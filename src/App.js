import React from 'react';
import './App.css';

import Movie from './components/Movie'
import Character from './components/Character'
import Menubar from './components/Menubar'
import Footer from './components/Footer'
import MultiMovies from './components/MultiMovies'
import MultiCharacters from './components/MultiCharacters'
import Search from './components/Search'


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <Router forceRefresh={true}>
          <Menubar />
          <Route>
            <Switch>
              <Route exact
                path="/search/"
                render={props => (<Search {...props} />)}
              />
              <Route exact
                path="/movies/"
                render={props => (<MultiMovies {...props} url='http://localhost:8000/api/movies?' />)}
              />
              <Route exact
                path="/characters/"
                render={props => (<MultiCharacters {...props} url='http://localhost:8000/api/characters?' />)}
              />
              <Route
                path="/movies/:mid"
                render={props => (<Movie {...props} />)}
              />
              <Route
                path="/characters/:cid"
                render={props => (<Character {...props} />)}
              />
            </Switch>
          </Route>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
