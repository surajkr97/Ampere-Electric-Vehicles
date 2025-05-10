
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const TestRideButton = ({ onClick }: { onClick?: () => void }) => {
    if (isHome) {
      return (
        <Button asChild className="bg-ampere hover:bg-ampere-dark text-white" onClick={onClick}>
          <ScrollLink to="contact-form" smooth={true} offset={-70} duration={500}>
            Book Test Ride
          </ScrollLink>
        </Button>
      );
    }
    return (
      <Button asChild className="bg-ampere hover:bg-ampere-dark text-white" onClick={onClick}>
        <Link to="/#contact-form">Book Test Ride</Link>
      </Button>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-ampere" />
          <span className="font-bold text-2xl text-ampere">AMPERE</span>
        </Link>

        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium hover:text-ampere">Home</Link>
          <Link to="/about" className="font-medium hover:text-ampere">About</Link>
          <Link to="/contact" className="font-medium hover:text-ampere">Contact</Link>
          <TestRideButton />
        </nav>

        {isMenuOpen && (
          <div className="fixed inset-0 top-[62px] bg-white z-50 md:hidden">
            <nav className="flex flex-col p-4">
              <Link 
                to="/" 
                className="py-3 px-4 text-center font-medium hover:bg-ampere hover:text-white rounded-md"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="py-3 px-4 text-center font-medium hover:bg-ampere hover:text-white rounded-md"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="py-3 px-4 text-center font-medium hover:bg-ampere hover:text-white rounded-md"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <div className="mt-4 flex justify-center w-full" onClick={toggleMenu}>
                <TestRideButton />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
