import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import React from 'react';
import logo from '../public/logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <img src={logo} className="logo" alt="logo" />
          <div className="container">

          </div>
      </div>
    );
  }
}

export default App;
