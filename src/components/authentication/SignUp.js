import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import API from '../../api/helpers';

const SignUp = ({ handleLogin }) => {
  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ passwordConfirmation, setPasswordConfirmation ] = useState('');
  const [ errors, setErrors ] = useState('');

  const navigate = useNavigate();

  const _handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') setUsername(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'passwordConfirmation') setPasswordConfirmation(value);
  };

  const _handleSubmit = (event) => {
    event.preventDefault();

    API.signUp({ username, email, password, passwordConfirmation }).then((res) => {
      if (res.data.status === 'created') {
        handleLogin(res.data);
        navigate('/');
      } else {
        setErrors(res.data.errors);
      }
    }).catch((err) => {
      console.error('api errors:', err);
    });
  };

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
      <h1>Sign up</h1>

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

        <input
          placeholder="confirm password"
          type="password"
          name="passwordConfirmation"
          value={ passwordConfirmation }
          onChange={ _handleChange }
        />

        <button type="submit">
          Sign up
        </button>

        <div>
          Already have an account? <Link to='/login'>Log in</Link>
        </div>

      </form>

      <div>
        { errors && _handleErrors() }
      </div>
    </main>
  );
};

export default SignUp;
