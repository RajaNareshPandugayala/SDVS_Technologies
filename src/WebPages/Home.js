import React from "react";
import HomePagePic from "../LogoAndPics/HomePagePic.jpg"
import HomePageSM1 from "../LogoAndPics/A_workday_logo_eps.png"
import HomePageSM2 from "../LogoAndPics/B_micro_logo.png"
import HomePageSM3 from "../LogoAndPics/C_Oracle_logo.png"
import HomePageSM4 from "../LogoAndPics/D_goo_logo.png"
import HomePageSM5 from "../LogoAndPics/E_yahoo_logo.png"
import HomePageSM6 from "../LogoAndPics/F_sap.png"


function HomePage() {
    return (
        <>
            <div className="homePageParent">
                <div className="homePageParent_Box">
                    <div className="homePage_Top">
                        <div className="homePage_TopLeft">
                            <img src={HomePagePic} className="HomePagePic" alt="logo" />
                        </div>
                        <div className="homePage_TopRight">
                            <span className="homePage_TopRight_heading"><span className="homePage_TopRight_headingTop">Enterprise IT solutions to give your business</span><span className="homePage_TopRight_headingBottom">the right edge</span></span>
                            <span className="homePage_TopRight_content">SDVS Technologies LLC (Formerly Premier IT Systems LLC) can provide your business dynamic and scalable solutions that can help you reduce operational costs, facilitate growth and establish integrated platforms across heterogeneous operational processes.</span>
                            <span className="homePage_TopRight_content">In today’s complex and competitive world of technology it is very critical to choose the right partner who can deliver predictable outcomes within achievable timelines, on a sustainable level.</span>
                            <span className="homePage_TopRight_content">Whether you want to develop in-house software applications or you want to outsource your technology needs, we can provide you full-blown support and services both on-site and off-site in the realms of</span>
                            <span className="homePage_TopRight_content">
                                <ul className="homePage_TopRight_contentUL">
                                    <li>Consulting</li>
                                    <li>Training</li>
                                    <li>Recruitment</li>
                                    <li>Development</li>
                                    <li>Support</li>
                                </ul>
                            </span>
                            <span className="homePage_TopRight_Button">Get Started Now!</span>
                        </div>
                    </div>
                    <div className="homePage_Middle">
                        <div className="homePage_MiddleBox">
                            <span className="homePage_MiddleBox_pic">
                                <img src={HomePagePic} className="HomePagePic" alt="logo" />
                            </span>
                            <span className="homePage_MiddleBox_content">IT Consulting Services</span>
                            <span className="homePage_MiddleBox_button">Read More</span>
                        </div>
                        <div className="homePage_MiddleBox">
                            <span className="homePage_MiddleBox_pic">
                                <img src={HomePagePic} className="HomePagePic" alt="logo" />
                            </span>
                            <span className="homePage_MiddleBox_content">IT Training Services</span>
                            <span className="homePage_MiddleBox_button">Read More</span>
                        </div>
                        <div className="homePage_MiddleBox">
                            <span className="homePage_MiddleBox_pic">
                                <img src={HomePagePic} className="HomePagePic" alt="logo" />
                            </span>
                            <span className="homePage_MiddleBox_content">Recruitment</span>
                            <span className="homePage_MiddleBox_button">Read More</span>
                        </div>
                        <div className="homePage_MiddleBox">
                            <span className="homePage_MiddleBox_pic">
                                <img src={HomePagePic} className="HomePagePic" alt="logo" />
                            </span>
                            <span className="homePage_MiddleBox_content">Development</span>
                            <span className="homePage_MiddleBox_button">Read More</span>
                        </div>
                    </div>
                    <div className="homePage_Bottom">
                        <span>
                            <img src={HomePageSM1} className="HomePageSM1" alt="logo" />
                        </span>
                        <span>
                            <img src={HomePageSM2} className="HomePageSM2" alt="logo" />
                        </span>
                        <span>
                            <img src={HomePageSM3} className="HomePageSM3" alt="logo" />
                        </span>
                        <span>
                            <img src={HomePageSM4} className="HomePageSM4" alt="logo" />
                        </span>
                        <span>
                            <img src={HomePageSM5} className="HomePageSM5" alt="logo" />
                        </span>
                        <span>
                            <img src={HomePageSM6} className="HomePageSM6" alt="logo" />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export { HomePage };
