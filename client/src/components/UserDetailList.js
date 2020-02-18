import React from 'react';

const UserDetailList = (props) => {

  const handleClick = (user, e) => {
    props.handleBtnClick(user, e);
  }

  return (
    <table>
      <thead>
        <tr>
          <td>Username</td>
          <td>Input message</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {props.value.userList.length > 0 ?
        props.value.userList.map(({ username, id }) => {
          return (
            <tr key={id}>
              <td>{username}</td>
              <td>
                <input
                  type="text"
                  name={`${username}`}
                  placeholder="Enter a message"
                />
              </td>
              <td>
              <button 
                onClick={e => handleClick({ id, username }, e)}
                disabled={!props.value.allowSendKudos}
              >
                Send Kudos!
              </button>
              </td>
            </tr>
          )
        }) : <tr><td colSpan="3">No colleagues!</td></tr>
        }
      </tbody>
    </table>
  );
}

export default UserDetailList;