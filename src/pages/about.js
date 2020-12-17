import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="about" />
      서버 개발자로 일하고 있는 송신예 입니다.<br />
      다음의 분야들을 도와줄 수 있습니다 <br />
      <li>요가</li>
      <li>러닝</li>
      <li>화가 나서 나를 잃는 기분일 때 멘탈 관리법</li>
      <li>성수동 핫플 소개</li>
      <br />
      <a href="https://github.com/Shinye" target="_blank">github</a> | <a href="https://www.linkedin.com/in/shinye-song" target="_blank">linkedin</a> | <a href="mailto:novembertwentysix@gmail.com" target="_blank">novembertwentysix@gmail.com</a>
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
