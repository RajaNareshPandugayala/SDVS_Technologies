import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { Header, Footer, GoTopButton } from './HeaderAndFooter/headerfooter';
import { HomePage } from './WebPages/Home';
import { HomeITConsultingServicesPage } from './WebPages/ITConsultingServices';
import { HomeITTrainingServicesPage } from './WebPages/ITTrainingServices';
import { HomeRecruitmentPage } from './WebPages/Recruitment';
import { AboutUsPage } from './WebPages/AboutUs';
import { ServicesPage } from './WebPages/Services';
import { CareerPage } from './WebPages/Career';
import { ContactUsPage } from './WebPages/ContactUs';


const App = () => {
  // State to track the currently active page
  const [activePage, setActivePage] = useState('Home');

  const handleMenuClick = (page) => {
    setActivePage(page);

    // Scroll the page to the top
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll effect (optional)
    });
  };


  return (
    <>
      {/* <App /> */}
      <Header onMenuClick={handleMenuClick} activePage={activePage} />
      <div className={activePage === 'Home' ? '' : 'hidden'}>
        <HomePage onMenuClick={handleMenuClick} />
      </div>
      <div className={activePage === 'ITConsulting' ? '' : 'hidden'}>
        <HomeITConsultingServicesPage onMenuClick={handleMenuClick} />
      </div>
      <div className={activePage === 'ITTraining' ? '' : 'hidden'}>
        <HomeITTrainingServicesPage onMenuClick={handleMenuClick} />
      </div>
      <div className={activePage === 'Recruitment' ? '' : 'hidden'}>
        <HomeRecruitmentPage onMenuClick={handleMenuClick} />
      </div>
      <div className={activePage === 'AboutUs' ? '' : 'hidden'}>
        <AboutUsPage />
      </div>
      <div className={activePage === 'Services' ? '' : 'hidden'}>
        <ServicesPage onMenuClick={handleMenuClick} />
      </div>
      <div className={activePage === 'Career' ? '' : 'hidden'}>
        <CareerPage />
      </div>
      <div className={activePage === 'Contact' ? '' : 'hidden'}>
        <ContactUsPage />
      </div>
      <GoTopButton />
      <Footer onMenuClick={handleMenuClick} />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





// below condtion is Default one:

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <Header />
//     <HomePage />
//     <HomeITConsultingServicesPage />
//     <HomeITTrainingServicesPage />
//     <HomeRecruitmentPage />
//     <AboutUsPage />
//     <ServicesPage />
//     <CareerPage />
//     <ContactUsPage />
//     <Footer />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
