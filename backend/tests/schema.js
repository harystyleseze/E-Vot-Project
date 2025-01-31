const { gql } = require('apollo-server');
const { composeClient } = require('../composedb');

// Define your GraphQL schema for your backend.

export const typeDefs = gql`
  type BasicProfile {
    id: ID!
    name: String!
    email: String!
    nin: String!
    wallet: String!
  }

  type ForumMessage {
    id: ID!
    sender: String!
    text: String!
    timestamp: String!
  }

  type Query {
    profiles: [BasicProfile!]
    forumMessages: [ForumMessage!]
  }

  type Mutation {
    createProfile(name: String!, email: String!, nin: String!, wallet: String!): BasicProfile
    createForumMessage(sender: String!, text: String!, timestamp: String!): ForumMessage
  }
`;

// Define resolvers that call the ComposeDB client.
// You can use the ComposeDB client's executeQuery to forward queries/mutations.
export const resolvers = {
  Query: {
    profiles: async () => {
      const query = `
        query {
          profiles {
            id
            name
            email
            nin
            wallet
          }
        }
      `;
      const result = await composeClient.executeQuery(query);
      return result.data.profiles;
    },
    forumMessages: async () => {
      const query = `
        query {
          forumMessages {
            id
            sender
            text
            timestamp
          }
        }
      `;
      const result = await composeClient.executeQuery(query);
      return result.data.forumMessages;
    }
  },
  Mutation: {
    createProfile: async (_, args) => {
      const mutation = `
        mutation CreateProfile($name: String!, $email: String!, $nin: String!, $wallet: String!) {
          createProfile(name: $name, email: $email, nin: $nin, wallet: $wallet) {
            id
            name
            email
            nin
            wallet
          }
        }
      `;
      const result = await composeClient.executeQuery(mutation, args);
      return result.data.createProfile;
    },
    createForumMessage: async (_, args) => {
      const mutation = `
        mutation CreateForumMessage($sender: String!, $text: String!, $timestamp: String!) {
          createForumMessage(sender: $sender, text: $text, timestamp: $timestamp) {
            id
            sender
            text
            timestamp
          }
        }
      `;
      const result = await composeClient.executeQuery(mutation, args);
      return result.data.createForumMessage;
    }
  }
};
