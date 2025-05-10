
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Map from '@/components/Map';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Contact Us</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Have questions about our electric scooters? Get in touch with us, and our team will be happy to assist you.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm />
            <Map />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
