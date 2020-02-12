import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'yoloer',
      isLoggedIn: true
    }
  }

  componentDidMount() {

  }

  render() {
    const orgName = 'abc';
    const dt = new Date();
    return (
      <div className='row'>
        <Header 
        value = {this.state}/>
        <div>
          organization: {orgName}
          <Link to='/colleagues'>See my colleagues</Link>
        </div>
        <table>
          <thead>
            <tr>
              <td>Username</td>
              <td>Message</td>
              <td>Date Received</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>curlyDreams</td>
              <td>ty</td>
              <td>good memo!</td>
            </tr>
            <tr>
              <td>curlyDreams</td>
              <td>ui</td>
              <td>good memo!</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserDashboard;