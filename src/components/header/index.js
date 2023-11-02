import React, { memo, useEffect, useRef, useState } from "react"
import { OverlayTrigger, Popover, Button, Overlay, Tooltip } from 'react-bootstrap';
import "./header.css"
import { images } from "../images"

const PopupComp = (props) => {
    return (
        <Popover className="popover-container" id='popover-basic' {...props}>
            <Popover.Header as="h3">Contact Us</Popover.Header>
            <Popover.Body>
                <form>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' id='name' placeholder='Enter your name' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='phone'>Phone</label>
                        <input type='tel' id='phone' placeholder='Enter your phone number' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' placeholder='Enter your email' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='message'>How can we help you?</label>
                        <textarea id='message' placeholder='Please describe your needs' rows='4' />
                    </div>
                    <button className='send-button' type='button' onClick={props.handleSendClick}>
                        Send
                    </button>
                </form>
            </Popover.Body>
        </Popover>
    )
}

const Header = props => {
    const { refHome, refAbout, refProduct, refTeam, refCareers } = props;
    const [isScrolled, setIsScrolled] = useState(false);
    const [showPopover, setShowPopover] = useState(false);

    const handleGetStartedClick = () => {
        setShowPopover(!showPopover);
    };

    const handleSendClick = () => {
        setShowPopover(false); // Close the popover when the "Send" button is clicked
    };

    const handleHomeClick = () => {
        refHome.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const handleAboutClick = () => {
        refAbout.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const handleProductClick = () => {
        refProduct.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const handleTeamClick = () => {
        refTeam.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const handleCareersClick = () => {
        refCareers.current?.scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [show, setShow] = useState(false);
    const buttonRef = useRef(null);

    return (
        <>
            <nav
                className={isScrolled ? 'navbar fixed-top navbar-expand-lg navbar-dark p-0 bg-dark shadow' : 'navbar fixed-top navbar-expand-lg navbar-dark p-0'}>
                <div className="container">
                    <a className="navbar-brand p-0">
                        <img src={images['aistra-labs-logo.svg']} alt="Logo Image" className="my-brand" width="120" height="120" />
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
                                <div className="nav-link header-tab" onClick={handleHomeClick}>Home</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link header-tab" onClick={handleAboutClick}>About</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link header-tab" onClick={handleProductClick}>Products</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link header-tab" onClick={handleTeamClick}>Team</div>
                            </li>
                        </ul>
                        <div className='ms-5'>
                            <div className="btn btn-outline-warning g-btn" role="button" onClick={handleCareersClick} >Careers</div>
                            <div ref={buttonRef} className="btn btn-primary g-btn ms-4 form-overlay" role="button" >
                                <OverlayTrigger
                                    // show={showPopover}
                                    trigger='click'
                                    placement='left'
                                    overlay={<PopupComp handleSendClick={handleSendClick} />}
                                    rootClose={true}
                                    // onToggle={(isOpen) => setShowPopover(isOpen)}
                                >
                                    <Button variant='primary' onClick={handleGetStartedClick}>
                                        Get Started
                                    </Button>
                                </OverlayTrigger>
                                {/* <Button ref={target} onClick={() => setShow(!show)}>
                                    Get Started
                                </Button>
                                <Overlay target={target.current} show={show} placement="left">
                                    {(props) => (
                                        <Tooltip id="overlay-example" {...props}>
                                            <Popover className="popover-container" id='popover-basic' {...props}>
                                                <Popover.Header as="h3">Contact Us</Popover.Header>
                                                <Popover.Body>
                                                    <form>
                                                        <div className='form-group'>
                                                            <label htmlFor='name'>Name</label>
                                                            <input type='text' id='name' placeholder='Enter your name' />
                                                        </div>
                                                        <div className='form-group'>
                                                            <label htmlFor='phone'>Phone</label>
                                                            <input type='tel' id='phone' placeholder='Enter your phone number' />
                                                        </div>
                                                        <div className='form-group'>
                                                            <label htmlFor='email'>Email</label>
                                                            <input type='email' id='email' placeholder='Enter your email' />
                                                        </div>
                                                        <div className='form-group'>
                                                            <label htmlFor='message'>How can we help you?</label>
                                                            <textarea id='message' placeholder='Please describe your needs' rows='4' />
                                                        </div>
                                                        <button className='send-button' type='button' onClick={props.handleSendClick}>
                                                            Send
                                                        </button>
                                                    </form>
                                                </Popover.Body>
                                            </Popover>
                                        </Tooltip>
                                    )}
                                </Overlay> */}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default memo(Header);
