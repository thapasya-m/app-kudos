import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password:''
    }
  }

  handleChange = ({target}) => {
    this.setState({
      [target.name] : target.value
    })
  }
  handleSignin = (e) => {
    e.preventDefault();
    //sign in to server
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSignin}>
          <label name='username'>
            <input onChange={this.handleChange}
            name='username'
            type='text' placeholder='Enter username'/>
          </label>
          <label name='password'>
            <input onChange={this.handleChange} name='password'
            type='password' placeholder='Enter password'/>
          </label>
          <input type='submit' value='sign in'/>
        </form>
      </div>
    );
  }
}

export default SignIn;