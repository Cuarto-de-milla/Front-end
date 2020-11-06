import { gql } from '@apollo/client';

export default gql`
	query getStations($first: Int) {
		nodePrice(first: $first) {
			pageInfo {
				hasNextPage
			}
			edges {
				node {
					id
					station {
						name
						town
						latitude
            longitude
					}
					gasType
					price
				}
			}
		}
	}
`;
