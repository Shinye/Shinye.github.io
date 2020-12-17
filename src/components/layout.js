import React from "react"
import { Link } from "gatsby"

const logo = require('../../static/images/logo.svg');
const styles = require('../styles/common/layout.scss');

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const header = (
    <h1 className="main-heading">
      <Link to="/">
        <img src={logo} className={styles.logo}/>
        <div className={styles.menu}>
          <Link className={styles.menu_item} to="/">Root</Link>
          <Link className={styles.menu_item} to="/">Peace</Link> 
          <Link className={styles.menu_item} to="/">Love</Link> 
          <Link className={styles.menu_item} to="/about">About</Link> 
        </div>
      </Link>
    </h1>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, eternal peace, bunch of love :)
      </footer>
    </div>
  )
}

export default Layout
