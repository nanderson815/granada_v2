import React, { useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import FocusTrap from "focus-trap-react"
import "./Navbar.css"

const textStyle = {
  color: "white",
  fontWeight: "600",
  letterSpacing: "0.1em",
}

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="pos-f-t">
      <FocusTrap active={open}>
        <div id="myNav" class="overlay" style={{ height: open && "100%" }}>
          <button class="closebtn" onClick={() => setOpen(false)}>
            &times;
          </button>
          <div class="overlay-content">
            <div className="nav-item active">
              <AnchorLink
                offset={() => 500}
                className="nav-link"
                href="#home"
                onClick={() => setOpen(false)}
              >
                Home
              </AnchorLink>
            </div>
            <div className="nav-item">
              <AnchorLink
                className="nav-link"
                href="#services"
                onClick={() => setOpen(false)}
              >
                Services
              </AnchorLink>
            </div>
            <div className="nav-item">
              <AnchorLink
                className="nav-link"
                href="#contact"
                onClick={() => setOpen(false)}
              >
                Contact
              </AnchorLink>
            </div>
          </div>
        </div>
      </FocusTrap>

      <nav className="navbar navbar-dark">
        <div className="container">
          <h4 style={textStyle}>Granada Labs</h4>
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen(true)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
