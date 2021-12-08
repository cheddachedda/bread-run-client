import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <h1>Home Page</h1>
      <Link to='/login'>Log in</Link>
      <Link to='/signup'>Sign Up</Link>
    </main>
  );
};

export default Home;
