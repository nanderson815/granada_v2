import React from "react"
import Fade from "react-reveal/Fade"

const formFields = [
  {
    name: "First Name",
    id: "firstName",
    required: true,
    type: "text",
    fullWidth: false,
  },
  {
    name: "Last Name",
    id: "lastName",
    required: true,
    type: "text",
    fullWidth: false,
  },
  {
    name: "Email",
    id: "email",
    required: true,
    type: "text",
    fullWidth: false,
  },
  {
    name: "Company",
    id: "company",
    required: true,
    type: "text",
    fullWidth: false,
  },
  {
    name: "What can we help you make?",
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

const inputSwitcher = displayType => {
  switch (displayType) {
    case "textArea":
      return "textarea"
    case "text":
      return "input"
    default:
      return "input"
  }
}

export default function End() {
  return (
    <div
      className="container-fluid py-5"
      id="contact"
      style={{ backgroundColor: "#184478", color: "white" }}
    >
      <div className="container">
        <div className="flexbox">
          <Fade left>
            <h1 className="text-center my-5">Contact Us</h1>
            <p>Please fill out the form to schedule a free 15 minute consultation</p>
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
                {formFields.map(({ name, id, required, type, fullWidth }) => {
                  const Switched = inputSwitcher(type)
                  return (
                    <div
                      key={id}
                      className={`${
                        fullWidth ? "col-md-12 mb-3" : "col-md-6 mb-3"
                      }`}
                    >
                      <label htmlFor={name}>{name}</label>
                      <Switched
                        type={type}
                        className="form-control"
                        id={id}
                        name={id}
                        placeholder={name}
                        required={required}
                      />
                    </div>
                  )
                })}
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
