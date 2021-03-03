import React from "react"
import Layout from "../components/Layout";

export default function Home({ data }) {
  console.log(data);
  return (
    <Layout title="404 - Page Not Found">
      <h2>Oops... Looks like we can't find what you're looking for here.</h2>
    </Layout>
  );
}