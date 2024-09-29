import React from "react";


function ServicesPage({ onMenuClick }) {
    return (
        <>
            <div className="ServicesPageParent">
                <div className="ServicesPage_ServicesImage">
                    <span className="ServicesPage_ServicesImageBox">
                        <span>SERVICES</span>
                    </span>
                </div>
                <div className="ServicesPage_Top">
                    <div className="ServicesPage_TopLeft">
                        <span className="ServicesPage_TopLeft_content_Heading ServicesPage_TopLeft_content">Full-blown IT consulting services</span>
                        <span className="ServicesPage_TopLeft_content">In today’s highly competitive and technology-driven world it’s not important what latest technologies you have, what is important is how you use the available technology, and this is where the SDVS Technologies LLC can help you.</span>
                        <span className="ServicesPage_TopLeft_content">We have the people, intellectual skills, work experience and technological know-how to provide you right solutions at the right time to meet your present as well as future business challenges.</span>
                        <span className="ServicesPage_TopLeft_content">A few hallmarks of our consulting services are:</span>
                        <span className="ServicesPage_TopLeft_content">
                            <ul>
                                <li>Accountability</li>
                                <li>Flexibility and scalability</li>
                                <li>Timeliness</li>
                                <li>Consistent quality service</li>
                                <li>Skill levels and experience that match your requirement</li>
                            </ul>
                        </span>
                    </div>
                    <div className="ServicesPage_TopRight">
                        <span className="ServicesPage_TopRight_pices ServicesPage_TopRight_pices01">
                            <i class="fa-solid fa-book ServicesPage_TopRight_icon"></i>
                            <span className="ServicesPageLable">Technology</span>
                        </span>
                        <span className="ServicesPage_TopRight_pices ServicesPage_TopRight_pices02">
                            <i class="fa-regular fa-clock ServicesPage_TopRight_icon"></i>
                            <span className="ServicesPageLable">On Time Delivery</span>
                        </span>
                        <span className="ServicesPage_TopRight_pices ServicesPage_TopRight_pices03">
                            <i class="fa-solid fa-file ServicesPage_TopRight_icon"></i>
                            <span className="ServicesPageLable">IT Consulting</span>
                        </span>
                        <span className="ServicesPage_TopRight_pices ServicesPage_TopRight_pices04">
                            <i class="fa-solid fa-desktop ServicesPage_TopRight_icon"></i>
                            <span className="ServicesPageLable">Support</span>
                        </span>
                    </div>
                </div>
                <div className="ServicesPage_Middle">
                    <div className="ServicesPage_MiddleBox ServicesPage_MiddleBox01">Listed below are the main services that SDVS Technologies LLC provides</div>
                    <div className="ServicesPage_MiddleBox ServicesPage_MiddleBox02">
                        <div className="ServicesPage_Middle_Down">
                            <div className="ServicesPage_Middle_DownHeading">
                                IT Consulting Services
                            </div>
                            <div className="ServicesPage_Middle_DownContent_Div">
                                Via our IT consulting services we can help you enhance organizational efficiency, focus on greater innovation and gain a competitive advantage over your competitors. Whether you want to install and customize off-the-shelf enterprise level business applications or you want to develop your own proprietary software, we can provide you the right talent and the right technologies to …
                            </div>
                            <a href="#!" className="ServicesPage_Middle_DownContent_Button" onClick={() => onMenuClick('ITConsulting')}>Read More</a>
                        </div>
                        <div className="ServicesPage_Middle_Down">
                            <div className="ServicesPage_Middle_DownHeading">
                                IT Staff Sourcing
                            </div>
                            <div className="ServicesPage_Middle_DownContent_Div">
                                Looking for a highly proficient and experienced team of IT professionals and software developers? We can arrange the best talent in the industry for you in no time. Simply tell us your requirement and through our extensive network of HR professionals and agents we will save you not only money but lots of time. We can arrange technology staff in-house (from the SDVS Technologies LLC talent pool)…
                            </div>
                            <a href="#!" className="ServicesPage_Middle_DownContent_Button" onClick={() => onMenuClick('Recruitment')}>Read More</a>
                        </div>
                        <div className="ServicesPage_Middle_Down">
                            <div className="ServicesPage_Middle_DownHeading ServicesPage_Middle_DownHeading03">
                                IT Training and Staff Upgradation Services
                            </div>
                            <div className="ServicesPage_Middle_DownContent_Div">
                                Change is the only constant in the field of information technology. Stop learning and upgrading your skills for a couple of months and you find yourself outrun by your competition. Skill upgradation is an ongoing process whether you want your employees to learn that new enterprise resource planning tool you are investing millions in or you simply want to acquaint them with a new technology
                            </div>
                            <a href="#!" className="ServicesPage_Middle_DownContent_Button" onClick={() => onMenuClick('ITTraining')}>Read More</a>
                        </div>
                    </div>
                </div>
                <div className="ServicesPage_Bottom">
                    <span className="ServicesPage_BottomHeading">Software Development</span>
                    <span>Do you want to develop software either for in-house use or for one of your customers but don’t want to invest time in developing your own team? Partnering with a company like Premier IT Systems LLC is the best way to go if you want to quickly develop and install a custom application ithout having to go through the nitty-gritty of aggregating a talent pool and investing money in its maintenance and training. You may also like to work with us if you simply want to work on an assignment and then let it incubate into a full-fledged business.Partner with us and you get a programming team that is already adept at all contemporary development platforms and languages. We can augment the capabilities of your existing applications or we can program software applications from scratch – it all depends on your preference.We can carry out custom software development in C, C++, Java and J2EE. We can carry out development either at your location or at our location depending upon your security requirements and other considerations.Once you start working with us our team of analysts will carry out multiple brainstorming sessions either with you or your representatives and once you have approved of the logical flow, we will initiate the coding process. We employ a fully developed project life-cycle process to ensure compatibility, deliverability and timeliness.</span>
                </div>
                <div className="ServicesPage_Bottom">
                    <span className="ServicesPage_BottomHeading">Support</span>
                    <span className="ServicesPage_BottomContent">
                        <span>Whether you’re looking support for proprietary software or some custom application, we are fully qualified and experienced to provide you the needed guidance. Facing a glitch? Is there a roadblock? Your staff doesn’t seem to be making sense of the expensive enterprise level solution you got last month? Somebody has messed up your configuration? The modules and reports your company requires can be created using your application but nobody knows around you how to achieve that?</span>
                        <span>You need support from SDVS Technologies LLC. Take for instance ERP tools like Workday, SuccessFactors, Oracle, PeopleSoft and SAP; they are amongst the most advanced enterprise applications on the block. “Advanced” also means there are tons of features and these tons of features bring along lots of complexities. You will need experts to not only install the system but also port your existing data into it, customize individual modules, put your logos and emblems on your reports and visuals, create or assign various access levels for different employees, incorporate system upgrades to better utilize the power of the application, and so on.</span>
                        <span>When you partner with us for your software support needs, you can totally relax while we roll back our sleeves and mould your software exactly the way you want.</span>
                    </span>
                </div>
            </div>
        </>
    )
}

export { ServicesPage };
