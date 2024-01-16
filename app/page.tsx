"use client";

import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Sponsors from './components/Sponsors/Sponsors';
import About from './components/About/About';

import Footer from './components/Footer/Footer';

import '../app/globals.css';

const HomePage: React.FC = () => {
  return (
    <div>

      <Navbar />

      <Hero />
      <Sponsors />
      <About />

      <Footer />

    </div>
  );
};

export default HomePage;