import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

// I think this $slug is equal to context.slug and that is how when the page is created, it gets the info by accessing props.data

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

export default function Blog(props) {
  console.log(props.data) // this will be exactly the markdown file I was looking for
  return <Layout></Layout>
}
