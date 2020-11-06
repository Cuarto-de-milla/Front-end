import { gql } from '@apollo/client';

export default gql`
	query getLocations($first: Int) {
		nodeStation(first: $first) {
			pageInfo {
				hasNextPage
			}
			edges {
				node {
					id
					latitude
					longitude
					name
					town
					state
				}
			}
		}
	}
`;
