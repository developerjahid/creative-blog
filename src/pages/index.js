import React from "react"
import { Link, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import {
  Card,
  CardImg,
  CardTitle,
  CardDeck,
  CardBody,
  CardSubtitle,
} from "reactstrap"
import "../styles/app.css"
import Layout from "../components/layout/layout"

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <div className="container">
        <div className="hero-header">
          <div className="headline">Hi! I'm Delog</div>
          <div className="primary-content">
            I have been specifically designed to become a digital home for
            designers and developers, help them build amazing professional
            looking websites with ease. You don't have to worry about nitty
            gritty of web hosting services to run a blog and yet take full
            advantage of CMS to manage content :)
          </div>
          <Link className="button -primary" to="/contact">
            Get in touch →
          </Link>
        </div>
        <CardDeck className="post">
          {posts.map(post => (
            <Card>
              <CardImg
                top
                width="100%"
                src={post.node.frontmatter.image}
                alt={post.node.frontmatter.title}
              />
              <CardBody>
                <CardTitle>{post.node.frontmatter.title}</CardTitle>
                <CardSubtitle>{post.node.frontmatter.date}</CardSubtitle>
              </CardBody>
            </Card>
          ))}
        </CardDeck>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query indexQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            tags
            path
            image
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
