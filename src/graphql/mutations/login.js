const { gql } = require("@apollo/client");

export default gql `
mutation login($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
      payload
    }
  }
`