require('dotenv').config(); // load environment variables from .env
const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('./schema');

const server = new ApolloServer({ typeDefs, resolvers });

// Start the Apollo Server
server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(`🚀 Apollo Server ready at ${url}`);
});