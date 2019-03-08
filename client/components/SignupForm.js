import React, { Component } from "react";
import AuthForm from "./AuthForm";
import { graphql } from "react-apollo";
import { hashHistory } from "react-router";
import signup from "../mutations/Signup";
import query from "../queries/CurrentUser";

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: []
    };

    this.signupSubmit = this.signupSubmit.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (!this.props.data.user && nextProps.data.user) {
      hashHistory.push("/dashboard");
    }
  }

  signupSubmit({ email, password }) {
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
        <h3>Signup</h3>
        <AuthForm onSubmit={this.signupSubmit} errors={this.state.errors} />
      </div>
    );
  }
}

export default graphql(query)(graphql(signup)(SignupForm));
