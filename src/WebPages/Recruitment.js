import React from "react";


function HomeRecruitmentPage({ onMenuClick }) {
    return (
        <>
            <div className="homeITCSPageParent">
                <div className="homeITCSPage_Top">
                    <div className="homeITCSPage_TopBox">
                        <span className="homeITCSPage_TopLeft">IT Staff Sourcing</span>
                        <span className="homeITCSPage_TopRight"><a href="#!" onClick={() => onMenuClick('Home')}>Home</a> / IT Staff Sourcing</span>
                    </div>
                </div>
                <div className="homeITCSPage_BottomBox homeRecruitmentPage_BottomBox">
                    <span>Looking for a highly proficient and experienced team of IT professionals and software developers? We can arrange the best talent in the industry for you in no time. Simply tell us your requirement and through our extensive network of HR professionals and agents we will save you not only money but lots of time. We can arrange technology staff in-house (from the SDVS Technologies LLC talent pool) or we can scour the market to bring you what you are looking for.</span>
                    <span>Why partner with SDVS Technologies LLC for your IT staff sourcing needs?</span>
                    <span>Hiring new talent can be an excruciating exercise because it doesn’t just involve contacting people and inviting them for the interview. Among thousands of aspirants you have to shortlist maybe a couple of them or more. You also have to know exactly what sort of questionnaire to prepare and how to carry out attitudinal and personality profile analysis. On top of that there is security risk: pre-employment screening these days is as important as actually employing people. Small mistake or oversight and you may end up either losing your precious data or getting hit by a libel suit.</span>
                    <span>So why not leave your IT staff sourcing to the professionals? As was just mentioned above, simply tell us your requirement and you can start your new project next week.</span>
                </div>
            </div>
        </>
    )
}

export { HomeRecruitmentPage };
