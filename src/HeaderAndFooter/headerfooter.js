import React from "react";
import '../WebPages.css';
import logo from "../LogoAndPics/logo.jpeg";


function Header() {
    return (
        <>
            <div className="headerParent">
                <div className="headerTopDiv">
                    <div className="headerTopDiv_Box">
                        <div className="headerTop_Left">
                            <span>hr@sdvstech.com </span>
                            <span>  +1 469 666 9960</span>
                        </div>
                        <div className="headerTop_Right">
                            <span>SocialMedia-1</span>
                            <span>SocialMedia-2</span>
                            <span>SocialMedia-3</span>
                            <span>SocialMedia-4</span>
                        </div>
                    </div>
                </div>
                <div className="headerLogoMenuDiv">
                    <div className="headerLogoDiv">
                        <img src={logo} className="headerLogoDiv_img" alt="logo" />
                    </div>
                    <div className="headerMenuDiv">
                        <span className="headerMenuDiv_Home">Home</span>
                        <span className="headerMenuDiv_AboutUs">About Us</span>
                        <span className="headerMenuDiv_Services">Services</span>
                        <span className="headerMenuDiv_Career">Career</span>
                        <span className="headerMenuDiv_Contact">Contact</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Header };


function Footer() {
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
                                <span>Home</span>
                            </div>
                            <div className="footerParentTop_RightBottom_box">
                                <span>About Us</span>
                            </div>
                            <div className="footerParentTop_RightBottom_box">
                                <span>Services</span>
                            </div>
                            <div className="footerParentTop_RightBottom_box">
                                <span>Career</span>
                            </div>
                            <div className="footerParentTop_RightBottom_box">
                                <span>Contact</span>
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
                            <span>SocialMedia-1</span>
                            <span>SocialMedia-2</span>
                            <span>SocialMedia-3</span>
                            <span>SocialMedia-4</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Footer };
