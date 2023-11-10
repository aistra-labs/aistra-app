import React, { memo, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./header.css";
import { images } from "../images";

const Header = (props) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [apiData, setApiData] = useState(null);
  const [isNameValid, setNameValid] = useState(false);
  const [isPhoneValid, setPhoneValid] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);
  const [isMessageValid, setMessageValid] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

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

  let myHeaders = new Headers();
  myHeaders.append(
    "authority",
    "contact.apps-api.instantpage.secureserver.net"
  );
  myHeaders.append("accept", "*/*");
  myHeaders.append("accept-language", "en-US,en;q=0.9,hi;q=0.8");
  myHeaders.append("content-type", "application/json; charset=UTF-8");
  myHeaders.append("dnt", "1");
  myHeaders.append("origin", "https://aistra.com");
  myHeaders.append("referer", "https://aistra.com/");
  myHeaders.append(
    "sec-ch-ua",
    '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"'
  );
  myHeaders.append("sec-ch-ua-mobile", "?0");
  myHeaders.append("sec-ch-ua-platform", '"macOS"');
  myHeaders.append("sec-fetch-dest", "empty");
  myHeaders.append("sec-fetch-mode", "cors");
  myHeaders.append("sec-fetch-site", "cross-site");
  myHeaders.append(
    "user-agent",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
  );

  const raw = (data) => ({
    websiteId: "a2ef901d-2eff-440f-85c0-23e918f54b7d",
    widgetId: "ca116b4c-53f1-4c5f-96e9-32b7974d6f30",
    pageId: "00000000-0000-0000-0000-000000000000",
    accountId: "7cb1ae1f-3127-11ee-8334-3417ebe73f23",
    domainName: "aistra.com",
    optedToSubscribe: false,
    locale: "en-IN",
    metadata: {
      formIdentifier: "MESSAGING_EMAIL",
      pathName: "/",
      deviceType: "desktop",
      deviceOs: "macOS",
      browserName: "Chrome",
    },
    formData: [
      {
        label: "Name",
        value: data.name,
        keyName: "name",
      },
      {
        label: "Email",
        value: data.email,
        replyTo: true,
        keyName: "email",
      },
      {
        label: "How can we help?",
        value: data.help,
        keyName: "message",
      },
      {
        label: "phone",
        value: data.phone,
        keyName: "phone",
      },
      {
        label: "_app_id",
        value: "",
      },
    ],
    recaptchaToken:
      "03AFcWeA6GUslX-k4wWm-TYLeg2kgRXrXcZQICFU2Sp04VYvOd6QMwRcMYJLvHWL9pB8B9aCkkrADjHf8iM4dHgrM8_bwToSuZ-HalP-3TnKxkHciZ3Xk56j_CnPH65z_1P8jZyd9cWOCKOC2W6JtIpMW7GRecNxGLv9PO5VzsPiizCDgTF0SFD_mi2vShPbo3g4IisYEDTvpqHAGentnxInSGt-3oqlzkKH8uFOAXRJkrh8VQOoniRCPomzwmFoSwgVAJbQ58rxQIPe0gZZOOm7W29xc0cSdjG7S5WOJDQbqoCZ8g-qWMz_Lrwc6C40Oc5II13it46xp0Uk7Ib9ZQ1tYSH7JN_N6JiDPY_UsEPMUwS_vjmtGaqPUSmNCDGt1siHWRoZdb0FwvWMis1XHOiTxP4d4Xy6iUAo4rc2bQUWDHWe8X-fehGR-3dPfYs5GugFoLmr_tTBltb482dp4uRlibggoYzQWcK4qJfiUkoM5kBlUBdxNQhr-n8j3dZhlgZzgUebEhi6Q1xikAOkgV6Yw2XrpB9-aOBDl2JHNPUQeLxGlvDJ3FsbOfxL6t73poyyHrc3aug8QqC8tzR7n2oXvAV3uRQWhGwg",
    isReseller: false,
  });

  const requestOptions = (data) => ({
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(raw(data)),
    redirect: "follow",
  });

  const handleSendClick = () => {
    const apiUrl =
      "https://contact.apps-api.instantpage.secureserver.net/messaging";
    const rawData = {
      name: name,
      phone: phone,
      email: email,
      help: message,
    };
    async function fetchData() {
      try {
        const response = await fetch(apiUrl, requestOptions(rawData));
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setApiData(jsonData);
        console.log("result...", jsonData);
      } catch (err) {}
    }
    fetchData();
  };

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-0 bg-dark shadow">
        <div className="container">
          <a href="/" className="navbar-brand p-0">
            <img
              src={images["aistra-labs-logo.svg"]}
              alt="aistra logo"
              className="my-brand"
              width="120"
              height="120"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="mx-auto"></div>
            <ul className="navbar-nav align-items-center header-tabs">
              <li className="nav-item">
                <a className="nav-link header-tab" href="/#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link header-tab" href="/#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link header-tab" href="/#products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link header-tab" href="/#team">
                  Team
                </a>
              </li>
            </ul>
            <div className="ms-5 footer-mobile-btn">
              <a
                className="btn btn-outline-warning g-btn header-btn"
                href="/#careers"
              >
                Careers
              </a>
              <div
                className="btn btn-primary g-btn ms-4 form-overlay header-btn get-started-btn"
                role="button"
                onClick={handleShow}
              >
                Get Started
              </div>
              <Modal show={show} onHide={handleClose}>
                <div className="cross-btn-container" onClick={handleClose}>
                    <img className="cross-btn-img" src={images['cross-btn.svg']} alt="Close button" />
                </div>
                <div className="form-header">
                  <div className="form-title">Get In Touch</div>
                  <div className="form-desc">We'd love to hear from you </div>
                </div>
                <Modal.Body>
                  {!apiData ? (
                    <form className="form-container">
                      <div className="form-group form-field">
                        <label className="form-label" htmlFor="name">Name*</label>
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
                        <label className="form-label" htmlFor="phone">Phone*</label>
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
                        <label className="form-label" htmlFor="email">Email*</label>
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
                        <label className="form-label" htmlFor="message">How can we help you?*</label>
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
        </div>
      </nav>
    </>
  );
};

export default memo(Header);
