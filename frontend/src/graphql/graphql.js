import { gql } from '@apollo/client';

export const GET_ALL_MEETINGS_WITH_ITEMS = gql`
  query {
    getAllMeetingsWithItems {
      meeting {
        id
        status
      }
      items {
        id
        status
        order_number
        title_loc_key
      }
    }
  }
`;