import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/Layout";
import Card from "../components/Card";

export default function Home({ data }) {

  return (
    <Layout title="Twin Web Developement">
      <h2>Websites and Web Apps for Small Business and Non Profits</h2>
      <div className="flex flex-col lg:flex-row">
        <Card title="Latest Blog Post">
            <h4>Logging to Trello Card with Laravel</h4>
            <img src="" alt="Latest Blog Post" className="max-h-96 mx-auto flex-grow"/>
            <p>Learn how to customize Laravel's logging behaviour by logging directly to a card in a Trello board.</p>
        </Card>

        <Card title="Latest Project Details">
            <h4>50 Thousand PDFs</h4>
            <img src="https://kylemerl.com/storage/featured_images/B08jiYz3s3n6amHgDfTQhVnq9qqS1QQ5Y60r93hS.jpeg" alt="Latest Project" className="max-h-96 mx-auto"/>
            <p>PHP script to create 50 thousand PDFs from database</p>
        </Card>
      </div>
      <div style={{height: '500px'}}>
        About Me Section
      </div>
    </Layout>
  );
}

export const query = graphql`
query SiteMeta {
  site {
    siteMetadata {
      description
      title
    }
  }
}
`
