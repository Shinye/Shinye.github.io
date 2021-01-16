import React from "react"
import { Link } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const logo = require('../../static/images/logo.svg');

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  const menu_container = {
    marginTop: '-10px'
  };

  const menu_item_style = {
    fontSize: '15px',
    fontStyle: 'italic',
    marginRight: '7px',
    textDecoration: 'none',
    color: '#2e353f',
    fontWeight: '300',
  };

  const logo_style = {
    width: '80px',
  };

  const header = (
    <h1 className="main-heading">
      <Link to="/">
        <img style={logo_style} src={logo} />
      </Link>
      <div style={menu_container}>
        <a style={menu_item_style} href="/">index</a>
        <a style={menu_item_style} href="/peace">peace</a> 
        <a style={menu_item_style} href="/love">love</a> 
        <a style={menu_item_style} href="/about">about</a> 
      </div>
      <div>
        <ThemeToggler></ThemeToggler>
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
