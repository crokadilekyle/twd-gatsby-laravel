import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Card from '../../components/Card'

function projects({ data }) {
    const { nodes } = data.allProject

    return (
        <Layout title="Projects">
            <h2>Website and Apps that I have built</h2>
            <div style={{maxWidth: '850px', margin: 'auto'}}>
                {nodes.map(project => (
                    <Card title={project.title} key={project.id}>
                        <img src={`https://kylemerl.com/storage/${project.featured_image}`} alt={project.title} className="max-h-96 mx-auto flex-grow"/>
                        <p>{ project.excerpt }</p>
                    </Card>
                ))}
            </div>
        </Layout>
    )
}


export const query = graphql`
query Projects {
  allProject (sort: {fields: created_at, order: DESC}){
    nodes {
      title
      slug
      featured_image
      id
      excerpt
    }
  }
}
`


export default projects