import React from 'react';
import { Link } from "react-router-dom";

const Title = ({ value }) => {
  return(
    <div className="container">
      <b>{value.title}</b>
      <Link to={`/${value.linkTo}`}>My {value.linkTo}</Link>
    </div>
  );
}

export default Title;