import styles from "../page.module.css";
import BottomBar from '../components/BottomBar';
import Image from 'next/image';
import Link from 'next/link';

import logout from '../icons/logout.png';
import house from '../images/favImages/house.png';
import pencil from '../images/favImages/pencil.png';
import school from '../images/favImages/school.png';
import coffee from '../images/favImages/coffee.png';
import park from '../images/favImages/park.png';

import { Button } from '@heroui/button';


export default function Favorites() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>FAVORITES</h1>
        <hr className={styles.seperator}/>
        <Button className={styles.homeButton}><Link href="/"> <Image src={logout} alt="Home Icon" width={30} height={30} /></Link></Button>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <Button className={[styles.favButton, styles.clicked].join(' ')}><Link href="/favorites">Places</Link></Button>
          <Button className={styles.favButton}><Link href="/transportation">Transportation</Link></Button>
        </div>
        <h3>My Places</h3>
        <div className={styles.infoBlock}>
          <Image src={house} alt="House Icon" width={55} height={55} style={{marginLeft: "10px"}}/>
          <p><strong>HOME</strong> <br></br>1234 Crescent Avenue,  <br></br>San Ramon, CA 94582</p>
          <Image src={pencil} alt="House Icon" width={20} height={20} />
        </div>
         <div className={styles.detailBlock} style={{position: "relative"}}>
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
            <Image src={school} alt="House Icon" width={70} height={70} style={{marginLeft: "6px"}}/>
             <div className={styles.details}>
              <p className={styles.location}>Dougherty Valley <br></br>High School</p>
              <p className={styles.recommendation}>Bicycle recommended</p>
              <p className={styles.address}>10550 Albion Rd,<br></br> San Ramon, CA 94582</p>
             </div>
         </div>
         <div className={styles.detailBlock} style={{position: "relative"}}>
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
              <Image src={coffee} alt="House Icon" width={70} height={70} style={{marginLeft: "6px"}}/>
             <div className={styles.details}>
              <p className={styles.location}>Peet's Coffee</p>
              <p className={styles.recommendation}>Bus recommended</p>
              <p className={styles.address}>11000 Bollinger Canyon Rd Suite,<br></br> San Ramon, CA 94582</p>
             </div>
         </div>
         <div className={styles.detailBlock} style={{position: "relative"}}>
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
              <Image src={park} alt="House Icon" width={70} height={70} style={{marginLeft: "6px"}}/>
             <div className={styles.details}>
              <p className={styles.location}>Rancho San Ramon Community Park</p>
              <p className={styles.recommendation}>Car recommended</p>
              <p className={styles.address}>1998 Rancho Park Loop,<br></br> San Ramon, CA 94582</p>
             </div>
         </div>
         <Button className={styles.button}><Link href="">Add Place</Link></Button>
        <BottomBar activeTab="favorites" />
      </div>
    </div>
  );
}