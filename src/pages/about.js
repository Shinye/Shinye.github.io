import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const styles = require('./about.scss');

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="about" />
      서버 개발자로 일하고 있는 송신예 입니다.<br />
      요가와 러닝을 좋아하고, 성수동 핫플 물어보시면 잘 알려드릴 수 있습니다.
      <br /><br />
      <div className={styles.contact}>
        <a href="https://github.com/Shinye" target="_blank">github</a> <br />
        <a href="https://www.linkedin.com/in/shinye-song" target="_blank">linkedin</a> <br />
        <a href="mailto:novembertwentysix@gmail.com" target="_blank">novembertwentysix@gmail.com</a> <br />
      </div>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
