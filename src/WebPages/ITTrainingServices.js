import React from "react";


function HomeITTrainingServicesPage({ onMenuClick }) {
    return (
        <>
            <div className="homeITCSPageParent">
                <div className="homeITCSPage_Top">
                    <div className="homeITCSPage_TopBox">
                        <span className="homeITCSPage_TopLeft">IT Training and Staff Upgradation</span>
                        <span className="homeITCSPage_TopRight"><span onClick={() => onMenuClick('Home')}>Home</span> / IT Training and Staff Upgradation</span>
                    </div>
                </div>
                <div className="homeITCSPage_BottomBox homeITTSPage_BottomBox">
                    <span>Change is the only constant in the field of information technology. Stop learning and upgrading your skills for a couple of months and you find yourself outrun by your competition. Skill upgradation is an ongoing process whether you want your employees to learn that new enterprise resource planning tool you are investing millions in or you simply want to acquaint them with a new technology that can take your business forward. In whichever manner you want to utilize the services of your employees, when they need training, you need a training partner you can totally rely on.</span>
                    <span>SDVS Technologies LLC can provide you staff training and upgradation services for</span>
                    <span>
                        <ul>
                            <li>ERP systems such as Workday, SuccessFactors, Oracle, SAP and PeopleSoft</li>
                            <li> Programming languages such as C, C++ and Java/J2EE</li>
                            <li>New course development to introduce latest technologies</li>
                            <li>Scaling and transitioning</li>
                            <li>Data warehousing</li>
                            <li>Data security, backup and restoration</li>
                            <li>Computer systems safe practices</li>
                            <li>Change management</li>
                            <li>Strategic guidance</li>
                        </ul>
                    </span>
                    <span>There is no need to regrow your workforce when you partner with SDVS Technologies LLC – upgrade the skills of your existing staff.</span>
                </div>
            </div>
        </>
    )
}

export { HomeITTrainingServicesPage };
