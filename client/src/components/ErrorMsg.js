import React from 'react';
import PropTypes from 'prop-types';

const ErrorMsg = (props) => {
  const { value } = props;
  if (value === '') {
    return null;
  }
  return(
    <h3 className='error-message'>{value}</h3>
  );
}

ErrorMsg.propTypes ={
  value: PropTypes.string.isRequired,
}

export default ErrorMsg;