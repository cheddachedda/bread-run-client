import axios from 'axios';

let SERVER_URL;
if (process.env.NODE_ENV === 'development') {
  SERVER_URL = 'http://localhost:3001';
} else if (process.env.NODE_ENV === 'production') {
  SERVER_URL = 'https://bread-run-backend.herokuapp.com/';
}

const API = {
  getLoginStatus() {
    return axios(SERVER_URL + '/logged_in', {
      withCredentials: true // Allows Rails server to get and read the HTTP cookie
    });
  },

  login(user) {
    return axios.post(SERVER_URL + '/login',
      { user },
      { withCredentials: true }
    );
  },

  logout() {
    return axios.delete(SERVER_URL + '/logout', {
      withCredentials: true
    });
  },

  signUp(user) {
    return axios.post(SERVER_URL + '/users',
      { user },
      { withCredentials: true }
    );
  }
};

export default API;
