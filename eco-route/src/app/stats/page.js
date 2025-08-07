import styles from "../page.module.css";
import BottomBar from '../components/BottomBar';
import Image from 'next/image';
import Link from 'next/link';

import logout from '../icons/logout.png';
import goal from '../images/statsImages/goal.png';
import bike from '../images/statsImages/bike.png';
import car from '../images/statsImages/car.png';
import bus from '../images/statsImages/bus.png';
import uber from '../images/statsImages/uber.png';
import pin from '../images/statsImages/pin.png';
import dots from '../images/statsImages/dots.png';
import award from '../images/statsImages/award.png';

import { Button } from '@heroui/button';

export default function Stats() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>STATS</h1>
        <hr className={styles.seperator} />
        <Button className={styles.homeButton}><Link href="/"> <Image src={logout} alt="Home Icon" width={30} height={30} /></Link></Button>
        <div className={styles.infoBlock}>
          <div className={styles.stats} style={{ marginLeft: "10px" }}>
            <p><strong>CO2 Saved</strong></p>
            <p style={{ fontSize: "17px" }}>1,500 kg</p>
          </div>
          <Image src={goal} alt="House Icon" width={65} height={65} style={{ marginLeft: "18px" }} />
          <div className={styles.stats}>
            <p><strong>Total Miles</strong></p>
            <p style={{ fontSize: "17px" }}>125 mi</p>
          </div>
        </div>
        <h3 style={{ marginTop: "8px", marginBottom: "2px" }}>Miles Traveled</h3>
        <div className={styles.vehicleTable}>
          <div className={styles.vehicleRow}>
            <Image src={bike} alt="Bike Icon" width={60} height={60} style={{ marginLeft: "6px" }} />
            <div className={styles.stats} style={{ marginRight: "8px" }}>
              <p className={styles.vehicleType}>Bicycle</p>
              <p className={styles.miles}>50 mi</p>
            </div>
          </div>
          <div className={styles.vehicleRow}>
            <Image src={car} alt="Car Icon" width={60} height={60} style={{ marginLeft: "6px" }} />
            <div className={styles.stats} style={{ marginRight: "10px" }}>
              <p className={styles.vehicleType}>Car</p>
              <p className={styles.miles}>30 mi</p>
            </div>
          </div>
          <div className={styles.vehicleRow}>
            <Image src={bus} alt="Bus Icon" width={60} height={60} style={{ marginLeft: "6px" }} />
            <div className={styles.stats} style={{ marginRight: "10px" }}><p className={styles.vehicleType}>Bus</p>
              <p className={styles.miles}>20 mi</p></div>
          </div>
          <div className={styles.vehicleRow}>
            <Image src={uber} alt="Uber Icon" width={60} height={60} style={{ marginLeft: "6px" }} />
            <div className={styles.stats} style={{ marginRight: "10px" }}><p className={styles.vehicleType}>Uber</p>
              <p className={styles.miles}>25 mi</p></div>
          </div>
        </div>
        <h3 style={{ marginTop: "12px", marginBottom: "0px" }}>Transit Routes</h3>
        <div className={styles.detailBlock}>
          <div className={styles.details} style={{ marginLeft: "3px" }}>
            <Image src={pin} alt="Pin Icon" width={30} height={30} style={{ marginLeft: "6px" }} />
            <p className={styles.vehicleType} >52 Bus</p>
          </div>
          <Image src={dots} alt="Dots Icon" width={50} height={60} />
          <div className={styles.details} style={{ marginLeft: "0px" }}>
            <Image src={pin} alt="Pin Icon" width={30} height={30} style={{ marginLeft: "6px" }} />
            <p className={styles.vehicleType}>35 Bus</p>
          </div>
          <Image src={dots} alt="Dots Icon" width={50} height={60}/>
          <div className={styles.details} style={{ marginLeft: "0px" }}>
            <Image src={pin} alt="Pin Icon" width={30} height={30} style={{ marginLeft: "6px" }} />
            <p className={styles.vehicleType}>R Line</p>
          </div>
        </div>
         <h3 style={{ marginTop: "12px", marginBottom: "0px" }}>Challenges</h3>
             <div className={styles.detailBlock}>
              <Image src={award} alt="Award Icon" width={110} height={110} style={{ marginLeft: "3px" }} />
              <div className={styles.details} style={{ marginLeft: "2px" }}>
                  <p className={styles.miles}>Earth Day Award</p>
                  <p className={styles.address}>awarded on 05/26/2025</p>
              <p className={styles.recommendation}>Advancing sustainability by completing 25 eco-trips!</p>
                </div>
             </div>
        <BottomBar activeTab="stats" />
      </div>
    </div>
  );
}