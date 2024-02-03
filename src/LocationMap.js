
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const LocationMap = ({ location }) => {
  useEffect(() => {
    // Create map instance
    const map = L.map('map').setView([location.latitude, location.longitude], 15);

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Define a custom marker icon
    const customIcon = new L.Icon({
      iconUrl: process.env.PUBLIC_URL + '/images/location-logo.png', // Adjust the path based on your setup
      iconSize: [32, 32], // Adjust the size of your marker image
      iconAnchor: [16, 32], // Adjust the anchor point if needed
    });

    // Add marker with custom icon
    const marker = L.marker([location.latitude, location.longitude], { icon: customIcon }).addTo(map);

    // Add click event listener to the marker
    marker.on('click', handleMapLinkClick);

    // Cleanup function to remove the map instance when the component is unmounted
    return () => {
      map.remove();
    };
  }, [location.latitude, location.longitude]);

  const handleMapLinkClick = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div>
      <div id="map" style={{ height: '400px' }} />
    </div>
  );
};

export default LocationMap;