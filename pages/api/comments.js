// Any file inside the folder page/api is mapped to /api/* and 
// will be treated as an API enpoint instead of a page. 

import { GraphQLClient, gql } from 'graphql'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default function comments(request, response) {

  const { name, email, slug, comment } = request.body;

  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`
    }
  })

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: { name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug}}}) { id }
    }
  `

  const result = await graphqlClient.request(query, request.body)

  return response.status(200).send(result)
}
