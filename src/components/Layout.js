import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"
import "../styles/layout.css"
import { Helmet } from "react-helmet"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio | Tigran Melkumyan</title>
      </Helmet>
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>
          Like whats you see? Email me at{" "}
          <a href="mailto: tigran3601@gmail.com">tigran3601@gmail.com</a> for a
          quote!
        </p>
        <p>&copy; Copyright 2021 Tigran</p>
      </footer>
    </div>
  )
}
