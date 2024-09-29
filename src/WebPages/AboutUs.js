import React from "react";
import img23 from "../LogoAndPics/img23.jpg"
import img25 from "../LogoAndPics/img25.jpg"



function AboutUsPage() {
    return (
        <>
            <div className="AboutUsPageParent">
                <div className="AboutUsPage_AboutUsImage">
                    <span>ABOUT US</span>
                </div>
                <div className="AboutUsPage_Top">
                    <div className="AboutUsPage_TopLeft">
                        <span className="AboutUsPage_TopLeft_pices">
                            <img src={img25} className="img25 AboutUsPage_TopLeftImage" alt="logo" />
                            <img src={img23} className="img23 AboutUsPage_TopLeftImage" alt="logo" />
                        </span>
                        <span className="AboutUsPage_TopLeft_buttons">
                            <button className="AboutUsPage_TopLeft_buttonsLeft"></button>
                            <button className="AboutUsPage_TopLeft_buttonsRight"></button>
                        </span>
                    </div>
                    <div className="AboutUsPage_TopRight">
                        <span className="AboutUsPage_TopRight_content_Heading AboutUsPage_TopRight_content">SDVS Technologies LLC</span>
                        <span className="AboutUsPage_TopRight_content">(Formerly Premier IT Systems LLC)</span>
                        <span className="AboutUsPage_TopRight_content">Our primary objective at SDVS Technologies LLC (Formerly Premier IT Systems LLC) is to provide cutting edge support and custom products to our clients nationally as well as across International borders. We are fully capable of providing turnkey IT consulting and support services both off-site and on-site whether you want tailor-made solutions for off-the-shelf ERP products like SAP,Workday, Oracle, and PeopleSoft or you want to develop proprietary applications from scratch using programming languages like C, C++, and Java/J2EE.</span>
                        <span className="AboutUsPage_TopRight_content">Our headquarters are based in Flower Mound, TX and we are equipped with cutting-edge technology and know-how to provide you the best IT consulting services available in the world of technology and computing across myriad industries and business functions.</span>
                    </div>
                </div>
                <div className="AboutUsPage_Middle">
                    <div className="AboutUsPage_MiddleBox">
                        <div className="AboutUsPage_Middle_Left">
                            <div className="AboutUsPage_Middle_LeftHeading">WE PROVIDE TECHNOLOGY AS WELL AS MANPOWER.</div>
                            <div className="AboutUsPage_Middle_LeftContent">
                                <div className="AboutUsPage_Middle_LeftContent_Div">
                                    <span>We are perpetually collaborating with our clients and creating high-performance strategic solutions that help them not only optimize their day-to-day operations but also streamline their long-term business objectives. Whether they want to explore new markets or simply want to strengthen their roots in their existing domains we provide them a solid technological background.</span>
                                    <b>Our core values</b>
                                </div>
                                <div className="AboutUsPage_Middle_LeftContent_Div">
                                    <span>We aim to add value to what you do. You should get the experience of “things being solved” when you partner with Premier IT Systems LLC so that we become your growth partners rather than simply your technology consultants. We believe in the teamwork and at the same time we create opportunities for individual talent among our employees. We also invest heavily on the ongoing growth and improvement of our managers, programmers and systems engineers so that you get not just what’s latest, but also that works best for your short-term and long-term business goals.</span>
                                    <span>At SDVS Technologies LLC we take pride in our work and our ethics.</span>
                                </div>
                            </div>
                        </div>
                        <div className="AboutUsPage_Middle_Right">
                            <div className="AboutUsPage_Middle_RightHeading">Here are a few of our strengths</div>
                            <div className="AboutUsPage_Middle_RightContent">
                                <ul>
                                    <li>Extensive – both vertical and horizontal – IT expertise</li>
                                    <li>100% customer-centric approach</li>
                                    <li> A productive history of performance, innovation and implementation that has always helped our clients significantly improve operational performance and consequently, compete with the best in the world</li>
                                    <li>A team of certified ERP consultants adept at mainstream tools such as Workday, SuccessFactors, Oracle, PeopleSoft and SAP</li>
                                    <li>A team of programmers creating enterprise level solutions in C, C++, Java/J2EE</li>
                                    <li> An unwavering commitment towards the long-term development of our employees and business partners</li>
                                    <li>Ongoing support that is always there</li>
                                    <li>Partnerships with leading vendors to bring you the most efficient technology solutions without hindering your ongoing operations</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="AboutUsPage_Bottom">
                    <span className="AboutUsPage_BottomHeading">Our Vision</span>
                    <span>Our vision is to provide cost-effective, scalable as well as dynamic solutions to our worldwide clients in the areas of software development, human resource development and training, ERP solutions and enterprise tools customization. Although every company wants to become “the best and the biggest”, aside from that we also want to become a company you can count on because we think that is the best manifestation of our value proposition.</span>
                </div>
            </div>
        </>
    )
}

export { AboutUsPage };
