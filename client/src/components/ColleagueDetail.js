import React from 'react';
import Header from './Header';
import {Link} from 'react-router-dom';

class ColleagueDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        isLoggedIn: true,
        username: 'yoloer'
      },
      giverId: '123434324',
    }
  }

  handleClick = (user, e) => {
    e.preventDefault();

    const message = 
      document.getElementsByName(`${user.username}`).value;
    const log = {
      receiverId: user.id,
      message,
      giverId: this.state.giverId
    }
    console.log(log);
    //post the body
  }
  render() {
    const colleagues = [
      {id:1, username: 'yosomite'},
      {id:2, username: 'josh123'},
      {id:3, username: 'lolKing'}
    ];
    return (
      <div className='row'>
        <Header
        value = {this.state.userInfo}/>
        <div>
          My colleagues
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