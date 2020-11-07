import { gql } from "@apollo/client";

export default gql`
mutation createComplaint(
        $description: String!,
        $linkEvidence: String!,
        $offeredPrice: Float!,
        $typeComplaint: String!,
        $priceId: Int!
    ) {
    createComplaint(
        description: $description,
        linkEvidence: $linkEvidence,
        offeredPrice: $offeredPrice,
        typeComplaint: $typeComplaint,
        priceId: $priceId
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
