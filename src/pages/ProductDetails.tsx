
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { scooters, Scooter } from '@/data/scooters';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScooterCard from '@/components/ScooterCard';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [scooter, setScooter] = useState<Scooter | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>('');
  
  useEffect(() => {
    const foundScooter = scooters.find(s => s.id === id);
    if (foundScooter) {
      setScooter(foundScooter);
      setSelectedColor(foundScooter.colors[0]);
    } else {
      navigate('/');
      toast.error('Scooter not found');
    }
  }, [id, navigate]);

  // Get other scooters for recommendations
  const otherScooters = scooters.filter(s => s.id !== id);

  if (!scooter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ampere"></div>
      </div>
    );
  }

  const handleBookTestRide = () => {
    toast.success(`Test ride request submitted for ${scooter.name}`);
    const contactFormElement = document.getElementById('contact-form');
    if (contactFormElement) {
      window.scrollTo({ 
        top: contactFormElement.offsetTop - 100, 
        behavior: 'smooth' 
      });
    } else {
      navigate('/#contact-form');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Back button */}
        <div className="container mx-auto px-4 py-4">
          <Button 
            variant="ghost" 
            asChild 
            className="mb-4 flex items-center text-gray-600 hover:text-ampere"
          >
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all scooters
            </Link>
          </Button>
        </div>
        
        {/* Product details */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="relative">
              <div className="sticky top-20">
                <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center">
                  <img 
                    src={scooter.image} 
                    alt={scooter.name} 
                    className="max-w-full h-auto object-contain"
                  />
                </div>
                
                {/* Color selection */}
                <div className="mt-6">
                  <h3 className="font-medium mb-3">Available Colors</h3>
                  <div className="flex flex-wrap gap-3">
                    {scooter.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`
                          w-12 h-12 rounded-full flex items-center justify-center border-2 
                          ${selectedColor === color ? 'border-ampere' : 'border-transparent'}
                        `}
                        style={{ 
                          backgroundColor: color.toLowerCase(),
                          color: ['White', 'Yellow'].includes(color) ? '#000' : '#fff'
                        }}
                        title={color}
                      >
                        {selectedColor === color && <Check className="h-4 w-4" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">{scooter.name}</h1>
                <p className="text-2xl font-bold text-ampere mt-2">{scooter.price}</p>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-500">Range</div>
                  <div className="font-semibold">{scooter.range}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-500">Top Speed</div>
                  <div className="font-semibold">{scooter.speed}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-500">Battery</div>
                  <div className="font-semibold">{scooter.battery}</div>
                </div>
              </div>
              
              <p className="text-gray-600">{scooter.description}</p>
              
              <div className="space-y-4">
                <Button 
                  className="w-full bg-ampere hover:bg-ampere-dark text-white py-6"
                  onClick={handleBookTestRide}
                >
                  Book a Test Ride
                </Button>
              </div>
              
              <Tabs defaultValue="features" className="mt-8">
                <TabsList className="grid grid-cols-2">
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="specifications">Specifications</TabsTrigger>
                </TabsList>
                <TabsContent value="features" className="mt-4">
                  <ul className="space-y-2">
                    {scooter.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-ampere mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="specifications" className="mt-4">
                  <div className="space-y-2">
                    {Object.entries(scooter.specifications).map(([key, value]) => (
                      <div key={key} className="grid grid-cols-2 py-2 border-b border-gray-100">
                        <div className="font-medium">{key}</div>
                        <div>{value}</div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
        
        {/* You may also like section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">You may also like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherScooters.map((otherScooter) => (
                <ScooterCard
                  key={otherScooter.id}
                  id={otherScooter.id}
                  name={otherScooter.name}
                  price={otherScooter.price}
                  range={otherScooter.range}
                  speed={otherScooter.speed}
                  battery={otherScooter.battery}
                  image={otherScooter.image}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetails;
