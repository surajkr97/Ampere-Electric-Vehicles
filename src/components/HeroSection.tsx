
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-ampere-light to-ampere text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Make Har Gully Electric, <br />With the power of more!
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-md">
              Experience the ultimate electric ride with Magnus NEO. 
              Eco-friendly, powerful, and designed for your urban journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-white text-ampere hover:bg-gray-100 px-6 py-6">
                <ScrollLink 
                  to="scooters" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                  className="flex items-center"
                >
                  Explore Scooters <ArrowRight className="ml-2 h-4 w-4" />
                </ScrollLink>
              </Button>
              <Button asChild className="bg-transparent border border-white hover:bg-white/10 px-6 py-6">
                <ScrollLink 
                  to="contact-form" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                  className="flex items-center"
                >
                  Book Test Ride
                </ScrollLink>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="/lovable-uploads/2d968dd1-8603-4be2-a294-fb60621eda39.png"
                alt="Magnus NEO Electric Scooter" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-5 -right-5 bg-white text-ampere p-3 rounded-lg shadow-lg">
                <div className="font-bold text-xl">₹59,000</div>
                <div className="text-sm">Starting Price</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
