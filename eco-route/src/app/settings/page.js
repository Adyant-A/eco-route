import styles from "../page.module.css";
import BottomBar from '../components/BottomBar';
import Image from 'next/image';
import Link from 'next/link';

import logout from '../icons/logout.png';

import { Button } from '@heroui/button';
import {Input} from "@heroui/react";
import {Avatar} from "@heroui/react";
import { Switch } from "@heroui/react";

export default function Settings() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>SETTINGS</h1>
        <hr className={styles.seperator}/>
        <Button className={styles.homeButton}><Link href="/"> <Image src={logout} alt="Home Icon" width={30} height={30} /></Link></Button>
        <Avatar 
          className={styles.avatar} 
          size="lg" 
          isBordered 
          src="./profile.png" 
          alt="User Avatar" 
          style={{marginBottom: "20px"}}
        />
         <h3>My Profile</h3>
         <Input label="Name" placeholder="Adyant Akula" className={styles.input} key={"primary"}/>
         <Input label="Home Address" placeholder="1234 Crescent Avenue, San Ramon, 94582" className={styles.input} key={"primary"}/>
         <Input label="Phone Number" placeholder="925-123-4567" className={styles.input} key={"primary"}/>
         <div className={styles.switchContainer}>
           <Switch size="sm" color="success" defaultSelected><p style={{fontSize:"14px"}}>Enable text messages</p></Switch>
         </div>
          <div className={styles.switchContainer}>
           <Switch size="sm" color="success" defaultSelected><p style={{fontSize:"14px"}}>Enable notifications</p></Switch>
         </div>
         <div className={styles.switchContainer}>
           <Switch size="sm" color="warning"><p style={{fontSize:"14px"}}>Avoid highways</p></Switch>
         </div>
         <div className={styles.switchContainer}>
           <Switch size="sm" color="warning"><p style={{fontSize:"14px"}}>Avoid tolls</p></Switch>
         </div>
         <div className={styles.switchContainer}>
           <Switch size="sm" color="success" defaultSelected><p style={{fontSize:"14px"}}>Prefer lowest carbon footprint</p></Switch>
         </div>
         <div className={styles.switchContainer}>
           <Switch size="sm" color="primary"><p style={{fontSize:"14px"}}>Prefer shortest time</p></Switch>
         </div>
         <div className={styles.switchContainer}>
           <Switch size="sm" color="success" defaultSelected><p style={{fontSize:"14px"}}>Show charging stations on map</p></Switch>
         </div>
         <p style={{fontWeight:"bold", color:"gray"}}>Member since Jan 2025</p>
        <BottomBar activeTab="settings" />
      </div>
    </div>
  );
}