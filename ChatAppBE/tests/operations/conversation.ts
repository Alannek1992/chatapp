import gql from "graphql-tag";

export const createConversation = gql`
  mutation($data: CreateConversationInput!) {
    createConversation(data: $data) {
      id
      participants {
        id
        user {
          nickname
        }
      }
    }
  }
`;

export const sendMessage = gql`
  mutation($data: SendMessageInput!) {
    sendMessage(data: $data) {
      id
      conversation {
        messages {
          id
          content
        }
      }
    }
  }
`;

export const getConversation = gql`
  query($conversationId: ID!) {
    getConversation(conversationId: $conversationId) {
      id
      participants {
        user {
          nickname
        }
      }
      messages {
        content
      }
    }
  }
`;

export const getConversations = gql`
  query {
    getConversations {
      id
      participants {
        user {
          nickname
        }
      }
      messages {
        content
      }
    }
  }
`;

export const getMessages = gql`
  query($conversationId: ID!) {
    getMessages(conversationId: $conversationId) {
      id
      content
      conversation {
        id
      }
      user {
        nickname
      }
    }
  }
`;
