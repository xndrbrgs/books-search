const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    authors: [String]
    title: String!
    image: String!
    description: String!
    link: String!
  }

  type inputBook {
    bookId: ID!
    authors: [String]
    title: String!
    image: String!
    description: String!
    link: String!
  }

  type Auth {
      token: ID!
      user: User
  }

  type Query {
      me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    saveBook(newBook: InputBook!): User
    removeBook(bookId: ID!): User
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;