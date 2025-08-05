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
        {/* TODO: Add start point, destination  inputs, h1 with styling from figma, hr for horizontal line, all styles go in page.module.css */}
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
         <Input label="Name" placeholder="Adyant Akula" className={styles.input} key={"primary"}/>
         <Input label="Home Address" placeholder="1234 Crescent Avenue, San Ramon, 94582" className={styles.input} key={"primary"}/>
         <Input label="Phone Number" placeholder="925-123-4567" className={styles.input} key={"primary"}/>
         <Switch defaultSelected>Enable text messages</Switch>
         <Switch defaultSelected>Car preferred</Switch>
         <Switch defaultSelected>Enable text messages</Switch>
         <p>Member since August 2025</p>
        <BottomBar activeTab="settings" />
      </div>
    </div>
  );
}