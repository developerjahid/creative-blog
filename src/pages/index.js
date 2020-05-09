import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/app.css"
import Layout from "../components/layout/layout"

const IndexPage = () => (
  <Layout>
    <div className="container">
      <div className="hero-header">
        <div className="headline">Hi! I'm Delog</div>
        <div className="primary-content">
          I have been specifically designed to become a digital home for
          designers and developers, help them build amazing professional looking
          websites with ease. You don't have to worry about nitty gritty of web
          hosting services to run a blog and yet take full advantage of CMS to
          manage content :)
        </div>
        <a className="button -primary" href="/contact">
          Get in touch →
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
