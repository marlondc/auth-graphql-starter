import React, { Component } from "react";

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.onSubmit({ email, password });
  }

  render() {
    return (
      <div className="row">
        <form className="col s6" onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              placeholder="Email"
            />
          </div>

          <div className="input-field">
            <input
              type="password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
              placeholder="Password"
            />
          </div>
          <div className="errors">
            {this.props.errors.map(err => (
              <p key={err}>{err}</p>
            ))}
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
