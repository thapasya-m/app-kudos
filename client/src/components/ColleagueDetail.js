import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import defaults from '../constants.json';

class ColleagueDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        id: ''
      },
      colleagues:[]
    }
  }

  componentDidMount() {
    const strData = localStorage.getItem('user');
    if (!strData) this.props.history.push('/signin');
    else {
      const user = JSON.parse(strData);
      this.setState({
        user
      })
      fetch(`${defaults.BASE_API}/api/users/${user.org}?excludeUser=${user.id}`)
      .then(res => {
        return res.json();
      }).then(response => {
        if (response.error) {
          alert(`Error: ${response.error}`);
        } else {
          this.setState({
            colleagues: response.data
          });
        }
      }).catch(err => {
        alert(`Error: ${err}`)
      })
    }
  }

  handleClick = (user, e) => {
    e.preventDefault();

    const message = 
      document.getElementsByName(`${user.username}`).value;
    const log = {
      receiverId: user.id,
      message,
      giverId: this.state.user.id
    }

    fetch(`${defaults.BASE_API}/kudos-logs/`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(log)
    })
    .then(resp => resp.json())
    .then(response => console.log(response))
    .catch(err => {
      alert(`Error: ${err}`)
    });
  }

  render() {
    const { colleagues }= this.state;
    return (
      <div className='row'>
        <Header
        value = {this.state.user}/>
        <div className='container'>
          <b>My colleagues</b>
          <Link to='/dashboard'>My details</Link>
        </div>
        {colleagues.map((user) => {
          return (
            <div>
              <span name={`${user.username}`}>
                {user.username}
              </span>
              <input
                type='text'
                name={`${user.username}`}
                placeholder='Enter a message'/>
              <button
                onClick={(e) => this.handleClick(user, e)}>
                Send Kudos!
              </button>
            </div>
            );
        })}
      </div>
    );
  }
}

export default ColleagueDetail;