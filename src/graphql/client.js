import {
	ApolloClient,
	InMemoryCache,
} from '@apollo/client';

export const client = new ApolloClient({
	uri: 'https://api-cdm-dev.herokuapp.com/graphql', // set up real URL
	cache: new InMemoryCache(),
});
