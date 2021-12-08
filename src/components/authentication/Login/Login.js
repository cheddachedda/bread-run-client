import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ errors, setErrors ] = useState('');

  const _handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') setUsername(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const _handleSubmit = (event) => {
    event.preventDefault();
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
    </main>
  );
};

export default Login;
