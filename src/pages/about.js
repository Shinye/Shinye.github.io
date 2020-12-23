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
      요가와 러닝을 좋아하고, 성수동 핫플 물어보시면 잘 알려드릴 수 있습니다.<br /><br />
      <small>p.s. 개발자라면 .dev 도메인 하나쯤은 있어야 한다고 해서 구매하긴 했는데 기술 블로그는 아닙니다. 개발 얘기도 하고 사는 얘기도 하고 그때그때 나누고 싶은 이야기를 씁니다 ㅎㅎ :) <br />
      p.p.s. 글에 대해서 혹은 개인적으로 하고 싶은 말씀이 있으시다면 메일을 주세요 💌 (귀찮아서 아직 댓글기능을 안달았어요...😁)</small>
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
