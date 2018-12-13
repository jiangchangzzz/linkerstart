import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Home from './components/Home';

export class App extends Component {
  render() {
    return (
      <div>
        <Home/>
      </div>
    )
  }
}

export default hot(module)(App);


