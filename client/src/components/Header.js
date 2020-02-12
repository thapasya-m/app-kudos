import React from 'react';
import {useHistory} from 'react-router-dom';

const Header = (props) => {
  let history = useHistory();

  if (!props.value.isLoggedIn) {
    return null;
  }
  const logout = () => {
    localStorage.clear();
    history.push("/");
  }

  return (  
    <header>
      <div>{props.value.username}</div>
      <button onClick={logout}>Log out</button>
    </header>
  );
}
export default Header;