import React from "react";


function ContactUsPage() {
    return (
        <>
            <div className="ContactUsPageParent">
                <div className="ContactUsPage_ContactUsImage">
                    <span className="ContactUsPage_ContactUsImageBox">
                        <span>CONTACT US</span>
                    </span>
                </div>
                <div className="ContactUsPage_Bottom">
                    <div className="ContactUsPage_BottomBox">
                        <span className="ContactUsPage_Bottom_Header">Company <b>Address</b></span>
                        <span className="ContactUsPage_Bottom_content">
                            <ul>
                                <li>
                                    <b>SDVS Technologies LLC</b>
                                    <p>200 Gerault Road, Suite #700</p>
                                    <p>Flower Mound, TX 75028</p>
                                </li>
                                <li><b>Contact:</b> <a href="tel:+1-469-666-9960" className="aTag_Tel">+1 469-666-9960</a></li>
                                <li><b>FAX:</b> 1-888-677-9561</li>
                                <li><b>E-mail:</b> <a href="mailto:hr@sdvstech.com" className="aTag_Mail">hr@sdvstech.com</a></li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export { ContactUsPage };
