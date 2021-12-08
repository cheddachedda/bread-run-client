import { Link } from 'react-router-dom';

import { UserContext } from '../../context';

const Home = () => {
  return (
    <UserContext.Consumer>
      {({ isLoggedIn, user }) => (

        <main>
          <h1>Home Page</h1>
          <Link to='/login'>Log in</Link>
          <Link to='/signup'>Sign Up</Link>
        </main>

      )}
    </UserContext.Consumer>
  );
};

export default Home;
