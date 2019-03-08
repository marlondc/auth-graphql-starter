import gql from "graphql-tag";

const SignupMutation = gql`
  mutation Signup($email: String, $password: String) {
    signup(email: $email, password: $password) {
      id
      email
    }
  }
`;

export default SignupMutation;