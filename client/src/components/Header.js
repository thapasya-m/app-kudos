import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ( props) => {
const {value } = props;

  if (!value.username) {
    return null;
  }

  return (  
    <header className='container-flex-end'>
      <section className='user-info container'>
        <span>{value.username} (Kudos Left:{value.kudos})</span>
        <button>
          <Link to='/sign-in'>Log out</Link>
        </button>
      </section>
    </header>
  );
}

Header.protoTypes = {
  value: PropTypes.shape({
    username: PropTypes.string,
    kudos: PropTypes.number
  })
}

export default Header;