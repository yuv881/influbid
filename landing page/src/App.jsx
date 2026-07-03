import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import OpenCampaigns from './components/OpenCampaigns';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import PopularNiches from './components/PopularNiches';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Stats Strip */}
        <Stats />

        {/* Live Now: Open Campaigns Grid */}
        <OpenCampaigns />

        {/* How It Works Side-by-Side Walkthrough */}
        <HowItWorks />

        {/* Platform Features Grid */}
        <Features />

        {/* Popular Niche Categories */}
        <PopularNiches />

        {/* Testimonials */}
        <Testimonials />

        {/* CTA Banner Section */}
        <CTA />
      </main>

      {/* Footer & Cookie triggers */}
      <Footer />
    </div>
  );
}
