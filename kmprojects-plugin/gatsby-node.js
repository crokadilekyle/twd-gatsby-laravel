const { ApolloClient } = require("apollo-client")
const { InMemoryCache } = require("apollo-cache-inmemory")
const { split } = require("apollo-link")
const { HttpLink } = require("apollo-link-http")
const { WebSocketLink } = require("apollo-link-ws")
const { getMainDefinition } = require("apollo-utilities")
const fetch = require("node-fetch")
const gql = require("graphql-tag")
const WebSocket = require("ws")

// exports.onPreInit = () => console.log("Loaded KM Projects Plugin")

// constants for your GraphQL Post and Author types
const PROJECT_NODE_TYPE = `Project`

const client = new ApolloClient({
    link: new HttpLink({ uri:"https://kylemerl.com/graphql", fetch}),
    cache: new InMemoryCache(),
})

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
  getNodesByType,
}) => {
  const { createNode } = actions
    
    const { data } = await client.query({
     query: gql`
       query {
         projects{
            id
            title
            url
            excerpt
            trixRender(field: "content")
            featured_image
            slug
            created_at
            updated_at
        }
       }
     `,
    })
    
    // console.log(data.projects)

  // loop through data and create Gatsby nodes
  data.projects.forEach(project =>
    createNode({
      ...project,
      id: createNodeId(`${PROJECT_NODE_TYPE}-${project.id}`),
      parent: null,
      children: [],
      internal: {
        type: PROJECT_NODE_TYPE,
        content: JSON.stringify(project),
        contentDigest: createContentDigest(project),
      },
    })
  )

  return
}
