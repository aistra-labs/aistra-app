import React, { memo, useState } from "react";
import "./footer.css";
import { images } from "../images";
import { Button, Modal } from "react-bootstrap";

const Footer = (props) => {
  const { refAbout, refTeam, refCareers } = props;
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [isNameValid, setNameValid] = useState(false);
  const [isPhoneValid, setPhoneValid] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);
  const [isMessageValid, setMessageValid] = useState(false);

  const isFormValid =
    isNameValid && isPhoneValid && isEmailValid && isMessageValid;

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    // Add your name validation logic here
    const isValid = value.trim() !== ""; // Example: Name is required
    setNameValid(isValid);
  };

  const PHONE_REGEX =
    /^\+?(\d{1,3})?[-. ]?(\(\d{1,3}\)[-. ]?)?(\d{1,5}[-. ]?)?(\d{1,4}[-. ]?)?(\d{1,4})$/;

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);

    // Phone number validation
    const isValid = PHONE_REGEX.test(value);
    setPhoneValid(isValid);
  };

  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Email validation
    const isValid = EMAIL_REGEX.test(value);
    setEmailValid(isValid);
  };

  const handleMessageChange = (e) => {
    const value = e.target.value;
    setMessage(value);
    // Add your message validation logic here
    const isValid = value.trim() !== ""; // Example: Message is required
    setMessageValid(isValid);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const requestOptions = (requestBody) => ({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  const handleSendClick = () => {
    const apiUrl = "http://3.29.218.31:8090/contact-us";
    const requestBody = {
      name: name,
      phone: phone,
      email: email,
      message: message,
    };
    async function fetchData() {
      try {
        const response = await fetch(apiUrl, requestOptions(requestBody));
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // const jsonData = await response.json();
        setApiData("success");
        console.log("Success...");
      } catch (err) {}
    }
    fetchData();
  };

  return (
    <div className="footer-container">
      <div className="footer-body">
        <div className="aistra-logo-container">
          <img
            className="aistra-logo"
            src={images["aistra-labs-logo.svg"]}
            alt="Aistra Logo"
          />
        </div>
        <div className="footer-mid-section">
          <div className="footer-content">
            <div className="footer-header">Company</div>
            <div className="footer-links" style={{ display: "flex" }}>
              <a href="/#about" className="link-text">
                About us
              </a>
              <a href="/#team" className="link-text">
                Team
              </a>
              <div className="link-text" onClick={handleShow}>
                Get in touch
              </div>
              <Modal show={show} onHide={handleClose}>
                <div className="cross-btn-container" onClick={handleClose}>
                  <img
                    className="cross-btn-img"
                    src={images["cross-btn.svg"]}
                    alt="Close button"
                  />
                </div>
                <div className="form-header">
                  <div className="form-title">Get In Touch</div>
                  <div className="form-desc">We'd love to hear from you</div>
                </div>
                <Modal.Body>
                  {!apiData ? (
                    <form className="form-container">
                      <div className="form-group form-field">
                        <label className="form-label" htmlFor="name">
                          Name*
                        </label>
                        <input
                          type="text"
                          className="form-field-input"
                          id="name"
                          placeholder="Enter your name"
                          value={name}
                          onChange={handleNameChange}
                        />
                        {!isNameValid && (
                          <div className="error-message">*Name is required</div>
                        )}
                      </div>
                      <div className="form-group form-field">
                        <label className="form-label" htmlFor="phone">
                          Phone*
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="form-field-input"
                          placeholder="+1-555-55555"
                          value={phone}
                          onChange={handlePhoneChange}
                        />
                        {!phone.length && (
                          <div className="error-message">
                            *Phone number is required
                          </div>
                        )}
                        {!isPhoneValid && phone.length > 0 && (
                          <div className="error-message">
                            *Phone number is invalid
                          </div>
                        )}
                      </div>
                      <div className="form-group form-field">
                        <label className="form-label" htmlFor="email">
                          Email*
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="form-field-input"
                          placeholder="john.doe@example.com"
                          value={email}
                          onChange={handleEmailChange}
                        />
                        {!email.length && (
                          <div className="error-message">
                            *Email is required
                          </div>
                        )}
                        {!isEmailValid && email.length > 0 && (
                          <div className="error-message">*Email is invalid</div>
                        )}
                      </div>
                      <div className="form-group form-field">
                        <label className="form-label" htmlFor="message">
                          How can we help you?*
                        </label>
                        <textarea
                          id="message"
                          className="form-field-input form-text-area"
                          placeholder="Enter Message"
                          rows="4"
                          value={message}
                          onChange={handleMessageChange}
                        />
                        {!isMessageValid && (
                          <div className="error-message">
                            *Message is required
                          </div>
                        )}
                      </div>
                    </form>
                  ) : (
                    <div className="thank-you-text">Thank You</div>
                  )}
                </Modal.Body>
                <div className="form-footer">
                  {!apiData && (
                    <Button
                      variant="primary"
                      className="form-submit-btn"
                      onClick={handleSendClick}
                      disabled={!isFormValid}
                    >
                      Submit
                    </Button>
                  )}
                </div>
              </Modal>
            </div>
          </div>
          <div className="footer-content">
            <div className="footer-header">Useful Links</div>
            <div className="footer-links" style={{ display: "flex" }}>
              <a href="/#careers" className="link-text">
                Careers
              </a>
              <a href="/privacypolicy" className="link-text">
                Privacy Policy
              </a>
              <a href="/termsandcondition" className="link-text">
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>
        <div className="footer-content">
          <div className="footer-header">Contact Us</div>
          <div className="footer-links" style={{ display: "flex" }}>
            <div className="email-text">info@aistra.com</div>
            <div className="address">
              307 Seventh Avenue Suite 1601, New York, NY 10001.
            </div>
          </div>
        </div>
        <div className="footer-content">
          <div className="footer-header">Find us on</div>
          <div className="social-links" style={{ display: "flex" }}>
            <a
              href="https://twitter.com/AistraLabs"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-container"
            >
              <img
                className="social-icon"
                src={images["twitter.svg"]}
                alt="Twitter Logo"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/aistra-labs/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-container"
            >
              <img
                className="social-icon"
                src={images["linkedin.svg"]}
                alt="Linkedin Logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
