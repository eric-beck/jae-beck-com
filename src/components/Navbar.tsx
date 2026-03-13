import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
    // Mobile menu state can be added here once we turn it into a client component.
    // For now, keeping it simple as a server/static component skeleton.

    return (
        <header className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logoLink}>
                    <div className={styles.logoText}>
                        <span className={styles.logoPrimary}>JAE BECK</span>
                        <span className={styles.logoSecondary}>REALTOR</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className={styles.desktopNav}>
                    <ul className={styles.navLinks}>
                        <li><Link href="/" className={styles.navLink}>Home</Link></li>
                        <li><Link href="/cities" className={styles.navLink}>Communities</Link></li>
                        <li><Link href="/blogs" className={styles.navLink}>Insights</Link></li>
                        <li><Link href="/contact" className={styles.navLinkContact}>Contact Jae</Link></li>
                    </ul>
                </nav>

                {/* Mobile Menu Icon */}
                <button className={styles.mobileMenuBtn} aria-label="Toggle menu">
                    <Menu size={28} />
                </button>
            </div>
        </header>
    );
}
