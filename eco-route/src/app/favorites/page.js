import styles from "../page.module.css";
import BottomBar from '../components/BottomBar';
import Image from 'next/image';
import Link from 'next/link';

import logout from '../icons/logout.png';

import { Button } from '@heroui/button';
import {Input} from "@heroui/react";

export default function Favorites() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* TODO: Add start point, destination  inputs, h1 with styling from figma, hr for horizontal line, all styles go in page.module.css */}
        <h1 className={styles.title}>FAVORITES</h1>
        <hr className={styles.seperator}/>
        <Button className={styles.homeButton}><Link href="/"> <Image src={logout} alt="Home Icon" width={30} height={30} /></Link></Button>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <Button className={styles.button}><Link href="/">Places</Link></Button>
          <Button className={styles.button}><Link href="/">Transportation</Link></Button>
        </div>
       

        <BottomBar activeTab="favorites" />
      </div>
    </div>
  );
}