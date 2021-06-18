import React from "react";

// This component takes one prop: handleLogin which is a function

// You'll find two inputs in this component: <input type="text"> and <input type="password">. 
//Make this a controlled component by adding the necessary attributes to these inputs. 
//The input values should be saved to the component's state on every change.


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.username === '' || this.state.password === '') {
      return
    } else {
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.username} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>

      </form>
    );
  }
}

export default LoginForm;
