import React from "react"

function Footer() {
  return (
    <div>
      <footer className="py-2" style={{ backgroundColor: "#1c305c" }}>
        <div className="container">
          <p >
            Granada Labs | © Copyright {new Date(Date.now()).getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
