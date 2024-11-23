// import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// // import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { Header, Footer, GoTopButton } from './HeaderAndFooter/headerfooter';
// import { HomePage } from './WebPages/Home';
// import { HomeITConsultingServicesPage } from './WebPages/ITConsultingServices';
// import { HomeITTrainingServicesPage } from './WebPages/ITTrainingServices';
// import { HomeRecruitmentPage } from './WebPages/Recruitment';
// import { AboutUsPage } from './WebPages/AboutUs';
// import { ServicesPage } from './WebPages/Services';
// import { CareerPage } from './WebPages/Career';
// import { ContactUsPage } from './WebPages/ContactUs';


// const App = () => {
//   // State to track the currently active page
//   const [activePage, setActivePage] = useState('Home');

//   const handleMenuClick = (page) => {
//     setActivePage(page);

//     // Scroll the page to the top
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth' // Smooth scroll effect (optional)
//     });
//   };


//   return (
//     <>
//       {/* <App /> */}
//       <Header onMenuClick={handleMenuClick} activePage={activePage} />
//       <div className={activePage === 'Home' ? '' : 'hidden'}>
//         <HomePage onMenuClick={handleMenuClick} />
//       </div>
//       <div className={activePage === 'ITConsulting' ? '' : 'hidden'}>
//         <HomeITConsultingServicesPage onMenuClick={handleMenuClick} />
//       </div>
//       <div className={activePage === 'ITTraining' ? '' : 'hidden'}>
//         <HomeITTrainingServicesPage onMenuClick={handleMenuClick} />
//       </div>
//       <div className={activePage === 'Recruitment' ? '' : 'hidden'}>
//         <HomeRecruitmentPage onMenuClick={handleMenuClick} />
//       </div>
//       <div className={activePage === 'AboutUs' ? '' : 'hidden'}>
//         <AboutUsPage />
//       </div>
//       <div className={activePage === 'Services' ? '' : 'hidden'}>
//         <ServicesPage onMenuClick={handleMenuClick} />
//       </div>
//       <div className={activePage === 'Career' ? '' : 'hidden'}>
//         <CareerPage />
//       </div>
//       <div className={activePage === 'Contact' ? '' : 'hidden'}>
//         <ContactUsPage />
//       </div>
//       <GoTopButton />
//       <Footer onMenuClick={handleMenuClick} />
//     </>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();















import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Header, Footer, GoTopButton } from './HeaderAndFooter/headerfooter';
import { HomePage } from './WebPages/Home';
import { HomeITConsultingServicesPage } from './WebPages/ITConsultingServices';
import { HomeITTrainingServicesPage } from './WebPages/ITTrainingServices';
import { HomeRecruitmentPage } from './WebPages/Recruitment'; import { AboutUsPage } from './WebPages/AboutUs';
import { ServicesPage } from './WebPages/Services';
import { CareerPage } from './WebPages/Career';
import { ContactUsPage } from './WebPages/ContactUs';




// const App = () => {
//   // State to track the currently active page
//   const [activePage, setActivePage] = useState('Home');

//   // Map paths to page names
//   const pathToPageMap = {
//     '/': 'Home',
//     '/about_us': 'AboutUs',
//     '/services': 'Services',
//     '/career': 'Career',
//     '/contact': 'Contact',
//   };

//   const pageToPathMap = Object.fromEntries(
//     Object.entries(pathToPageMap).map(([path, page]) => [page, path])
//   );

//   // Set the active page based on the current URL
//   useEffect(() => {
//     const currentPath = window.location.pathname;
//     setActivePage(pathToPageMap[currentPath] || 'Home');
//   }, []);

//   const handleMenuClick = (page) => {
//     setActivePage(page);

//     // Update the browser's URL without reloading
//     const newPath = pageToPathMap[page] || '/';
//     window.history.pushState({}, '', newPath);

