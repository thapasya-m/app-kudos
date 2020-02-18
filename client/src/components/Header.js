import React from 'react';
import {useHistory} from 'react-router-dom';

const Header = (props) => {
  let history = useHistory();

  if (!props.value.username) {
    return null;
  }
  const logout = () => {
    localStorage.clear();
    history.push("/");
  }

  return (  
    <header className='container-flex-end'>
      <div>{props.value.username}</div>
      <button onClick={logout}>Log out</button>
    </header>
  );
}
export default Header;