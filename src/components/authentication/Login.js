import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import API from '../../api/helpers';

const Login = ({ handleLogin, isLoggedIn }) => {
  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ errors, setErrors ] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    // Automatically redirects an already-logged-in user to Home
    isLoggedIn && navigate('/');
  }, []);

  // Sets state whenever each field receives input
  const _handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') setUsername(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  // Logs user in
  const _handleSubmit = (event) => {
    event.preventDefault();

    API.login({ username, email, password }).then((res) => {
      if (res.data.logged_in) {
        handleLogin(res.data);
        navigate('/');
      } else {
        setErrors(res.data.errors);
      }
    }).catch((err) => {
      console.error('api errors:', err);
    });
  };

  // Renders a list of authentication errors, if any
  const _handleErrors = () => {
    return (
      <ul>
        { errors.map((err) => (
          <li key={ err }>{ err }</li>
        ))}
      </ul>
    );
  };

  return (
    <main>
      <h1>Log in</h1>

      <form onSubmit={ _handleSubmit }>
        <input
          placeholder="username"
          type="text"
          name="username"
          value={ username }
          onChange={ _handleChange }
        />

        <input
          placeholder="email"
          type="email"
          name="email"
          value={ email }
          onChange={ _handleChange }
        />

        <input
          placeholder="password"
          type="password"
          name="password"
          value={ password }
          onChange={ _handleChange }
        />

        <button type="submit">
          Log in
        </button>

        <div>
          Don't have an account? <Link to='/signup'>Sign up</Link>
        </div>

      </form>

      <div>
        { errors && _handleErrors() }
      </div>
    </main>
  );
};

export default Login;
