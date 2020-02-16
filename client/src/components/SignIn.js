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
    fetch('http://localhost:4200/auth/signin',{
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json();
    }).then(data => {
      console.log(data);
      if (data.status > 399) {
        alert(`Error: ${data.error}`);
      } else {
        localStorage.setItem('user', JSON.stringify(data.data));
        this.props.history.push('/dashboard');
      }
    }).catch(err => {
      alert(`Error: ${err}`)
    })
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