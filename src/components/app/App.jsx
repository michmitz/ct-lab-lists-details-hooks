import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './containers/HomePage';
import CharacterPage from './containers/CharacterPage';

export default function App() {
  return <Router>
    <Switch>
      <Route
        exact path="/"
        component={HomePage} />
      <Route
        exact path="/:character"
        component={CharacterPage} />
    </Switch>
  </Router>;
}