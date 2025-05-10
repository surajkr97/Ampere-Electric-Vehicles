
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">About AMPERE</h1>
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-6">
                AMPERE is India's leading electric two-wheeler manufacturer, committed to revolutionizing urban mobility through sustainable transportation solutions.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                To accelerate the world's transition to sustainable energy by offering affordable, high-quality electric scooters that make a positive impact on the environment.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded with a vision to make electric mobility accessible to all, AMPERE has grown from a small startup to one of India's most trusted electric vehicle brands. Our journey is marked by continuous innovation and a commitment to quality.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose AMPERE?</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li className="mb-2">Industry-leading range and performance</li>
                <li className="mb-2">Nationwide service network</li>
                <li className="mb-2">Advanced battery technology</li>
                <li className="mb-2">Competitive pricing</li>
                <li>Government-approved and compliant</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
