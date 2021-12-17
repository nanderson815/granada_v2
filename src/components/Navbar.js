import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

function Navbar() {
  const textStyle = {
    color: "white",
    fontWeight: "600",
    letterSpacing: "0.1em",
  }
  return (
    <div className="pos-f-t">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-light   p-4">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <AnchorLink className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink className="nav-link" href="#services">
                Services
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink className="nav-link" href="#contact">
                Contact
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
      <nav className="navbar navbar-dark">
        <h4 style={textStyle}>Granada Labs</h4>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  )
}

export default Navbar
