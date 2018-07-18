class Auth {

  // Authenticate a user. Save a token string in local storage
  static authenticateUser(token, email) {
      localStorage.setItem('token', token);
      localStorage.setItem('email', email);
  }

  // check if a user is authenticated, check if a token is saved in local storage
  static isUserAuthenticated() {
      return localStorage.getItem('token') !== null;
  }

  // deauthenticate a user, remove token and email from local storage
  static deauthenticateUser() {
      localStorage.removeItem('token');
      localStorage.removeItem('email');
  }

  // get a token value
  static getToken() {
      return localStorage.getItem('token');
  }

  // get email
  static getEmail() {
      return localStorage.getItem('email');
  }
}

export default Auth;
