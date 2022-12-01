import { gql } from '@apollo/client';

export const SITTER_REQUESTS = gql`
query sitterRequests {
    sitterReqs {
      city
      time
      submittedBy
      state
      specialRequests
      price
      matched
      date
      createdAt
    }
  }
`;