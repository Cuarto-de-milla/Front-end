import { from } from "@apollo/client";
import { gql} from '@apollo/client'

export default createComplaint = gql`
   mutation {
  createComplaint(
    	description: "dasdas",
    	linkEvidence: "sadasddas",
    	offeredPrice: 500,
    	typeComplaint: "new complaint",
    	priceId: 123213
  ) {
    complaint {
      user {
        username
      }
      station {
        id
      }
      description
      linkEvidence
      typeComplaint
      actualPrice {
        id
      }
      offeredPrice
    }
  }
}
`;
