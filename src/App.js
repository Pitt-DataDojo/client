import React, { Component } from 'react';
import Home from './components/Home.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.routes = [
      {
        path: '/',
        component: Home
      }
    ];
  }


  render() {
    return <Router>
      <div>
      { this.routes.map((route, index) => (

              <Route
                key={index}
                exact
                path={route.path}
                component={route.component}
              />
            ))
      }
      </div>
    </Router>
  }
}

export default App;
