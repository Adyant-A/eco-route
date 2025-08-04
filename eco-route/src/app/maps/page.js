import styles from "../page.module.css";
import BottomBar from '../components/BottomBar';
import Image from 'next/image';
import Link from 'next/link';

import home from '../icons/home.png';

import { Button } from '@heroui/button';
import {Input} from "@heroui/react";

export default function Maps() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* TODO: Add start point, destination  inputs, h1 with styling from figma, hr for horizontal line, all styles go in page.module.css */}
        <Button className={styles.homeButton}><Link href="/"> <Image src={home} alt="Home Icon" width={30} height={30} /></Link></Button>
        <h1 className={styles.title}>MAPS</h1>
        <hr className={styles.seperator}/>
        <Input label="Start Point" type="text" className={styles.mapInput} key={"primary"} color={"primary"}/>
        <Input label="Destination" type="text" className={styles.input} key={"primary"} color={"primary"}/>
        <BottomBar activeTab="maps" />
      </div>
    </div>
  );
}