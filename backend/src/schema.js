const { gql } = require("apollo-server");
const { composeClient } = require("./composedb");

// Define GraphQL types using the gql template literal
const typeDefs = gql`
  type BasicProfile {
    id: ID! # Unique identifier for the profile
    name: String! # User's name (required)
    email: String! # User's email (required)
    nin: String! # User's National ID number (required)
    wallets: [String!]! # List of wallet addresses (required)
  }

  type ForumMessage {
    id: ID! # Unique identifier for the forum message
    sender: String! # Sender's username (required)
    text: String! # Message content (required)
    timestamp: DateTime! # Time when the message was sent (required)
  }

  type Query {
    getProfileByEmail(email: String!): BasicProfile # Fetch a user profile by email
    forumMessages: [ForumMessage!] # Get the list of forum messages
  }

  type Mutation {
    createProfile(
      name: String!
      email: String!
      nin: String!
      wallet: String!
    ): BasicProfile # Create a new user profile
    addWalletToProfile(email: String!, wallet: String!): BasicProfile # Add a new wallet to a user profile
    createForumMessage(
      sender: String!
      text: String!
      timestamp: String!
    ): ForumMessage # Create a new forum message
  }
`;

const resolvers = {
  Query: {
    // Fetch user profile by email
    getProfileByEmail: async (_, { email }) => {
      const query = `
        query GetProfileByEmail($email: String!) {
          profiles(where: { email: $email }) {
            id
            name
            email
            nin
            wallets
          }
        }
      `;
      const result = await composeClient.executeQuery(query, { email });

      // Error handling if profile doesn't exist
      if (!result.data.profiles.length) {
        throw new Error("Profile not found");
      }

      // Return the first profile (since emails are unique)
      return result.data.profiles[0];
    },

    // Fetch forum messages with pagination (first 100)
    forumMessages: async () => {
      const query = `
        query {
          forumMessageIndex(first: 100) {
            edges {
              node {
                id
                sender
                text
                timestamp
              }
            }
          }
        }
      `;
      const result = await composeClient.executeQuery(query);

      // Return the messages from the response
      return result.data.forumMessageIndex.edges.map((edge) => edge.node);
    },
  },

  Mutation: {
    // Create a new user profile
    createProfile: async (_, args) => {
      // Check if the email already exists
      const query = `
  query GetProfileByEmail($email: String!) {
    profiles(where: { email: $email }) {
      id
    }
  }
`;

      const existingProfile = await composeClient.executeQuery(query, {
        email,
      });

      // If the email already exists, throw an error
      if (existingProfile.data.profiles.length > 0) {
        throw new Error("Email is already in use");
      }

      // Proceed with creating the profile if email is unique

      const mutation = `
        mutation CreateProfile($name: String!, $email: String!, $nin: String!, $wallets: [String!]!) {
          createProfile(name: $name, email: $email, nin: $nin, wallets: $wallets) {
            id name email nin wallets
          }
        }
      `;

      // Execute mutation to create the profile
      const result = await composeClient.executeQuery(mutation, {
        ...args,
        wallets: [args.wallet],
      });

      // Return the created profile
      return result.data.createProfile;
    },

    // Add a new wallet to an existing profile
    addWalletToProfile: async (_, { email, wallet }) => {
      // Fetch the existing profile using email
      const query = `
        query GetProfileByEmail($email: String!) {
          profiles(where: { email: $email }) {
            id wallets
          }
        }
      `;
      const profileResult = await composeClient.executeQuery(query, { email });

      // Handle if the profile is not found
      if (!profileResult.data.profiles.length) {
        throw new Error("Profile not found");
      }

      const userProfile = profileResult.data.profiles[0];
      const existingWallets = userProfile.wallets;

      // Check if the wallet already exists
      if (existingWallets.includes(wallet)) {
        throw new Error("Wallet already linked to this profile");
      }

      // Add the new wallet to the list and update the profile
      const mutation = `
        mutation UpdateProfile($id: ID!, $wallets: [String!]!) {
          updateProfile(id: $id, wallets: $wallets) {
            id wallets
          }
        }
      `;
      const updatedResult = await composeClient.executeQuery(mutation, {
        id: userProfile.id,
        wallets: [...existingWallets, wallet], // Add the new wallet to the profile
      });

      // Return the updated profile
      return updatedResult.data.updateProfile;
    },

    // Create a new forum message
    createForumMessage: async (_, args) => {
      const mutation = `
        mutation ($input: CreateForumMessageInput!) {
          createForumMessage(input: $input) {
            document {
              id
              sender
              text
              timestamp
            }
          }
        }
      `;
      const variables = { input: args }; // Pass the input as a variable

      // Execute mutation to create the forum message
      const result = await composeClient.executeQuery(mutation, variables);

      // Return the created forum message
      return result.data.createForumMessage.document;
    },
  },
};

module.exports = { typeDefs, resolvers };
