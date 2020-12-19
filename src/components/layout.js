import React from "react"
import { Link } from "gatsby"

const styles = require('./layout.scss');

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  const menu_item_style = {
    fontSize: '15px',
    fontStyle: 'italic',
    marginRight: '7px',
    textDecoration: 'none',
    color: '#2e353f',
    fontWeight: '300',
  };

  const header = (
    <h1 className="main-heading">
      <Link to="/">
        🕊🤍
      </Link>
      <div>
        <a style={menu_item_style} className={styles.menu_item} href="/">Root</a>
        <a style={menu_item_style} className={styles.menu_item} href="/peace">Peace</a> 
        <a style={menu_item_style} className={styles.menu_item} href="/love">Love</a> 
        <a style={menu_item_style} className={styles.menu_item} href="/about">About</a> 
      </div>
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
