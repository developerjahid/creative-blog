import React from "react"
import { graphql } from "gatsby"
import Layout from "../../layout/layout"

export default function template({ data }) {

  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
        <div className="container space">
            <div className="blog-post">
                <img src={frontmatter.image} alt={frontmatter.title} />
                <h3 className="blog-title">{frontmatter.title}</h3>
                <h6>{frontmatter.date}</h6>
                <br />
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