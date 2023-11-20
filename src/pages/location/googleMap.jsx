import React, { useEffect, useState } from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const GoogleMap = () => {
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);
  const [route, setRoute] = useState([]);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Get user's current location
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
      },
      (error) => console.error(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

    // Set source and destination coordinates (example)
    setSource({ latitude: 37.78825, longitude: -122.4324 });
    setDestination({ latitude: 37.773972, longitude: -122.431297 });
  }, []);

  // Render map with markers and route
  return (
    <MapView style={{ flex: 1 }}>
      {userLocation && <Marker coordinate={userLocation} title="You are here" />}
      {source && <Marker coordinate={source} title="Source" />}
      {destination && <Marker coordinate={destination} title="Destination" />}
      {route.length > 1 && (
        <Polyline
          coordinates={route}
          strokeWidth={2}
          strokeColor="blue"
        />
      )}
    </MapView>
  );
};

export default GoogleMap;
