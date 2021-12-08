import { Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Login from './components/authentication/Login/Login';
import SignUp from './components/authentication/SignUp/SignUp';

export const router = (
  <Routes>
    <Route exact path='/' element={ <Home /> } />
    <Route path='/login' element={ <Login /> } />
    <Route path='/signup' element={ <SignUp /> } />
  </Routes>
);
