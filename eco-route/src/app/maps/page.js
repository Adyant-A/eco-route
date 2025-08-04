import styles from "../page.module.css";
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@heroui/button';
import {Input} from "@heroui/react";

export default function Maps() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* TODO: Add start point, destination  inputs, h1 with styling from figma, hr for horizontal line, all styles go in page.module.css */}
        <h1 className={styles.title}>MAPS</h1>
        <hr className={styles.seperator}/>
        <Input label="Start Point" type="text" className={styles.mapInput} key={"primary"} color={"primary"}/>
        <Input label="Destination" type="text" className={styles.input} key={"primary"} color={"primary"}/>
        <Button className={styles.button}><Link href="/">Back to Home</Link></Button>
      </div>
    </div>
  );
}