import React from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './components/Movie'
import Character from './components/Character'
import Menubar from './components/Menubar'
import Footer from './components/Footer'
import MuiltiMovies from './components/MultiMovies'
import Search from './components/Search'


import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MultiCharacters from './components/MultiCharacters';

function App() {
  return (
    <>
      <div style={{ margin: '40px 36px auto' }}>
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
                render={props => (<MuiltiMovies {...props} />)}
              />
              <Route exact
                path="/characters/"
                render={props => (<MultiCharacters {...props} />)}
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
