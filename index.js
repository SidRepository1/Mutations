const { ApolloServer } = require('apollo-server-express');
var express = require('express');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolver');
var app = express();

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// we used applyMiddleware({app}) , bcz now we can use app also. 
// other wise server.listen(4000,...) . could be used.
// now entry point for graphQL is localhost:4000/graphql
server.applyMiddleware({ app });
// The `listen` method launches a web server.
app.listen({ port: 4000 }, () => {
    console.log(`🚀   Server ready at http://localhost:4000${server.graphqlPath}`);
});
