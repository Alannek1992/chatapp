import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import fetch from "cross-fetch";

const WebSocket = require("ws");

const getClient = (jwt?: string) => {
  // Create an http link:
  const httpLink = new HttpLink({
    uri: "http://localhost:4000",
    fetch,
    headers: {
      Authorization: jwt ? `Bearer ${jwt}` : "",
    },
  });

  // Create a WebSocket link:
  const wsLink = new WebSocketLink({
    uri: "ws://localhost:4000",
    options: {
      reconnect: true,
      connectionParams: () => {
        if (jwt) {
          return {
            Authorization: `Bearer ${jwt}`,
          };
        }
      },
    },
    webSocketImpl: WebSocket,
  });

  // using the ability to split links, you can send data to each link
  // depending on what kind of operation is being sent
  const link = split(
    // split based on operation type
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    httpLink
  );

  // Instantiate client
  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
};

export default getClient;
