import styles from "./page.module.css";
import Image from 'next/image';

import homepage from '../app/images/homepage.png';

import { Button } from '@heroui/button';
import {Input} from "@heroui/react";

export default function Home() {
  return (
    <div className={styles.page}>  
      <div className={styles.container}>
        <Image src={homepage} className={styles.image} alt="homepage" style={{marginTop: "60px", marginBottom: "30px"}}/>
        {/* TODO: add username, password, fix padding, submit github */}
        <Input label="Username" placeholder="Enter your username" type="username" className={styles.input} key={"primary"} color={"primary"}/>
        <Input label="Password" placeholder="Enter your password" type="password" className={styles.input} key={"primary"} color={"primary"}/>
        <Button className={styles.button}>LOGIN</Button>
      </div>
    </div>
  );
}
