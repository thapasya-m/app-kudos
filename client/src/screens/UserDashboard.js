import React from "react";
import Header from "../components/Header";
import defaults from '../constants.json';
import Title from "../components/Title";

class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error:'',
      kudosList:[],
      user: {
        org:''
      }
    }
  }

  componentDidMount() {
    const strData = localStorage.getItem('user');
    if (!strData) 
      this.props.history.push('/signin');
    else {
      const user = JSON.parse(strData);
      this.setState({
        user
      });
      fetch(`${defaults.BASE_API}/api/kudos-logs/${user.id}`)
      .then(res => {
        return res.json();
      }).then(response => {
        if (!response.data) {
          this.setState({
            error: response.error
          });
        } else {
          this.setState({
            kudosList: response.data
          });
        }
      }).catch(err => {
        this.setState({
          error: err
        })
      })
    }
    
  }

  render() {
    const { kudosList, user, error } = this.state;
    return (
      <div className='row'>
        <Header 
        value = {this.state.user}/>
        <Title value={{
          title: `Organization: ${user.org.name}`,
          linkTo: 'colleagues'
        }}/>
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
          kudosList.map((user, index) => 
            {
              const formatDate = new Date(user.receivedOn).toLocaleDateString();
            return (<tr key={`${user.giverId._id}_${index}`}>
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
        {error !== '' 
        && <h3 className='error-message'>{error}</h3>}
      </div>
    );
  }
}

export default UserDashboard;