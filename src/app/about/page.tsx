import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Globe, Heart, Home, MapPin, MessageCircle } from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "About Jae Beck | Orange County Real Estate Expert",
    description:
        "Meet Jae Beck, REALTOR® with HomeSmart Evergreen Realty. Over two decades in Orange County, fluent in Korean, and committed to honest, personalized real estate guidance.",
};

const VALUES = [
    {
        icon: Heart,
        title: "Approachable & Honest",
        text: "Real estate decisions are personal. Jae takes pride in being easy to talk to, straightforward about the market, and deeply committed to her clients' success.",
    },
    {
        icon: Home,
        title: "An Eye for Potential",
        text: "Jae's passion for real estate stems from her love of interior design, which helps her see the true potential in every home — for buyers and sellers alike.",
    },
    {
        icon: Globe,
        title: "Cultural Insight",
        text: "Fluent in Korean, Jae brings cultural understanding and a personalized approach to serving Orange County's diverse communities.",
    },
    {
        icon: MapPin,
        title: "Local Knowledge",
        text: "Having lived in Orange County for more than two decades, Jae knows its beach towns, school districts, and neighborhoods from experience — not a database.",
    },
];

export default function AboutPage() {
    return (
        <div className={styles.pageWrapper}>
            <header className={styles.header}>
                <div className={`container ${styles.headerContainer}`}>
                    <h1 className={styles.title}>Meet Jae Beck</h1>
                    <p className={styles.subtitle}>
                        Your trusted Orange County real estate expert.
                    </p>
                </div>
            </header>

            <section className={`section container`}>
                <div className={styles.bioGrid}>
                    <div className={styles.bioImageCol}>
                        <div className={styles.bioImageWrapper}>
                            <Image
                                src="/images/avatar.jpg"
                                alt="Jae Beck, Realtor"
                                fill
                                priority
                                className={styles.bioImage}
                            />
                        </div>
                        <div className={styles.credentialsCard}>
                            <h3>Credentials</h3>
                            <ul className={styles.credentialsList}>
                                <li><Award size={18} /> REALTOR® | DRE# 02006349</li>
                                <li><Home size={18} /> HomeSmart Evergreen Realty</li>
                                <li><MapPin size={18} /> Mission Viejo, CA</li>
                                <li><MessageCircle size={18} /> English &amp; Korean</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.bioContent}>
                        <h2>About Jae</h2>
                        <p>
                            Orange County is a vibrant locale, renowned for its picturesque beach towns,
                            world-class entertainment, and top-rated schools. Having lived here for over two
                            decades, Jae possesses a deep understanding of the area and can guide you to the
                            perfect location that meets your unique needs — whether that&apos;s a coastal city
                            like Dana Point or San Clemente, a master-planned community like Mission Viejo or
                            Irvine, or an equestrian enclave like Nellie Gail Ranch.
                        </p>
                        <p>
                            Jae&apos;s passion for real estate stems from her love of interior design, which
                            allows her to see the true potential in every home. Fluent in Korean, she brings
                            cultural insight and a personalized approach to serve a diverse range of clients.
                            She takes pride in being approachable, honest, and deeply committed to her
                            clients&apos; success.
                        </p>
                        <p>
                            As a REALTOR® with HomeSmart Evergreen Realty, Jae serves buyers and sellers across
                            Orange County with an emphasis on the South County communities she calls home. From
                            first consultations and home valuations to negotiation and closing, she guides every
                            step personally.
                        </p>

                        <div className={styles.valuesGrid}>
                            {VALUES.map((value) => (
                                <div key={value.title} className={styles.valueCard}>
                                    <div className={styles.valueIcon}><value.icon size={24} /></div>
                                    <h3>{value.title}</h3>
                                    <p>{value.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.ctaBanner}>
                    <h3>Ready to make a move in Orange County?</h3>
                    <p>Schedule a free consultation or request a home valuation — Jae would love to hear from you.</p>
                    <Link href="/contact" className={styles.ctaButton}>
                        Contact Jae
                    </Link>
                </div>
            </section>
        </div>
    );
}
