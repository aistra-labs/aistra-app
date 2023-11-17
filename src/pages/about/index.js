import React, { memo, useState } from "react";
import "./about.css";
import { images } from "../../components/images";
import { Button, Modal } from "react-bootstrap";

const About = () => {
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
    <section id="about" className="about-container">
      <div className="about-body">
        <div className="about-image-container">
          <img
            className="about-image"
            src={images["about-img.png"]}
            alt="about"
          />
        </div>
        <div className="about-content">
          <div className="about-header">Who We Are</div>
          <div className="about-desc">
            <div className="desc">
              We are a group of entrepreneurs and business leaders who’ve
              meaningfully transformed workplaces by building and leading
              several multi-billion-dollar businesses over the past two decades.
            </div>
            <div className="desc">
              Today, as we stand on the cusp of having AI disrupt what we’ve
              built in the past, we are passionate about embracing and leading
              that change, rather than defending the status quo.
            </div>
            <div className="desc">
              We are developing Aistra Labs as one of the world’s first and a
              category-defining{" "}
              <i className="desc-bold">Virtualization Company</i>. Through our
              suite of AI-based micro-apps and virtual assistants, we will
              elevate business operations by eliminating mundane tasks,
              channelling creativity, and simplifying decision-making. Besides
              licensing our products, we will also offer a full range of
              solutions to reconfigure, redefine, manage, and optimize business
              operations.
            </div>
            <div className="desc">
              Is your workplace AI ready? Get in touch to know more.
            </div>
          </div>
          <div className="about-btn-container" onClick={handleShow}>
            <img
              className="about-btn-image"
              src={images["talk-to-us-btn.svg"]}
              alt="About button"
            />
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
                      <div className="error-message">*Email is required</div>
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
                      <div className="error-message">*Message is required</div>
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
    </section>
  );
};

export default memo(About);
