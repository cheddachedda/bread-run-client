import { Link } from 'react-router-dom';

import Map from '../Map/Map';

import API from '../../api/helpers';
import { UserContext } from '../../context';

const Home = ({ handleLogout, loggedInStatus }) => {
  // Destroys current session in backend and removes
  const _handleClick = () => {
    API.logout().then(() => {
      handleLogout();
    }).catch((err) => {
      console.error('api errors:', err);
    });
  };

  return (
    <UserContext.Consumer>
      {({ user }) => (

        <main>
          <h1>Home Page</h1>
          <p>User: { user && user.username }</p>
          {
            loggedInStatus ?
            <button onClick={ _handleClick }>Log out</button> :
            <Link to='/login'>Log in</Link>
          }
          <Link to='/signup'>Sign Up</Link>
          <Map />
        </main>

      )}
    </UserContext.Consumer>
  );
};

export default Home;
