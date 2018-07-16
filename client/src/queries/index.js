import gql from 'graphql-tag';

export const GET_PRODUCT = gql`
  query product($id: String!) {
    users(id: $id) {
      name:username
      userphotos{
    pictures:photo{
            url
        }
    }
    }
  }
`;


export const GET_PRODUCTS = gql`
  query {
    users {
    id
    name:username
    pictures:userphotos{
            photo{
                name
                url
    		}
    }
    }
}
`;
