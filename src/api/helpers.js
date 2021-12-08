import axios from 'axios';

const SERVER_URL = 'http://localhost:3001';

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

  signUp(user) {
    return axios.post(SERVER_URL + '/users',
      { user },
      { withCredentials: true }
    );
  }
};

export default API;
