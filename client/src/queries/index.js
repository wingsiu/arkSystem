import gql from 'graphql-tag';

export const GET_PRODUCT = gql`
  query product($id: String!) {
    userphoto(id: $id) {
      _id
      name
    pictures:photo{
            url
        }
    }
  }
`;

export const GET_PRODUCTS = gql`
  query {
    userphotos {
      _id
      name
    pictures:photo{
            url
        }
    }
  }
`;
