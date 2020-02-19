import React from "react";
import Header from "../components/Header";
import defaults from "../constants.json";
import UserDetail from "../components/UserDetailList";
import Title from "../components/Title";
import ErrorMsg from "../components/ErrorMsg";

class ColleagueDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        id: "",
        kudos: 0
      },
      colleagues: [],
      error: ''
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
      fetch(`${defaults.BASE_API}/api/users/${user.org._id}?excludeUser=${user.id}`)
        .then(res => {
          return res.json();
        })
        .then(response => {
          if (response.error) {
            this.setState({
              error: response.error
            });
          } else {
            this.setState({
              colleagues: response.data
            });
          }
        })
        .catch(err => {
          this.setState({
            error: err
          });
        });
    }
  }

  handleClick = (user, e) => {
    e.preventDefault();

    this.setState({
      error: ''
    });
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
        if(response.data) {
          const updatedUser = response.data;
          localStorage.setItem('user', JSON.stringify(updatedUser));
          this.setState({
            user: updatedUser
          });
        }
      })
      .catch(err => {
        this.setState({
          error: err
        });
      });
  };

  render() {
    const { colleagues, user, error } = this.state;
    const allowSendKudos = user.kudos > 0 ? true: false;
    return (
      <div className="row">
        <Header value={user} />
        <Title value={{
          title: 'My colleagues',
          linkTo: 'dashboard'
        }}/>
        <UserDetail
          handleBtnClick={this.handleClick} 
          value={{userList: colleagues, allowSendKudos}}
        />
        <ErrorMsg value={error}/>
      </div>
    );
  }
}

export default ColleagueDetail;
