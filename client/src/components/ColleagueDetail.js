import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import defaults from "../constants.json";

class ColleagueDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        id: "",
        kudos: 0
      },
      colleagues: []
    };
  }

  componentDidMount() {
    const strData = localStorage.getItem("user");
    if (!strData) this.props.history.push("/signin");
    else {
      const user = JSON.parse(strData);
      this.setState({
        user
      });
      fetch(`${defaults.BASE_API}/api/users/${user.org}?excludeUser=${user.id}`)
        .then(res => {
          return res.json();
        })
        .then(response => {
          if (response.error) {
            alert(`Error: ${response.error}`);
          } else {
            this.setState({
              colleagues: response.data
            });
          }
        })
        .catch(err => {
          alert(`Error: ${err}`);
        });
    }
  }

  handleClick = (user, e) => {
    e.preventDefault();

    const message = document.querySelector(`input[name = '${user.username}']`).value;
    const log = {
      receiverId: user.id,
      message,
      giverId: this.state.user.id
    };

    fetch(`${defaults.BASE_API}/api/kudos-logs/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(log)
    })
      .then(resp => resp.json())
      .then(response => {
        console.log(response);
        if(response.data) {
          const updatedUser = response.data;
          //update local str & state
          localStorage.setItem('user', JSON.stringify(updatedUser));
          this.setState({
            user: updatedUser
          });
        }
      })
      .catch(err => {
        alert(`Error: ${err}`);
      });
  };

  render() {
    const { colleagues, user } = this.state;
    return (
      <div className="row">
        <Header value={user} />
        <div className="container">
          <b>My colleagues</b>
          <Link to="/dashboard">My details</Link>
        </div>
        {colleagues.map(({ id, username }) => {
          return (
            <div key={id}>
              <span>{username}</span>
              <input
                type="text"
                name={`${username}`}
                placeholder="Enter a message"
              />
              <button onClick={e => this.handleClick({ id, username }, e)} disabled={user.kudos === 0}>
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
