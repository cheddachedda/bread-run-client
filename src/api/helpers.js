import axios from 'axios';

const SERVER_URL = 'http://localhost:3001';

const API = {
  getLoginStatus () {
    return axios(SERVER_URL + '/logged_in', {
      withCredentials: true // Allows Rails server to get and read the HTTP cookie
    });
  }
};

export default API;
