import React from 'react';

const ErrorMsg = ({ value }) => {
  if (value === '') {
    return null;
  }
  return(
    <h3 className='error-message'>{value}</h3>
  );
}

export default ErrorMsg;