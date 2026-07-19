import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OpenCampaigns from './components/OpenCampaigns';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import PopularNiches from './components/PopularNiches';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <HowItWorks />

      <OpenCampaigns />

      <Features />

      <PopularNiches />

      <Testimonials />

      <CTA />

      <Footer />
    </>
  );
}
