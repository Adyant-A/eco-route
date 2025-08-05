import styles from "../page.module.css";
import BottomBar from '../components/BottomBar';
import Image from 'next/image';
import Link from 'next/link';

import logout from '../icons/logout.png';

import { Button } from '@heroui/button';
import {Input} from "@heroui/react";

export default function Stats() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>STATS</h1>
        <hr className={styles.seperator}/>
        <Button className={styles.homeButton}><Link href="/"> <Image src={logout} alt="Home Icon" width={30} height={30} /></Link></Button>
         {/* TODO: 
             > Make a button link for Saved and Transportation  
             > Show miles traveled in each vehicle type (make a table)
             > Common transit routes taken 
             > Challenges completed 
         */}

        <BottomBar activeTab="stats" />
      </div>
    </div>
  );
}