import React from "react"
import Fade from "react-reveal/Fade"

const formFields = [
  {
    formName: "First Name",
    id: "firstName",
    required: true,
    type: "text",
    fullWidth: false,
  },
  {
    formName: "Last Name",
    id: "lastName",
    required: true,
    type: "text",
    fullWidth: false,
  },
  {
    formName: "Email",
    id: "emal",
    required: true,
    type: "text",
    fullWidth: false,
  },
  {
    formName: "Company",
    id: "company",
    required: true,
    type: "text",
    fullWidth: false,
  },
  {
    formName: "What can we help you make?",
    id: "task",
    required: true,
    type: "textArea",
    fullWidth: true,
  },
]

const buttonStyle = {
  width: "250px",
  border: "1px solid white",
  background: "#b02a37",
  borderRadius: "30px",
  color: "white",
  fontWeight: "400",
}

export default function End() {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#184478", color: "white" }}
    >
      <div className="container">
        <div className="flexbox">
          <Fade left>
            <h1 className="text-center my-5">Contact Us</h1>
            <form
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              name="contact"
              className="mb-5"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-row">
                {formFields.map(
                  ({ formName, id, required, type, fullWidth }) => {
                    return (
                      <div
                        key={id}
                        className={`${
                          fullWidth ? "col-md-12 mb-3" : "col-md-6 mb-3"
                        }`}
                      >
                        <label htmlFor="firstName">{formName}</label>
                        {type === "textArea" ? (
                          <textarea
                            type={type}
                            className="form-control"
                            id={id}
                            placeholder={formName}
                            required={required}
                          />
                        ) : (
                          <input
                            type={type}
                            className="form-control"
                            id={id}
                            placeholder={formName}
                            required={required}
                          />
                        )}
                      </div>
                    )
                  }
                )}
              </div>
              <button
                style={buttonStyle}
                type="submit"
                className="btn btn-primary btn-lg"
              >
                Submit
              </button>
            </form>
          </Fade>
        </div>
      </div>
    </div>
  )
}
