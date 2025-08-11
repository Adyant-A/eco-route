import styles from "../page.module.css";
import BottomBar from '../components/BottomBar';
import Image from 'next/image';
import Link from 'next/link';

import logout from '../icons/logout.png';
import bicycle from '../images/favImages/bicycle.png';
import bus from '../images/favImages/bus.png';
import car from '../images/favImages/car.png';
import uber from '../images/favImages/uber.png';

import { Button } from '@heroui/button';


export default function Transportation() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>FAVORITES</h1>
        <hr className={styles.seperator} />
        <Button className={styles.homeButton}><Link href="/"> <Image src={logout} alt="Home Icon" width={30} height={30} /></Link></Button>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <Button className={styles.favButton}><Link href="/favorites">Places</Link></Button>
          <Button className={[styles.favButton, styles.clicked].join(' ')}><Link href="">Transportation</Link></Button>
        </div>
        <h3>My Transportation</h3>
        <div className={styles.detailBlock} style={{ position: "relative" }}>
          <span
            style={{
              position: "absolute",
              top: "2px",
              right: "10px",
              cursor: "pointer",
              fontWeight: "bold",
              color: "#999",
              fontSize: "20px",
            }}
          >
            &#10005;
          </span>
          <Image src={bicycle} alt="Bicycle Icon" width={70} height={70} style={{ marginLeft: "6px" }} />
          <div className={styles.details}>
            <p className={styles.location}>Bicycle</p>
            <p className={styles.recommendation}>Efficient</p>
            <p className={styles.address}>Use for shorter distances<br />&#40;&lt;15 mi&#41;</p>
          </div>
        </div>
        <div className={styles.detailBlock} style={{ position: "relative" }}>
          <span
            style={{
              position: "absolute",
              top: "2px",
              right: "10px",
              cursor: "pointer",
              fontWeight: "bold",
              color: "#999",
              fontSize: "20px",
            }}
          >
            &#10005;
          </span>
          <Image src={car} alt="House Icon" width={70} height={70} style={{ marginLeft: "6px" }} />
          <div className={styles.details}>
            <p className={styles.location}>Tesla Model Y</p>
            <p className={styles.recommendation}>Electric</p>
            <p className={styles.address}>Use for medium to long distances<br></br>&#40;20+ mi&#41;</p>
          </div>
        </div>
        <div className={styles.detailBlock} style={{ position: "relative" }}>
           <span
            style={{
              position: "absolute",
              top: "2px",
              right: "10px",
              cursor: "pointer",
              fontWeight: "bold",
              color: "#999",
              fontSize: "20px",
            }}
          >
            &#10005;
          </span>
          <Image src={bus} alt="House Icon" width={70} height={70} style={{ marginLeft: "6px" }} />
          <div className={styles.details}>
            <p className={styles.location}>AC Transit</p>
            <p className={styles.recommendation}>Efficient, Shared</p>
            <p className={styles.address}>Use for short to medium distances<br></br>&#40;&lt;2-15 mi&#41;</p>
          </div>
        </div>
        <div className={styles.detailBlock} style={{ position: "relative" }}>
           <span
            style={{
              position: "absolute",
              top: "2px",
              right: "10px",
              cursor: "pointer",
              fontWeight: "bold",
              color: "#999",
              fontSize: "20px",
            }}
          >
            &#10005;
          </span>
          <Image src={uber} alt="House Icon" width={70} height={70} style={{ marginLeft: "6px" }} />
          <div className={styles.details}>
            <p className={styles.location}>Uber</p>
            <p className={styles.badReccomendation}>Inefficent, Solo</p>
            <p className={styles.address}>Use only if neccesary</p>
          </div>
        </div>
        <Button className={styles.button}><Link href="">Add Transportation</Link></Button>
        <BottomBar activeTab="favorites" />
      </div>
    </div>
  );
}