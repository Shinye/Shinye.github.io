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
      요가와 러닝을 너무너무 사랑하고, 성수동 핫플 추천 잘 해드립니다.<br />
      <br />
      <div className={styles.contact}>
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
