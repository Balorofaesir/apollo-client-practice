"use client"

import { useQuery, gql } from '@apollo/client';

const GET_POSTS = gql`
  query getCharacters {
    characters {
      results {
        name
        image
      }
    }
  }
`;

function Posts() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.characters.results.map((character) => (
        <li key={character.name}>
          <p>{character.name}</p>
          <div><img src={character.image} alt="" /></div>
        </li>
      ))}
    </ul>
  );
}

export default Posts;
