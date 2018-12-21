import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/index'} className="navbar-brand">Employee Management</Link>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="topmenu navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Add New</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">List All</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path='/create' component={ Create } />
            <Route path='/edit/:id' component={ Edit } />
            <Route path='/index' component={ Index } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
