import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const uri = "https://api.code-challenge.ze.delivery/public/graphql";
const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

export const DISTRIBUTOR_ID = gql`
  query pocSearchMethod(
    $now: DateTime!
    $algorithm: String!
    $lat: String!
    $long: String!
  ) {
    pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
      id
    }
  }
`;

export const PRODUCTS = gql`
  query poc($id: ID!, $categoryId: Int, $search: String) {
    poc(id: $id) {
      id
      products(categoryId: $categoryId, search: $search) {
        id
        title
        images {
          url
        }
        productVariants {
          price
        }
      }
    }
  }
`;

export default client;
