import React from 'react';
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
                            <li><a href="/logout">Log out</a></li>
                        </div>)
                        :
                        (<div>
                            <li><a href="/login">Log in</a></li>
                            <li><a href="/signup">Sign up</a></li>
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
