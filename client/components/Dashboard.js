import React, { Component } from "react";
import { graphql } from "react-apollo";
import query from "../queries/CurrentUser";

class Dashboard extends Component {
  render() {
    return (
      <div>
        You are logged in
      </div>
    );
  }
}

export default graphql(query)(Dashboard);
