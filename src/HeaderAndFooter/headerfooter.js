import React, { useEffect, useState } from "react";
import '../WebPages.css';
import logo from "../LogoAndPics/logo.jpeg";

function Header({ onMenuClick, activePage }) {
    const [hidden, setHidden] = useState(false);
    const [lastScrollPos, setLastScrollPos] = useState(0);
    const [logoWidth, setLogoWidth] = useState(150); // State for logo width

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            // Hide header when scrolling down
            if (currentScrollPos > 200 && currentScrollPos > lastScrollPos) {
                setHidden(true);
                // Show header when scrolling up
            } else if (currentScrollPos < 250 && currentScrollPos < lastScrollPos) {
                setHidden(false);
            }

            // Change logo width based on scroll position
            if (currentScrollPos > 200) {
                setLogoWidth(90); // Decrease logo width
            } else {
                setLogoWidth(150); // Reset logo width
            }

            setLastScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollPos]);

    return (
        <>
            <div className="headerParent">
                <div className={`headerTopDiv ${hidden ? 'hidden' : ''}`}>
                    <div className="headerTopDiv_Box">
                        <div className="headerTop_Left">
                            <span>
                                <a href="mailto:hr@sdvstech.com" className="aTag_Mail">
                                    <i className="fa-solid fa-envelope"></i> hr@sdvstech.com
                                </a>
                            </span>
                            <span>
                                <a href="tel:+1-469-666-9960" className="aTag_Tel">
                                    <i className="fa-solid fa-square-phone"></i> +1 469 666 9960
                                </a>
                            </span>
                        </div>
                        <div className="headerTop_Right">
                            <span>
                                <a href="https://www.facebook.com/sdvstech/">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                            </span>
                            <span>
                                <a href="https://x.com/sdvstech">
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>
                            </span>
                            <span>
                                <a href="https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html">
                                    <i className="fa-brands fa-google-plus-g"></i>
                                </a>
                            </span>
                            <span>
                                <a href="https://www.linkedin.com/company/sdvs-technologies/">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="headerLogoMenuDiv">
                    <div className="headerLogoDiv">
                        {/* Apply dynamic width with smooth transition */}
                        <img
                            src={logo}
                            className="headerLogoDiv_img"
                            alt="logo"
                            style={{ width: `${logoWidth}px`, transition: 'width 0.5s ease-in-out' }} // Smooth transition
                        />
                    </div>
                    <div className="headerMenuDiv">
                        <span className="headerMenuDiv_Home">
                            <a
                                href="#!"
                                onClick={() => onMenuClick('Home')}
                                className={activePage === 'Home' ? 'active' : ''}
                            >
                                Home
                            </a>
                        </span>
                        <span className="headerMenuDiv_AboutUs">
                            <a
                                href="#!"
                                onClick={() => onMenuClick('AboutUs')}
                                className={activePage === 'AboutUs' ? 'active' : ''}
                            >
                                About Us
                            </a>
                        </span>
                        <span className="headerMenuDiv_Services">
                            <a
                                href="#!"
                                onClick={() => onMenuClick('Services')}
                                className={activePage === 'Services' ? 'active' : ''}
                            >
                                Services
                            </a>
                        </span>
                        <span className="headerMenuDiv_Career">
                            <a
                                href="#!"
                                onClick={() => onMenuClick('Career')}
                                className={activePage === 'Career' ? 'active' : ''}
                            >
                                Career
                            </a>
                        </span>
                        <span className="headerMenuDiv_Contact">
                            <a
                                href="#!"
                                onClick={() => onMenuClick('Contact')}
                                className={activePage === 'Contact' ? 'active' : ''}
                            >
                                Contact
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export { Header };




function Footer({ onMenuClick }) {
    return (
        <>
            <div className="footerParent">
                <div className="footerParentTop">
                    <div className="footerParentTop_Left">
                        <span className="footerParentTop_LeftTop">About SDVS</span>
                        <span className="footerParentTop_LeftBottom">SDVS Technologies LLC (Formerly Premier IT Systems LLC) can provide your business dynamic and scalable solutions that can help you reduce operational costs, facilitate growth and establish integrated platforms across heterogeneous operational processes.</span>
                    </div>
                    <div className="footerParentTop_Right">
                        <span className="footerParentTop_RightTop">MENU</span>
                        <div className="footerParentTop_RightBottom">
                            <div className="footerParentTop_RightBottom_box">
                                <span><a href="#!" onClick={() => onMenuClick('Home')}>Home</a></span>
                            </div>
                            <div className="footerParentTop_RightBottom_box">
                                <span><a href="#!" onClick={() => onMenuClick('AboutUs')}>About Us</a></span>
                            </div>
                            <div className="footerParentTop_RightBottom_box">
                                <span><a href="#!" onClick={() => onMenuClick('Services')}>Services</a></span>
                            </div>
                            <div className="footerParentTop_RightBottom_box">
                                <span><a href="#!" onClick={() => onMenuClick('Career')}>Career</a></span>
                            </div>
                            <div className="footerParentTop_RightBottom_box">
                                <span><a href="#!" onClick={() => onMenuClick('Contact')}>Contact</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerParentBottom">
                    <div className="footerParentBottom_Box">
                        <div className="footerParentBottom_Left">
                            Copyright © 2022. All Rights Reserved <span>Terms of Use</span> | <span>Privacy Policy</span>
                        </div>
                        <div className="footerParentBottom_Right">
                            <span><a href="https://www.facebook.com/sdvstech/" target="blank"><i class="fa-brands fa-square-facebook"></i></a></span>
                            <span><a href="https://x.com/sdvstech" target="blank"><i class="fa-brands fa-square-x-twitter"></i></a></span>
                            <span><a href="https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html" target="blank"><i class="fa-brands fa-square-google-plus"></i></a></span>
                            <span><a href="https://www.linkedin.com/company/sdvs-technologies/" target="blank"><i class="fa-brands fa-linkedin"></i></a></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Footer };



function GoTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;

            if (scrollPos > 200) {
                setIsVisible(true); // Show button when scrolling 200px down
            } else if (scrollPos < 250) {
                setIsVisible(false); // Hide button when scrolling 250px up
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleGoTop = () => {
        // Scroll to the top of the page smoothly
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`GoTopButtonParent ${isVisible ? '' : 'hidden'}`}>
            <span className="GoTopButtonParent_Box">
                <i className="fa-solid fa-arrow-up GoTopButton" onClick={handleGoTop}></i>
            </span>
        </div>
    );
}

export { GoTopButton };
