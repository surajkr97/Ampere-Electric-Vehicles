
export interface Scooter {
  id: string;
  name: string;
  price: string;
  range: string;
  speed: string;
  battery: string;
  image: string;
  description: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
  colors: string[];
}

export const scooters: Scooter[] = [
  {
    id: "magnus-neo",
    name: "Magnus Neo",
    price: "₹79,999",
    range: "80–95 km",
    speed: "65 km/h",
    battery: "2.3 kWh",
    image: "/lovable-uploads/1628de76-2196-4a8a-ad3f-28cff2d91744.png",
    description: "The Magnus Neo combines power and efficiency in a sleek design. Perfect for urban commuters who want style and performance in one package. With its robust battery and impressive range, the Magnus Neo is a standout choice for modern city riders.",
    features: [
      "Digital LCD display",
      "Remote boot opening",
      "USB charging port",
      "Telescopic suspension",
      "Anti-theft alarm",
      "Regenerative braking",
      "Find my scooter feature",
      "Reverse assist"
    ],
    specifications: {
      "Motor": "BLDC Hub Motor",
      "Battery Type": "Lithium-ion",
      "Charging Time": "5-6 hours",
      "Weight": "85 kg",
      "Load Capacity": "150 kg",
      "Braking System": "Disc (Front) & Drum (Rear)",
      "Tire Size": "90/90-12",
      "Ground Clearance": "170 mm",
      "Underseat Storage": "22 liters",
      "Warranty": "3 years on battery",
    },
    colors: ["White", "Black", "Blue", "Red"]
  },
  {
    id: "nexus-st",
    name: "Nexus ST",
    price: "₹1,09,000",
    range: "105 km",
    speed: "93 km/h",
    battery: "3 kWh",
    image: "/lovable-uploads/9e1f3a1c-dc8e-4e73-b2ca-5e2c7573f1a8.png",
    description: "The premium Nexus ST is our flagship model, designed for riders who demand the best. With its superior range and top speed, it sets the standard for electric mobility. Experience the future of riding with advanced features and uncompromising performance.",
    features: [
      "Smart connectivity with mobile app",
      "GPS navigation",
      "Multiple riding modes",
      "Adaptive headlight",
      "Anti-theft security system",
      "Regenerative braking",
      "Bluetooth connectivity",
      "Cruise control",
      "Keyless start"
    ],
    specifications: {
      "Motor": "Mid-Drive BLDC Motor",
      "Battery Type": "Advanced Lithium-ion",
      "Charging Time": "4 hours",
      "Weight": "92 kg",
      "Load Capacity": "170 kg",
      "Braking System": "Disc (Front & Rear) with CBS",
      "Tire Size": "100/80-12",
      "Ground Clearance": "180 mm",
      "Underseat Storage": "24 liters",
      "Warranty": "5 years on battery",
    },
    colors: ["Grey", "Black", "Blue", "Red"]
  },
  {
    id: "reo-li-plus",
    name: "Reo Li Plus",
    price: "₹59,000",
    range: "60–70 km",
    speed: "25 km/h",
    battery: "1.3 kWh",
    image: "/lovable-uploads/599334a8-4971-4f68-b53b-5ce87a51b776.png",
    description: "The Reo Li Plus is our most accessible electric scooter, perfect for short commutes and beginners. Energy-efficient and easy to handle, it's an excellent choice for navigating crowded streets while maintaining eco-friendly transportation.",
    features: [
      "Digital speedometer",
      "USB charging port",
      "LED headlamp",
      "Anti-theft wheel lock",
      "Boot light",
      "Economy mode",
      "Mobile holder"
    ],
    specifications: {
      "Motor": "BLDC Hub Motor",
      "Battery Type": "Lithium-ion",
      "Charging Time": "4-5 hours",
      "Weight": "75 kg",
      "Load Capacity": "130 kg",
      "Braking System": "Drum (Front & Rear)",
      "Tire Size": "90/90-10",
      "Ground Clearance": "160 mm",
      "Underseat Storage": "18 liters",
      "Warranty": "2 years on battery",
    },
    colors: ["Red", "Black", "White", "Yellow"]
  }
];
