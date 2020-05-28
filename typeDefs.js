const { gql } = require('apollo-server-express');
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

//   #location:Location!
const typeDefs = gql`

  type Event {
    id: ID!
    eventId: Int!
    title: String!
    location: Location! 
  }
  type Location {
    cor:[Int!]!
  }
  
  type Query {
    Event: [Event]
    getEventById(id: Int!): [Event]
  }

  type Mutation {
    addEvent(
      id: ID!
      eventId: Int!
      title: String!
      location: LocationInput!
      ): [Event]
  }
  input LocationInput {
    cor:[Int!]!
  }

`;

module.exports = typeDefs;