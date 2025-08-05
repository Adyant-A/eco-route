"use client";

import styles from "../page.module.css";
import BottomBar from '../components/BottomBar';
import Image from 'next/image';
import Link from 'next/link';
import mapboxgl from "mapbox-gl";
import Mapbox from "../components/Mapbox"; 

import logout from '../icons/logout.png';

import { Button } from '@heroui/button';
import {Input} from "@heroui/react";

export default function Maps() {
  const mapboxToken = "pk.eyJ1IjoiYWR5bWFwcyIsImEiOiJjbWR4b2R1MTUxdzhqMmxvbmFpYXF4azJkIn0.OYKbEcywM_i-3CNIMQmsdg";

  // Geocoded coordinates
  const start = { lng: -121.9358, lat: 37.7577 }; // Cedarwood Loop, San Ramon
  const destination = { lng: -121.9071, lat: 37.7285 }; // Dougherty Valley High School, CA

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Button className={styles.homeButton}><Link href="/"> <Image src={logout} alt="Home Icon" width={30} height={30} /></Link></Button>
        <h1 className={styles.title}>MAPS</h1>
        <hr className={styles.seperator}/>
        <Input label="Start Point" type="text" className={styles.mapInput} key={"primary"} color={"primary"}/>
        <Input label="Destination" type="text" className={styles.input} key={"primary"} color={"primary"}/>
         <Mapbox
                mapboxAccessToken={mapboxToken}
                mapStyle="mapbox://styles/mapbox/streets-v12"
                initialViewState={{ latitude: 37.7577, longitude: -121.9358, zoom: 12 }}
                maxZoom={20}
                minZoom={3}
                start={start}
                destination={destination}
            ></Mapbox>
        <BottomBar activeTab="maps" />
      </div>
    </div>
  );
}