import styles from "./page.module.css";
import Image from 'next/image';
import Link from 'next/link';

import homepage from '../app/images/homepage.png';

import { Button } from '@heroui/button';
import {Input} from "@heroui/react";

export default function Home() {
  return (
    <div className={styles.page}>  
      <div className={styles.container}>
        <Image src={homepage} className={styles.image} alt="homepage" style={{marginTop: "60px", marginBottom: "30px"}}/>
        <Input label="Username" placeholder="Enter your username" type="username" className={styles.input} key={"primary"} color={"primary"}/>
        <Input label="Password" placeholder="Enter your password" type="password" className={styles.input} key={"primary"} color={"primary"}/>
        <Button className={styles.button}><Link href="/maps">LOGIN</Link></Button>
      </div>
    </div>
  );
}
