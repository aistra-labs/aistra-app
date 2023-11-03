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

  const PHONE_REGEX = /^[0-9]{10}$/;

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
        setLoading(false);
        console.log("result...", jsonData);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }
    fetchData();
  };

  const handleAboutClick = () => {
    refAbout.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleTeamClick = () => {
    refTeam.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCareersClick = () => {
    refCareers.current?.scrollIntoView({ behavior: "smooth" });
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
              <div onClick={handleAboutClick} className="link-text">
                About us
              </div>
              <div onClick={handleTeamClick} className="link-text">
                Team
              </div>
              <div className="link-text" onClick={handleShow}>
                Get in touch
              </div>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                  <Modal.Title>Contact Us</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {!apiData ? (
                    <form className="form-container">
                      <div className="form-group form-field">
                        <label htmlFor="name">Name</label>
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
                        <label htmlFor="phone">Phone</label>
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
                            *Phone number is reuired
                          </div>
                        )}
                        {!isPhoneValid && phone.length > 0 && (
                          <div className="error-message">
                            *Phone number is invalid
                          </div>
                        )}
                      </div>
                      <div className="form-group form-field">
                        <label htmlFor="email">Email</label>
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
                        <label htmlFor="message">How can we help you?</label>
                        <textarea
                          id="message"
                          className="form-field-input"
                          placeholder=""
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
                    <div>Thank You</div>
                  )}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={handleSendClick}
                    disabled={!isFormValid}
                  >
                    Send
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
          <div className="footer-content">
            <div className="footer-header">Useful Links</div>
            <div className="footer-links" style={{ display: "flex" }}>
              <div onClick={handleCareersClick} className="link-text">
                Careers
              </div>
              <div className="link-text">Privacy Policy</div>
              <div className="link-text">Terms and Conditions</div>
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
