import { Link } from "gatsby"
import React from "react"
import Home from "-!svg-react-loader!../svg/building.svg"
import Resume from "-!svg-react-loader!../svg/browser.svg"
import Portfolio from "-!svg-react-loader!../svg/imac.svg"
import PortfolioM from "-!svg-react-loader!../svg/iphone.svg"
import "../styles/global.css"
import "../styles/layout.css"

export default function Navbar() {
  return (
    <nav>
      <div className="links">
        <Link to="/" activeClassName="active" className="link home">
          <Home className="link-icon" />
          <span className="link-title">Home</span>
        </Link>
        <Link to="/resume" activeClassName="active" className="link resume">
          <Resume className="link-icon" />
          <span className="link-title">Resume</span>
        </Link>
        <Link
          to="/projects"
          activeClassName="active"
          className="link portfolio"
        >
          <Portfolio className="link-icon pc" />
          <PortfolioM className="link-icon mobile" />
          <span className="link-title">Portfolio</span>
        </Link>
      </div>
    </nav>
  )
}
