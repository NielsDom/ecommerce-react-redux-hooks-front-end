import React from 'react'
import { Query } from "react-apollo"
import { QUERY_EXAMPLE } from '../graphql/queries/books.js'

const Yeah = () => (
  <Query
    query={QUERY_EXAMPLE}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.books.map(x=><p>{x.title}</p>)
    }}
  </Query>
);


const HomeContainer = () => {
  return (
    <div>
      <Yeah />
    </div>
  );
}

export default HomeContainer;
