import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!, $username: String!) {
    login(email: $email, password: $password, username: $username) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
          authors
          image
          bookId
          title
          link
          description
        }
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookInput: BookInput!) {
    saveBook(bookInput: $bookInput) {
      _id
      username
      email
      bookCount
      savedBooks {
        authors
        image
        bookId
        title
        link
        description
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookID: ID!) {
    removeBook(bookID: $bookID) {
      _id
      username
      savedBooks {
        authors
        image
        bookId
        title
        link
        description
      }
    }
  }
`;