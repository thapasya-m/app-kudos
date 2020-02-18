import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import defaults from '../constants.json';

class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
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
      this.setState({
        username: user.username
      })
      fetch(`${defaults.BASE_API}/api/kudos-logs/${user.id}`)
      .then(res => {
        return res.json();
      }).then(response => {
        if (!response.data) {
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
        <div className='container'>
          <em>organization: ABC</em>
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
            {kudosList.length > 0 ? 
          kudosList.map(user => 
            {
              const formatDate = new Date(user.receivedOn).toLocaleDateString();
            return (<tr key={user.giverId._id}>
              <td>{user.giverId.username}</td>
              <td>{user.message}</td>
              <td>{formatDate}</td>
            </tr>);
            }
          ) : 
            <tr>
              <td colSpan="3">No kudos Received.</td>
            </tr>         
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserDashboard;