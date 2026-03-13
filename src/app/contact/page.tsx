import { Mail, Phone, MapPin } from "lucide-react";
import styles from "./page.module.css";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default function ContactPage() {
    return (
        <div className={styles.pageWrapper}>
            <header className={styles.header}>
                <div className={`container ${styles.headerContainer}`}>
                    <h1 className={styles.title}>Let&apos;s Connect</h1>
                    <p className={styles.subtitle}>
                        Whether you are buying, selling, or just curious about the Orange County real estate market, I am here to help.
                    </p>
                </div>
            </header>

            <section className={`section container`}>
                <div className={styles.grid}>

                    {/* Contact Information */}
                    <div className={styles.infoCol}>
                        <h2>Get in Touch</h2>
                        <p className={styles.infoDesc}>
                            Reach out today to schedule a free consultation or request a custom home valuation.
                        </p>

                        <div className={styles.contactMethods}>
                            <div className={styles.method}>
                                <div className={styles.iconWrapper}><Phone size={24} /></div>
                                <div>
                                    <h3>Phone</h3>
                                    <a href="tel:+17147560122" className={styles.contactLink}>(714) 756-0122</a>
                                </div>
                            </div>

                            <div className={styles.method}>
                                <div className={styles.iconWrapper}><Mail size={24} /></div>
                                <div>
                                    <h3>Email</h3>
                                    <a href="mailto:jae.beck@live.com" className={styles.contactLink}>jae.beck@live.com</a>
                                </div>
                            </div>

                            <div className={styles.method}>
                                <div className={styles.iconWrapper}><MapPin size={24} /></div>
                                <div>
                                    <h3>Office</h3>
                                    <p className={styles.address}>
                                        HomeSmart Evergreen Realty<br />
                                        27802 Vista Del Lago<br />
                                        Mission Viejo, CA 92692<br />
                                        United States
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.agentFeature}>
                            <div className={styles.agentImageWrapper}>
                                <Image src="/images/avatar.jpg" alt="Jae Beck" fill className={styles.agentImage} />
                            </div>
                            <div className={styles.agentDetails}>
                                <h4>Jae Beck</h4>
                                <span>Realtor® | DRE# 02006349</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={styles.formCol}>
                        <ContactForm />
                    </div>

                </div>
            </section>
        </div>
    );
}
