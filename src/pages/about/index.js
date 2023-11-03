import React, { memo, useEffect, useRef, useState } from "react";
import "./about.css";
import { images } from "../../components/images";
import { Button, Modal } from "react-bootstrap";

const About = ({ refs: ref }) => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }

    let myHeaders = new Headers();
    myHeaders.append("authority", "contact.apps-api.instantpage.secureserver.net");
    myHeaders.append("accept", "*/*");
    myHeaders.append("accept-language", "en-US,en;q=0.9,hi;q=0.8");
    myHeaders.append("content-type", "application/json; charset=UTF-8");
    myHeaders.append("dnt", "1");
    myHeaders.append("origin", "https://aistra.com");
    myHeaders.append("referer", "https://aistra.com/");
    myHeaders.append("sec-ch-ua", "\"Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"115\", \"Chromium\";v=\"115\"");
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append("sec-ch-ua-platform", "\"macOS\"");
    myHeaders.append("sec-fetch-dest", "empty");
    myHeaders.append("sec-fetch-mode", "cors");
    myHeaders.append("sec-fetch-site", "cross-site");
    myHeaders.append("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36");

    const raw = data => ({
        "websiteId": "a2ef901d-2eff-440f-85c0-23e918f54b7d",
        "widgetId": "ca116b4c-53f1-4c5f-96e9-32b7974d6f30",
        "pageId": "00000000-0000-0000-0000-000000000000",
        "accountId": "7cb1ae1f-3127-11ee-8334-3417ebe73f23",
        "domainName": "aistra.com",
        "optedToSubscribe": false,
        "locale": "en-IN",
        "metadata": {
            "formIdentifier": "MESSAGING_EMAIL",
            "pathName": "/",
            "deviceType": "desktop",
            "deviceOs": "macOS",
            "browserName": "Chrome"
        },
        "formData": [
            {
                "label": "Name",
                "value": data.name,
                "keyName": "name"
            },
            {
                "label": "Email",
                "value": data.email,
                "replyTo": true,
                "keyName": "email"
            },
            {
                "label": "How can we help?",
                "value": data.help,
                "keyName": "message"
            },
            {
                "label": "phone",
                "value": data.phone,
                "keyName": "phone"
            },
            {
                "label": "_app_id",
                "value": ""
            }
        ],
        "recaptchaToken": "03AFcWeA6GUslX-k4wWm-TYLeg2kgRXrXcZQICFU2Sp04VYvOd6QMwRcMYJLvHWL9pB8B9aCkkrADjHf8iM4dHgrM8_bwToSuZ-HalP-3TnKxkHciZ3Xk56j_CnPH65z_1P8jZyd9cWOCKOC2W6JtIpMW7GRecNxGLv9PO5VzsPiizCDgTF0SFD_mi2vShPbo3g4IisYEDTvpqHAGentnxInSGt-3oqlzkKH8uFOAXRJkrh8VQOoniRCPomzwmFoSwgVAJbQ58rxQIPe0gZZOOm7W29xc0cSdjG7S5WOJDQbqoCZ8g-qWMz_Lrwc6C40Oc5II13it46xp0Uk7Ib9ZQ1tYSH7JN_N6JiDPY_UsEPMUwS_vjmtGaqPUSmNCDGt1siHWRoZdb0FwvWMis1XHOiTxP4d4Xy6iUAo4rc2bQUWDHWe8X-fehGR-3dPfYs5GugFoLmr_tTBltb482dp4uRlibggoYzQWcK4qJfiUkoM5kBlUBdxNQhr-n8j3dZhlgZzgUebEhi6Q1xikAOkgV6Yw2XrpB9-aOBDl2JHNPUQeLxGlvDJ3FsbOfxL6t73poyyHrc3aug8QqC8tzR7n2oXvAV3uRQWhGwg",
        "isReseller": false
    })

    const requestOptions = data => ({
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(raw(data)),
        redirect: 'follow'
    });

    const handleSendClick = () => {
        const apiUrl = 'https://contact.apps-api.instantpage.secureserver.net/messaging';
        const rawData = {
            name: name,
            phone: phone,
            email: email,
            help: message,
        }
        async function fetchData() {
            try {
                const response = await fetch(apiUrl, requestOptions(rawData));
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setApiData(jsonData);
                setLoading(false);
                console.log('result...', jsonData)
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        }
        fetchData();
    };

    return (
        <div ref={ref} className="about-container">
            <div className="about-body">
                <div className="about-image-container">
                    <img className="about-image" src={images['about-img.png']} alt="About image" />
                </div>
                <div className="about-content">
                    <div className="about-header">Who We Are</div>
                    <div className="about-desc">
                        <div className="desc">
                            We are a group of entrepreneurs and business leaders who’ve meaningfully transformed workplaces by building and leading several multi-billion dollar businesses over the past two decades.
                        </div>
                        <div className="desc">
                            Today, as we stand on the cusp of having AI disrupt what we’ve built, we are passionate about embracing and leading that change, rather than defending the status quo.
                        </div>
                        <div className="desc">
                            Aistra is developing a suite of AI-based micro-apps and virtual assistants that elevate business processes by eliminating mundane tasks, channelling creativity and simplifying decision-making. Besides licensing our products, we will also offer a full range of solutions to optimize business processes.
                        </div>
                        <div className="desc">
                            Is your workplace AI ready?  Get in touch to know more.
                        </div>
                    </div>
                    <div className="about-btn-container" onClick={handleShow}>
                        <img className="about-btn-image" src={images['talk-to-us-btn.svg']} alt="About button" />
                    </div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header>
                            <Modal.Title>Contact Us</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {!apiData ? <form className="form-container">
                                <div className="form-group form-field">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        className="form-field-input"
                                        id="name"
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group form-field">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="form-field-input"
                                        placeholder="+1-555-55555"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                                <div className="form-group form-field">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-field-input"
                                        placeholder="john.doe@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group form-field">
                                    <label htmlFor="message">How can we help you?</label>
                                    <textarea
                                        id="message"
                                        className="form-field-input"
                                        placeholder=""
                                        rows="4"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </div>
                            </form> : <div>Thank You</div>}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="secondary" onClick={handleSendClick}>
                                Send
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default memo(About);
