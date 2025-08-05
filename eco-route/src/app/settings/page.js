import styles from "../page.module.css";
import BottomBar from '../components/BottomBar';
import Image from 'next/image';
import Link from 'next/link';

import logout from '../icons/logout.png';

import { Button } from '@heroui/button';
import {Input} from "@heroui/react";

export default function Settings() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* TODO: Add start point, destination  inputs, h1 with styling from figma, hr for horizontal line, all styles go in page.module.css */}
        <h1 className={styles.title}>SETTINGS</h1>
        <hr className={styles.seperator}/>
        <Button className={styles.homeButton}><Link href="/"> <Image src={logout} alt="Home Icon" width={30} height={30} /></Link></Button>
        {/* TODO: (these are things that we'd mention as future things to add to the app)
             > Make a box for C02 saved and total miles traveled w/ the app 
             > Show miles traveled in each vehicle type (make a table)
             > Common transit routes taken 
             > Challenges completed 
         */}
        <BottomBar activeTab="settings" />
      </div>
    </div>
  );
}