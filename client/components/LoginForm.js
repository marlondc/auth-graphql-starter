import React, { Component } from "react";
import AuthForm from "./AuthForm";
import { graphql } from "react-apollo";
import { hashHistory } from "react-router";
import login from "../mutations/Login";
import query from "../queries/CurrentUser";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: []
    };

    this.loginSubmit = this.loginSubmit.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (!this.props.data.user && nextProps.data.user) {
      hashHistory.push("/dashboard");
    }
  }

  loginSubmit({ email, password }) {
    this.props
      .mutate({
        variables: { email, password },
        refetchQueries: [{ query }]
      })
      .catch(res => {
        const errors = res.graphQLErrors.map(err => err.message);
        this.setState({
          errors
        });
      });
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm onSubmit={this.loginSubmit} errors={this.state.errors} />
      </div>
    );
  }
}

export default graphql(query)(graphql(login)(LoginForm));
