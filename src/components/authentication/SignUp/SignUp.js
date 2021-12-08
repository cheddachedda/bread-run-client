import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ passwordConfirmation, setPasswordConfirmation ] = useState('');
  const [ errors, setErrors ] = useState('');

  const _handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') setUsername(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'passwordConfirmation') setPasswordConfirmation(value);
  };

  const _handleSubmit = (event) => {
    event.preventDefault();
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
          type="passwordConfirmation"
          name="passwordConfirmation"
          value={ passwordConfirmation }
          onChange={ _handleChange }
        />

        <button type="submit">
          Log in
        </button>

        <div>
          Already have an account? <Link to='/login'>Log in</Link>
        </div>

      </form>
    </main>
  );
};

export default SignUp;
