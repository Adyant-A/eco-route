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
import { Input } from "@heroui/react";
import { AddressAutofill } from '@mapbox/search-js-react';
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

export default function Maps() {
  // Form inputs (for typing)
  const [inputStart, setInputStart] = useState("");
  const [inputDest, setInputDest] = useState("");

  // Map coordinates (only update on "Get Route")
  const [startCoords, setStartCoords] = useState(null);
  const [destCoords, setDestCoords] = useState(null);

  async function handleRoute() {
    const start = await geocodeAddress(inputStart);
    const dest = await geocodeAddress(inputDest);
    setStartCoords(start);
    setDestCoords(dest);
  }

  async function geocodeAddress(address) {
    console.log("Geocoding address:", address);
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${MAPBOX_TOKEN}`
    );
    const data = await res.json();
    if (data.features.length > 0) {
      const [lng, lat] = data.features[0].center;
      return { lng, lat };
    }
    return null;
  }

  async function getRoadDistance(start, end, accessToken) {
    try {
      const response = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${start.lng},${start.lat};${end.lng},${end.lat}?` +
        `access_token=${accessToken}&geometries=geojson&overview=simplified`
      );

      const data = await response.json();

      if (data.routes && data.routes.length > 0) {
        const distanceMeters = data.routes[0].distance;
        const distanceMiles = distanceMeters * 0.000621371;
        return Math.round(distanceMiles * 100) / 100;
      }
      return null;
    } catch (error) {
      return null;
    }
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

        <div className={styles.inputContainer}>
          <Button
            className={styles.button}
            onPress={handleRoute}
          >
            Start
          </Button>
        </div>

        <div className={styles.detailBlock} style={{ marginTop: "10px" }}>
          <Image
            src={bicycle}
            alt="Bicycle Icon"
            width={50}
            height={50}
            style={{ marginLeft: "10px" }}
          />
          <div className={styles.details}>
            <p className={styles.vehicleType}  >
              Bicycle Recommended
            </p>
          </div>
          <div className={styles.details} style={{ marginRight: "20px" }}>
            <span style={{ borderLeft: "2px solid #007EA7", height: "35px", paddingLeft: "10px" }}>
              <p className={styles.address}>
                CO2 Emissions Saved:<strong style={{ color: "#109548" }}> 2 kg</strong>
              </p>
            </span>
          </div>
        </div>

        {memoizedMapbox}

        <BottomBar activeTab="maps" />
      </div>
    </div>
  );
}