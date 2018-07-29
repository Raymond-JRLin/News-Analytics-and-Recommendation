import React from 'react';
import { Link } from 'react-router'
import Auth from '../Auth/Auth';

class Base extends React.Component {
  render() {
    return(
      <div>
          <nav className="nav-bar indigo lighten-1">
              <div className="nav-wrapper">
                  <a className="brand-logo" href="/">&nbsp;&nbsp;Tap News</a>
                  <ul id="nav-modbile" className="right">
                      {Auth.isUserAuthenticated() ?
                        (<div>
                            <li>{ Auth.getEmail()}</li>
                            <li><Link to="/logout">Log out</Link></li>
                        </div>)
                        :
                        (<div>
                          <li><Link to="/login">Log in</Link></li>
                          <li><Link to="/signup">Sign up</Link></li>
                        </div>)
                      }
                  </ul>
              </div>
          </nav>
          <br />
          {this.props.children}
      </div>
    )
  }
};

// Base.propTypes = {
//   children: PropTypes.object.isRequired
// }

export default Base;
