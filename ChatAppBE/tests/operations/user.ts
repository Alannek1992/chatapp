import gql from "graphql-tag";

export const me = gql`
  query {
    me {
      id
      email
      nickname
      password
    }
  }
`;

export const createUser = gql`
  mutation($data: CreateUserInput!) {
    createUser(data: $data) {
      token
      user {
        id
        email
        nickname
      }
    }
  }
`;

export const login = gql`
  mutation($data: LoginUserInput!) {
    login(data: $data) {
      token
      user {
        id
        email
        nickname
      }
    }
  }
`;

export const deleteUser = gql`
  mutation {
    deleteUser {
      id
      email
      nickname
    }
  }
`;

export const updateUser = gql`
  mutation($data: UpdateUserInput!) {
    updateUser(data: $data) {
      id
      email
      nickname
      password
    }
  }
`;
