import React from 'react';
import defaults from "../constants.json";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creds: {
        username: '',
        password:''
      },
      error: ''
    }
  }

  handleChange = ({target}) => {
    this.setState({
      [target.name] : target.value,
      error : ''
    })
  }

  handleSignin = (e) => {
    e.preventDefault();

    fetch(`${defaults.BASE_API}/auth/signin`,{
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json();
    }).then(data => {
      if (data.error) {
        this.setState({
          error: data.error
        })
      } else {
        localStorage.setItem('user', JSON.stringify(data.data));
        this.props.history.push('/dashboard');
      }
    }).catch(err => {
      alert(`Error: ${err}`)
    })
  }

  render() {
    const { error } = this.state;
    return (
      <div className='container padding'>
        <form onSubmit={this.handleSignin}>
          <label name='username' className='padding'>
            <input onChange={this.handleChange}
            name='username'
            type='text' placeholder='Enter username'/>
          </label>
          <label name='password' className='padding'>
            <input onChange={this.handleChange} name='password'
            type='password' placeholder='Enter password'/>
          </label>
          <input type='submit' value='sign in'/>
        </form>
        {error !== '' 
        && <h3 className='error-message'>{error}</h3>}
      </div>
    );
  }
}

export default SignIn;