import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.footerBrand}>
                    <div className={styles.logoText}>
                        <span className={styles.logoPrimary}>JAE BECK</span>
                        <span className={styles.logoSecondary}>REALTOR®</span>
                    </div>
                    <p className={styles.license}>DRE #02006349</p>
                    <p className={styles.brokerage}>HomeSmart Evergreen Realty</p>
                </div>

                <div className={styles.footerLinksGrid}>
                    <div className={styles.linkColumn}>
                        <h4 className={styles.columnTitle}>Explore</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/cities">Orange County Guide</Link></li>
                            <li><Link href="/blogs">Real Estate Insights</Link></li>
                        </ul>
                    </div>

                    <div className={styles.linkColumn}>
                        <h4 className={styles.columnTitle}>Connect</h4>
                        <ul className={styles.linkList}>
                            <li><a href="https://www.facebook.com/jae.sook.beck" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="https://www.linkedin.com/in/jaebeck/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="https://www.pinterest.com/jae_beck/" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
                            <li><Link href="/contact">Contact Jae</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <div className={`container ${styles.bottomContainer}`}>
                    <p>&copy; {new Date().getFullYear()} Jae Beck Real Estate. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
