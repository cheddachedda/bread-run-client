import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { UserContext } from './context';
import { router } from './routes';
import API from './api/helpers';

const App = () => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ user, setUser ] = useState({});

  useEffect(() => {
    loginStatus();
  }, []);

  // GET '/logged_in'
  // Calls login or logout methods as necessary
  const loginStatus = () => {
    API.getLoginStatus().then((res) => {
      // Response includes a `logged_in` boolean
      if (res.data.logged_in) {
        _handleLogin(res);
      } else {
        _handleLogout();
      }
    }).catch((err) => {
      console.error('api errors:', err);
    });
  };

  const _handleLogin = (data) => {
    setIsLoggedIn(true);
    setUser(data.user);
  };

  const _handleLogout = () => {
    setIsLoggedIn(false);
    setUser({});
  };

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ isLoggedIn, user }}>
        { router }
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
