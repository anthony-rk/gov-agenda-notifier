import { gql } from '@apollo/client';

export const GET_ALL_MEETINGS = gql`
  query {
    getAllMeetings {
      id,
      meeting_start_timestamp,
      status
    }
  }
`;

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

export const GET_MEETING_WITH_ITEMS = gql`
  query GetMeetingWithItems($id: Int!) {
    getMeetingWithItems(id: $id) {
      meeting {
        id,
        status,
        meeting_type,
        meeting_start_timestamp,
        meeting_end_timestamp,
        virtual_meeting_url,
        virtual_meeting_id,
        call_in_information,
        email_before_meeting,
        email_during_meeting,
        ecomment,
        youtube_link,
      }
      items {
        id,
        meeting_id,
        parent_meeting_item_id,
        order_number,
        status,
        item_start_timestamp,
        item_end_timestamp,
        content_categories,
        description_loc_key,
        title_loc_key
      }

    }
  }
`;

export const CREATE_SUBSCRIPTIONS = gql`
  mutation CreateSubscriptions(
    $phone_number: String,
    $email_address: String,
    $meetings: [meetingInput]
  ) {
    createSubscriptions(phone_number: $phone_number, email_address: $email_address, meetings: $meetings) {
      id
    }
  }
`;

export const CONFIRM_EMAIL = gql`
  mutation confirmEmail(
    $token: String
  ) {
    confirmEmail(token: $token)
  }
`;

export const UNCONFIRM_EMAIL = gql`
  mutation unconfirmEmail(
    $token: String
  ) {
    unconfirmEmail(token: $token)
  }
`;

export const DELETE_MEETING = gql`
  mutation deleteMeeting(
    $id: Int!
  ) {
    deleteMeeting(id: $id)
  }
`;
