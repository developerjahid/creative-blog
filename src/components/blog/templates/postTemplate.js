import React from "react"
import { graphql } from "gatsby"
import Layout from "../../layout/layout"

export default function template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <div className="container">
        <div className="blog-post">
          <div
            style={{ backgroundImage: `url(${frontmatter.image})` }}
            className="post-thumbnail"
          >
            <h3 className="blog-title">{frontmatter.title}</h3>
            <h6 className="blog-date">{frontmatter.date}</h6>
          </div>

          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const templateQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        image
      }
    }
  }
`
