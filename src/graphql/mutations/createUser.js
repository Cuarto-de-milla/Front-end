const { gql } = require("@apollo/client");

export defaul gql `
mutation {
    createUser(
          profileData: {
          phoneNumber: " 3222497943"
        },
      userData: {
        username: "narias",
        firstName: "Nicolas",
        lastName: "Arias",
        password: " 12345678",
        email: "asdsads@dasdas.com"
      }
    ) {
      user {
        username
        email
      }
    }
  }
`