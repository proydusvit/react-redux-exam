import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home/Home.js';
import AboutUs from './components/AboutUs/AboutUs.js';
import Contact from './components/Contact/Contact.js';
import Team from './components/Team/Team.js';
import Services from './components/Services/Services.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import Blog from './components/Blog/Blog.js';
import FAQ from './components/FAQ/FAQ.js';
import ContactUs from './components/ContactUs/ContactUs.js';
import Testimonials from './components/Testimonials/Testimonials.js';
import AllProducts from './components/AllProducts/AllProducts.js';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/allproducts">All Products</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/testimonials" element={<Testimonials/>} />
          <Route path="/allproducts" element={<AllProducts/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;