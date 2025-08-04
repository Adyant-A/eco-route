import styles from "./BottomBar.module.css";
import Image from 'next/image';
import Link from 'next/link';

import favOff from '../icons/favorites-off.png';
import favOn from '../icons/favorites-on.png';
import mapsOff from '../icons/maps-off.png';
import mapsOn from '../icons/maps-on.png';
import statsOff from '../icons/stats-off.png';
import statsOn from '../icons/stats-on.png';
import settingsOff from '../icons/settings-off.png';
import settingsOn from '../icons/settings-on.png';

export default function BottomBar({ activeTab }) {
    return (
        <div className={styles.bottomBar}>
            {/* Maps tab */}
            {activeTab === "maps" ? (
                <div className={`${styles.link} ${styles.active}`}>
                    <Image src={mapsOn} alt="Maps Icon" width={30} height={30} />
                    <span className={styles.linkText}>MAPS</span>
                </div>
            ) : (
                <Link href="/maps" className={styles.link}>
                    <Image src={mapsOff} alt="Maps Icon" width={30} height={30} />
                    <span className={styles.linkText}>MAPS</span>
                </Link>
            )}
            {/* Favorites tab */}
            {activeTab === "favorites" ? (
                <div className={`${styles.link} ${styles.active}`}>
                    <Image src={favOn} alt="Favorites Icon" width={30} height={30} />
                    <span className={styles.linkText}>FAVORITES</span>
                </div>
            ) : (
                <Link href="/favorites" className={styles.link}>
                    <Image src={favOff} alt="Favorites Icon" width={30} height={30} />
                    <span className={styles.linkText}>FAVORITES</span>
                </Link>
            )}
            {/* Stats tab */}
            {activeTab === "stats" ? (
                <div className={`${styles.link} ${styles.active}`}>
                    <Image src={statsOn} alt="Stats Icon" width={30} height={30} />
                    <span className={styles.linkText}>STATS</span>
                </div>
            ) : (
                <Link href="/stats" className={styles.link}>
                    <Image src={statsOff} alt="Stats Icon" width={30} height={30} />
                    <span className={styles.linkText}>STATS</span>
                </Link>
            )}
            {/* Settings tab */}
            {activeTab === "settings" ? (
                <div className={`${styles.link} ${styles.active}`}>
                    <Image src={settingsOn} alt="Settings Icon" width={30} height={30} />
                    <span className={styles.linkText}>SETTINGS</span>
                </div>
            ) : (
                <Link href="/settings" className={styles.link}>
                    <Image src={settingsOff} alt="Settings Icon" width={30} height={30} />
                    <span className={styles.linkText}>SETTINGS</span>
                </Link>
            )}
        </div>
    );
};