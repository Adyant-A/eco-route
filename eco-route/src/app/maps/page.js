"use client";

import styles from "../page.module.css";

import BottomBar from '../components/BottomBar';
import Image from 'next/image';
import Link from 'next/link';
import Mapbox from "../components/Mapbox";

import logout from '../icons/logout.png';
import bicycle from '../images/favImages/bicycle.png';
import bus from '../images/favImages/bus.png';
import car from '../images/favImages/car.png';
import uber from '../images/favImages/uber.png';

import { Button } from '@heroui/button';
import { SearchBox } from "@mapbox/search-js-react";
import { useState, useMemo } from 'react';

const MAPBOX_TOKEN = "pk.eyJ1IjoiYWR5bWFwcyIsImEiOiJjbWR4b2R1MTUxdzhqMmxvbmFpYXF4azJkIn0.OYKbEcywM_i-3CNIMQmsdg";

const MAPBOX_CONFIG = {
  mapStyle: "mapbox://styles/mapbox/streets-v12",
  maxZoom: 20,
  minZoom: 3,
  initialViewState: {
    latitude: 37.7577,
    longitude: -121.9358,
    zoom: 11
  }
};

const theme = {
  variables: {
    fontFamily: 'JetBrains Mono, monospace',
    unit: '14px',
    padding: '0.5em',
    borderRadius: '10px',
    border: '0px',
  }
};

// Add the missing getRoadDistance function
async function getRoadDistance(start, dest, token) {
  const response = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/driving/${start.lng},${start.lat};${dest.lng},${dest.lat}?access_token=${token}&geometries=geojson`
  );
  const data = await response.json();

  if (data.routes && data.routes.length > 0) {
    // Distance is returned in meters, convert to km
    return (data.routes[0].distance / 1000).toFixed(1);
  }
  return null;
}

export default function Maps() {
  // Form inputs (for typing)
  const [inputStart, setInputStart] = useState("");
  const [inputDest, setInputDest] = useState("");

  // Map coordinates (only update on "Get Route")
  const [startCoords, setStartCoords] = useState(null);
  const [destCoords, setDestCoords] = useState(null);

  // Vehicle variables 
  const [distance, setDistance] = useState(null);
  const [vehicleType, setVehicleType] = useState(null);

  // Emissions saved
  const [emissionsSaved, setEmissionsSaved] = useState(0);

  // Vehicle data
  const vehicleData = {
    Bicycle: {
      icon: bicycle,
      label: "Bicycle Recommended"
    },
    Car: {
      icon: car,
      label: "Car Recommended"
    },
    Transit: {
      icon: bus,
      label: "Bus Recommended"
    }
  };

  // Emissions data (g CO2 per mile)
  const emissionsData = {
    Bicycle: 0,
    Car: 404,
    Transit: 150
  };

  const handleRoute = async () => {
    console.log('Current vehicleType:', vehicleType); // Debug log
    if (!inputStart || !inputDest) {
      console.log('Missing start or destination'); // Debug log
      return;
    }

    const start = await geocodeAddress(inputStart);
    const dest = await geocodeAddress(inputDest);

    setStartCoords(start);
    setDestCoords(dest);

    if (start && dest) {
      const dist = await getRoadDistance(start, dest, MAPBOX_TOKEN);
      // convert distance from km to miles
      const miles = (dist * 0.621371).toFixed(1);
      setDistance(miles);

      let chosenVehicle;
      if (miles < 5) {
        setVehicleType("Bicycle");
        chosenVehicle = "Bicycle";
      } else if (miles < 20) {
        setVehicleType("Transit");
        chosenVehicle = "Transit";
      } else {
        setVehicleType("Car");
        chosenVehicle = "Car";
      }

      if (chosenVehicle != "Car") {
        const savedKg = ((emissionsData.Car - emissionsData[chosenVehicle]) * miles / 1000).toFixed(2);
        setEmissionsSaved(savedKg);
      } else {
        setEmissionsSaved(0);
      }
    }
  }

  async function geocodeAddress(address) {
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${MAPBOX_TOKEN}`
    );
    const data = await res.json();
    if (data.features && data.features.length > 0) {
      const [lng, lat] = data.features[0].center;
      return { lng, lat };
    }
    return null;
  }

  // Memoize the Mapbox component to prevent unnecessary re-renders
  const memoizedMapbox = useMemo(() => (
    <Mapbox
      mapboxAccessToken={MAPBOX_TOKEN}
      {...MAPBOX_CONFIG}
      start={startCoords}
      destination={destCoords}
    />
  ), [startCoords, destCoords]);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Button className={styles.homeButton}>
          <Link href="/">
            <Image src={logout} alt="Home Icon" width={30} height={30} />
          </Link>
        </Button>

        <h1 className={styles.title}>MAPS</h1>
        <hr className={styles.seperator} />

        <form style={{ width: '100%', marginTop: '-10px', marginBottom: '10px' }}>
          <SearchBox
            accessToken={MAPBOX_TOKEN}
            theme={theme}
            placeholder="Start Location"
            value={inputStart}
            onChange={(e) => setInputStart(e.target.value)}
            onRetrieve={(res) => setInputStart(res.features[0].properties.full_address)}>
          </SearchBox>
        </form>

        <form style={{ width: '100%', marginBottom: '10px' }}>
          <SearchBox
            accessToken={MAPBOX_TOKEN}
            theme={theme}
            placeholder="End Location"
            value={inputDest}
            onChange={(e) => setInputDest(e.target.value)}
            onRetrieve={(res) => setInputDest(res.features[0].properties.full_address)}>
          </SearchBox>
        </form>

        <div className={styles.inputContainer} style={{ marginBottom: "8px" }}>
          <Button
            className={styles.button}
            onPress={handleRoute}
          >
            Start
          </Button>
        </div>

        {vehicleType && vehicleData[vehicleType] && (
          <div className={styles.mapBlock}
            style={{
              position: 'fixed',
              top: '95px',
              left: '45%',
              transform: 'translateX(-50%)',
              width: '90%',
              maxWidth: '280px',
              zIndex: 1000,
              display: 'flex',
            }}>
            <Image
              src={vehicleData[vehicleType].icon}
              alt={`${vehicleType} Icon`}
              width={50}
              height={50}
              style={{ marginLeft: "10px" }}
            />
            <div className={styles.details}>
              <p className={styles.vehicleType}>{vehicleData[vehicleType].label}</p>
              {distance && <p className={styles.address}>Distance: <strong style={{ color: "#109548" }}>{distance} mi</strong></p>}
              {emissionsSaved !== null && (
                <p className={styles.address}>
                  CO₂ Emissions Saved:
                  <strong style={{ color: "#109548" }}> {emissionsSaved} kg</strong>
                </p>
              )}
            </div>
          </div>
        )}

        {memoizedMapbox}

        <BottomBar activeTab="maps" />
      </div>
    </div>
  );
}