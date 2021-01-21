import React from "react"
import { Link } from 'gatsby';
import "./layout.scss"

const Layout = ({ children }: any) => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
      </header>
      <main>{children}</main>

    </>
  )
}

export default Layout
