import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Experience from './components/experience/experince';
import Footer from './components/footer/footer';
import Header from './components/header/Header';
import Nav from './components/nav/nav';
import Portfolio from './components/portfolio/porfolio';
import Services from './components/services /services';
import Testimonials from './components/testominals/testominals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
  </React.StrictMode>
);