//     // Scroll the page to the top
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <>
//       <Header onMenuClick={handleMenuClick} activePage={activePage} />
//       <div className={activePage === 'Home' ? '' : 'hidden'}>
//         <HomePage onMenuClick={handleMenuClick} />
//       </div>
//       <div className={activePage === 'ITConsulting' ? '' : 'hidden'}>
//         <HomeITConsultingServicesPage onMenuClick={handleMenuClick} />
//       </div>
//       <div className={activePage === 'ITTraining' ? '' : 'hidden'}>
//         <HomeITTrainingServicesPage onMenuClick={handleMenuClick} />
//       </div>
//       <div className={activePage === 'Recruitment' ? '' : 'hidden'}>
//         <HomeRecruitmentPage onMenuClick={handleMenuClick} />
//       </div>
//       <div className={activePage === 'AboutUs' ? '' : 'hidden'}>
//         <AboutUsPage />
//       </div>
//       <div className={activePage === 'Services' ? '' : 'hidden'}>
//         <ServicesPage onMenuClick={handleMenuClick} />
//       </div>
//       <div className={activePage === 'Career' ? '' : 'hidden'}>
//         <CareerPage />
//       </div>
//       <div className={activePage === 'Contact' ? '' : 'hidden'}>
//         <ContactUsPage />
//       </div>
//       <GoTopButton />
//       <Footer onMenuClick={handleMenuClick} />
//     </>
//   );
// };




const App = () => {
  const [activePage, setActivePage] = useState(() => {
    // Determine the initial page based on the URL path
    const path = window.location.pathname;
    switch (path) {
      case '/SDVS_Technologies/it_consulting':
        return 'ITConsulting';
      case '/SDVS_Technologies/it_training':
        return 'ITTraining';
      case '/SDVS_Technologies/recruitment':
        return 'Recruitment';
      case '/SDVS_Technologies/about_us':
        return 'AboutUs';
      case '/SDVS_Technologies/services':
        return 'Services';
      case '/SDVS_Technologies/career':
        return 'Career';
      case '/SDVS_Technologies/contact':
        return 'Contact';
      default:
        return 'Home'; // Default page
    }
  });

  const handleMenuClick = (page) => {
    // Update the active page state
    setActivePage(page);

    // Update the URL path without refreshing the page
    const pathMap = {
      Home: '/SDVS_Technologies/',
      ITConsulting: '/SDVS_Technologies/it_consulting',
      ITTraining: '/SDVS_Technologies/it_training',
      Recruitment: '/SDVS_Technologies/recruitment',
      AboutUs: '/SDVS_Technologies/about_us',
      Services: '/SDVS_Technologies/services',
      Career: '/SDVS_Technologies/career',
      Contact: '/SDVS_Technologies/contact',
    };
    const newPath = pathMap[page] || '/SDVS_Technologies/';
    window.history.pushState({}, '', newPath);

    // Scroll the page to the top
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Handle browser navigation (back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      switch (path) {
        case '/SDVS_Technologies/it_consulting':
          setActivePage('ITConsulting');
          break;
        case '/SDVS_Technologies/it_training':
          setActivePage('ITTraining');
          break;
        case '/SDVS_Technologies/recruitment':
          setActivePage('Recruitment');
          break;
        case '/SDVS_Technologies/about_us':
          setActivePage('AboutUs');
          break;
        case '/SDVS_Technologies/services':
          setActivePage('Services');
          break;
        case '/SDVS_Technologies/career':
          setActivePage('Career');
          break;
        case '/SDVS_Technologies/contact':
          setActivePage('Contact');
          break;
        default:
          setActivePage('Home');
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <>
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

reportWebVitals();























// // below condtion is Default one:

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// // import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { Header, Footer, GoTopButton } from './HeaderAndFooter/headerfooter';
// import { HomePage } from './WebPages/Home';
// import { HomeITConsultingServicesPage } from './WebPages/ITConsultingServices';
// import { HomeITTrainingServicesPage } from './WebPages/ITTrainingServices';
// import { HomeRecruitmentPage } from './WebPages/Recruitment';
// import { AboutUsPage } from './WebPages/AboutUs';
// import { ServicesPage } from './WebPages/Services';
// import { CareerPage } from './WebPages/Career';
// import { ContactUsPage } from './WebPages/ContactUs';



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
//     <GoTopButton />
//     <Footer />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
