
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { ArrowDown } from 'lucide-react';
import { scooters } from '@/data/scooters';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScooterCard from '@/components/ScooterCard';
import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import Map from '@/components/Map';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Scroll Down Indicator */}
        <div className="flex justify-center -mt-6">
          <ScrollLink 
            to="scooters" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500}
            className="bg-white rounded-full p-3 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
          >
            <ArrowDown className="text-ampere h-6 w-6" />
          </ScrollLink>
        </div>
        
        {/* Scooters Section */}
        <section id="scooters" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Electric Scooters</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our range of premium electric scooters designed for every type of rider.
                From city commuters to adventure seekers, we have the perfect ride for you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {scooters.map((scooter) => (
                <ScooterCard
                  key={scooter.id}
                  id={scooter.id}
                  name={scooter.name}
                  price={scooter.price}
                  range={scooter.range}
                  speed={scooter.speed}
                  battery={scooter.battery}
                  image={scooter.image}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose AMPERE?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're committed to providing sustainable mobility solutions that don't compromise on performance or style.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-200 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-ampere/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ampere" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Eco-Friendly Power</h3>
                <p className="text-gray-600">
                  Our electric scooters produce zero emissions, helping to reduce air pollution and your carbon footprint.
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-ampere/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ampere" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Cost-Efficient</h3>
                <p className="text-gray-600">
                  Save money on fuel and maintenance with our efficient electric motors and durable components.
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-ampere/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ampere" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Reliable Performance</h3>
                <p className="text-gray-600">
                  Our scooters are built with high-quality materials and backed by comprehensive warranties.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact & Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Visit Our Showroom</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Come experience our electric scooters in person at our flagship store.
                Our experts are ready to answer all your questions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ContactForm />
              <Map />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
