import { gql } from "apollo-boost"

export const QUERY_EXAMPLE = gql`
{
  books {
    title
    author
  }
}
  `