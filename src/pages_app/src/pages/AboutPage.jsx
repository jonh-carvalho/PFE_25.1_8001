import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function AboutPage() {
  return (
    <>
      <Navbar />
      <section className="about">
        <h1>About Us</h1>
        <p>We are a company that values...</p>
      </section>
      <Footer />
    </>
  );
}

export default AboutPage;