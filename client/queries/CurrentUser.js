import gql from "graphql-tag";

const CurrentUser = gql`
  {
    user {
      id
      email
    }
  }
`;

export default CurrentUser;
