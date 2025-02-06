require("dotenv").config(); // Load environment variables from .env file
const { ApolloServer } = require("@apollo/server"); // Import ApolloServer from Apollo to set up the GraphQL server
const { typeDefs, resolvers } = require("./schema"); // Import typeDefs and resolvers from the schema file
const cors = require("cors");

// Set the port number, defaulting to 4000 if not provided in environment variables
const PORT = process.env.PORT || 4000;

// Initialize the Apollo Server with the schema type definitions and resolvers
const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  cors: {
    origin: "*",  // Allows all origins (change this in production for security)
    methods: "GET,POST",  // Allowed HTTP methods
    allowedHeaders: "Content-Type,Authorization"  // Allowed headers for requests
  }
});

// Start the server and listen on the specified port
server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`); // Log the URL when the server starts
});
