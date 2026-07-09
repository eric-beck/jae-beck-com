'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/cities', label: 'Communities' },
    { href: '/blogs', label: 'Insights' },
    { href: '/about', label: 'About' },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logoLink} onClick={closeMenu}>
                    <div className={styles.logoText}>
                        <span className={styles.logoPrimary}>JAE BECK</span>
                        <span className={styles.logoSecondary}>REALTOR</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className={styles.desktopNav}>
                    <ul className={styles.navLinks}>
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className={styles.navLink}>{link.label}</Link>
                            </li>
                        ))}
                        <li><Link href="/contact" className={styles.navLinkContact}>Contact Jae</Link></li>
                    </ul>
                </nav>

                {/* Mobile Menu Icon */}
                <button
                    className={styles.mobileMenuBtn}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Panel */}
            {menuOpen && (
                <nav className={styles.mobileNav} key={pathname}>
                    <ul className={styles.mobileNavLinks}>
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className={styles.mobileNavLink} onClick={closeMenu}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="/contact" className={styles.mobileNavContact} onClick={closeMenu}>
                                Contact Jae
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
