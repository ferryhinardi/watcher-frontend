import React from 'react';
import { ApolloProvider } from 'react-apollo';
import Root from './src/screens';
import createApolloClient from './src/apolloClient';

export default function App() {
  const client = createApolloClient(null);

  return (
    <ApolloProvider client={client}>
      <Root />
    </ApolloProvider>
  );
}
