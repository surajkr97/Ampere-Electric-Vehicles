
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ScooterCardProps {
  id: string;
  name: string;
  price: string;
  range: string;
  speed: string;
  battery: string;
  image: string;
}

const ScooterCard = ({ id, name, price, range, speed, battery, image }: ScooterCardProps) => {
  return (
    <Card className="scooter-card overflow-hidden border border-gray-200 h-full flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="scooter-img w-full h-full object-cover object-center"
        />
      </div>
      <CardContent className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-ampere font-bold">{price}</p>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="text-center p-2 bg-gray-50 rounded-md">
            <p className="text-xs text-gray-500">Range</p>
            <p className="font-semibold text-sm">{range}</p>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-md">
            <p className="text-xs text-gray-500">Top Speed</p>
            <p className="font-semibold text-sm">{speed}</p>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-md">
            <p className="text-xs text-gray-500">Battery</p>
            <p className="font-semibold text-sm">{battery}</p>
          </div>
        </div>
        
        <div className="mt-auto">
          <Button asChild className="w-full bg-ampere hover:bg-ampere-dark text-white">
            <Link to={`/product/${id}`}>
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScooterCard;
