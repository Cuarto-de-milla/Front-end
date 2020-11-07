import { gql } from '@apollo/client';

export default gql`
	query getStations($first: Int, $gastype: String, $station: String) {
		nodePrice(first: $first, gasType_Icontains: $gastype, station_Name_Icontains: $station) {
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
