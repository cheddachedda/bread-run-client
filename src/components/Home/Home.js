import { Link, useNavigate } from 'react-router-dom';

import API from '../../api/helpers';
import { UserContext } from '../../context';

const Home = ({ handleLogout, loggedInStatus }) => {
  const navigate = useNavigate();

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
            <a onClick={ _handleClick }>Log out</a> :
            <Link to='/login'>Log in</Link>
          }
          <Link to='/signup'>Sign Up</Link>
        </main>

      )}
    </UserContext.Consumer>
  );
};

export default Home;
