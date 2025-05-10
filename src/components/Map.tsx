
import React, { useEffect, useRef } from 'react';

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Load Google Maps API script
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=&libraries=places`;
    googleMapsScript.async = true;
    googleMapsScript.defer = true;
    googleMapsScript.onload = initMap;
    document.head.appendChild(googleMapsScript);

    // Initialize the map
    function initMap() {
      if (typeof window.google === 'undefined' || !mapRef.current) return;
      
      // Example coordinates for Bangalore, India
      const location = { lat: 12.9716, lng: 77.5946 };
      
      const map = new window.google.maps.Map(mapRef.current, {
        center: location,
        zoom: 15,
        styles: [
          {
            featureType: "administrative",
            elementType: "all",
            stylers: [{ saturation: -100 }]
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [{ saturation: -100 }]
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#0EA5E9" }]
          }
        ]
      });
      
      const marker = new window.google.maps.Marker({
        position: location,
        map: map,
        title: "AMPERE Electric",
        animation: window.google.maps.Animation.DROP,
      });
      
      const infoWindow = new window.google.maps.InfoWindow({
        content: "<div><strong>AMPERE Electric Showroom</strong><br>123 Electric Avenue, Bangalore</div>"
      });
      
      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    }
    
    return () => {
      // Clean up script if component unmounts
      const script = document.querySelector('script[src*="maps.googleapis.com/maps/api"]');
      if (script) {
        script.remove();
      }
    };
  }, []);
  
  return (
    <div className="relative h-[400px]">
      <div 
        ref={mapRef} 
        className="h-full w-full rounded-lg shadow-md"
        style={{ height: '100%' }}
      ></div>
      <div className="absolute bottom-4 left-4 z-10 bg-white p-3 rounded-md shadow-md max-w-[250px]">
        <h3 className="font-bold text-ampere">Fatma Motors</h3>
        <p className="text-sm">Ramna Chowk, Main Road, SH-74, Sangrampur</p>
        <p className="text-sm mt-1">Mon-Sat: 9:00 AM - 8:00 PM</p>
        <a 
          href="https://maps.google.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-ampere font-medium mt-1 inline-block"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
};

export default Map;
