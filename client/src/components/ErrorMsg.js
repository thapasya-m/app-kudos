import React from 'react';

const ErrorMsg = ({ value }) => {
  if (value.error === '') {
    return null;
  }
  return(
    <h3 className='error-message'>{value.error}</h3>
  );
}

export default ErrorMsg;