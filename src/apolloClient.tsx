import ApolloClient from 'apollo-boost';
import config from './config';

const HOST = config.API_HOST || 'http://localhost:4000';

const onError = ({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    for (let err of graphQLErrors) {
      // handle errors differently based on its error code
      switch (err.extensions.code) {
        case 'INTERNAL_SERVER_ERROR':
          console.error(err.message, 'Gagal');
          forward(err.message);
          break;
        default:
          break;
      }
    }
  }

  if (networkError) {
    console.error(networkError, 'Network Error');
  }
};

const createApolloClient = tokenParam => {
  const client = new ApolloClient({
    uri: HOST,
    request: async operation => {
      let authorization = '';
      const token = null;

      if (tokenParam) {
        authorization = `MasterKey ${tokenParam}`;
      }

      if (token) {
        authorization = `Bearer ${token}`;
      }

      operation.setContext({ headers: { authorization } });
    },
    onError,
  });

  return client;
};

export default createApolloClient;
