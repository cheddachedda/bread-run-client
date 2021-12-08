import { Routes, Route } from 'react-router-dom';

import { UserContext } from './context';

import Home from './components/Home/Home';
import Login from './components/authentication/Login';
import SignUp from './components/authentication/SignUp';

export const router = (
  <UserContext.Consumer>
    {({ _handleLogin, isLoggedIn }) => (
      <Routes>
        <Route exact path='/' element={ <Home /> } />

        <Route path='/login' element={
          <Login
            handleLogin={ _handleLogin }
            isLoggedIn={ isLoggedIn }
          />
        } />

        <Route path='/signup' element={ <SignUp handleLogin={ _handleLogin } /> } />
      </Routes>
    )}
  </UserContext.Consumer>
);
