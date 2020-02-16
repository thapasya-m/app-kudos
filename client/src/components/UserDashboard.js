import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import defaults from '../constants.json';

class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'yoloer',
      isLoggedIn: true,
      kudosList:[],
      user: {}
    }
  }

  componentDidMount() {
    const strData = localStorage.getItem('user');
    if (!strData) this.props.history.push('/signin');
    else {
      const user = JSON.parse(strData);
      console.log(defaults.BASE_API);
      fetch(`${defaults.BASE_API}/api/kudos-logs/${user.organizationId}`)
      .then(res => {
        return res.json();
      }).then(response => {
        if (response.status > 399) {
          alert(`Error: ${response.error}`);
        } else {
          this.setState({
            kudosList: response.data
          });
        }
      }).catch(err => {
        alert(`Error: ${err}`)
      })
    }
    
  }

  render() {
    const { kudosList } = this.state;
    return (
      <div className='row'>
        <Header 
        value = {this.state}/>
        <div>
          organization: ABC
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
            {kudosList.map(user => 
              <tr>
                <td>{user.username}</td>
                <td>{user.message}</td>
                <td>{user.dateRecieved}</td>
              </tr>
            )}
            
            {/* <tr>
              <td>curlyDreams</td>
              <td>ui</td>
              <td>good memo!</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserDashboard;