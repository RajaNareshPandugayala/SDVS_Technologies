import React from "react";


function HomeITConsultingServicesPage({ onMenuClick }) {
    return (
        <>
            <div className="homeITCSPageParent">
                <div className="homeITCSPage_Top">
                    <div className="homeITCSPage_TopBox">
                        <span className="homeITCSPage_TopLeft">IT Consulting Services</span>
                        <span className="homeITCSPage_TopRight"><span onClick={() => onMenuClick('Home')}>Home</span> / IT Consulting Services</span>
                    </div>
                </div>
                <div className="homeITCSPage_BottomBox">
                    <span>Via our IT consulting services we can help you enhance organizational efficiency, focus on greater innovation and gain a competitive advantage over your competitors. Whether you want to install and customize off-the-shelf enterprise level business applications or you want to develop your own proprietary software, we can provide you the right talent and the right technologies to not just meet your expectations but also deadlines.</span>
                    <span>Software applications are there to assist you but most of them cannot be implemented and utilized straight out of the box. You need high level of expertise and experience in order to install and customize applications like ERP tools according to your specific needs. This involves branding, reporting, customized modules, backing up and restoration, scaling and porting and access management.</span>
                    <span>Your staff may also need special training to leverage the potential of these applications. You may also require new staff in order to meet your fast-evolving technology requirements.</span>
                    <span>Our IT consulting services is a complete package that provides you total turnkey solutions in the fields of enterprise software installation and customization, manpower upgradation, project management, data warehousing, data backup and restoration, and basically every service and support you require in order to manage your high-end software solutions and projects.</span>
                </div>
            </div>
        </>
    )
}

export { HomeITConsultingServicesPage };
