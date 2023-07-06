import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
    // Using Rick and Morty Api
  uri: 'https://rickandmortyapi.com/graphql', 
  cache: new InMemoryCache(),
});

export default apolloClient;
