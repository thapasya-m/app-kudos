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
      <div className='user-info container'>
        <div>{props.value.username}</div>
        <button onClick={logout}>Log out</button>
      </div>
      
    </header>
  );
}
export default Header;