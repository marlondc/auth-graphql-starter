import gql from "graphql-tag";

const LogoutMutation = gql`
  mutation {
    logout {
      id
      email
    }
  }
`;

export default LogoutMutation;
