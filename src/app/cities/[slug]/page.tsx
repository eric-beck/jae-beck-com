import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getCityBySlug, CITIES } from "@/lib/data";
import styles from "./page.module.css";
import { ArrowLeft, Home, MapPin, Users, DollarSign, ChevronRight } from "lucide-react";

export async function generateStaticParams() {
    return CITIES.map((city) => ({
        slug: city.slug,
    }));
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const city = getCityBySlug(resolvedParams.slug);

    if (!city) {
        notFound();
    }

    const parentCity = city.parentSlug ? getCityBySlug(city.parentSlug) : null;
    const subCommunities = CITIES.filter(c => c.parentSlug === city.slug);

    return (
        <article className={styles.pageWrapper}>
            <header className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src={city.image}
                        alt={city.name}
                        fill
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay} />
                </div>
                <div className={`container ${styles.heroContent}`}>
                    {parentCity ? (
                        <Link href={`/cities/${parentCity.slug}`} className={styles.backLink}>
                            <ArrowLeft size={16} /> Back to {parentCity.name}
                        </Link>
                    ) : (
                        <Link href="/cities" className={styles.backLink}>
                            <ArrowLeft size={16} /> Back to Communities
                        </Link>
                    )}
                    <h1 className={styles.title}>{city.name}, California</h1>
                    <p className={styles.subtitle}>{city.intro}</p>
                </div>
            </header>

            <section className={`container ${styles.mainContent}`}>
                <div className={styles.grid}>
                    {/* Main Column */}
                    <div className={styles.primaryCol}>
                        <div className={styles.contentSection}>
                            <h2>History</h2>
                            <p>{city.history}</p>
                        </div>

                        <div className={styles.contentSection}>
                            <h2>Things to do</h2>
                            <p>{city.thingsToDo}</p>
                        </div>

                        {subCommunities.length > 0 && (
                            <div className={styles.contentSection}>
                                <h2>Featured Neighborhoods</h2>
                                <div className={styles.subGrid}>
                                    {subCommunities.map(sub => (
                                        <Link href={`/cities/${sub.slug}`} key={sub.slug} className={styles.subCard}>
                                            <span className={styles.subCardName}>{sub.name}</span>
                                            <ChevronRight size={16} />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className={styles.ctaBanner}>
                            <h3>Looking to move to {city.name}?</h3>
                            <p>Contact Jae Beck today to find your dream home in this amazing community.</p>
                            <Link href="/contact" className={styles.ctaButton}>
                                Schedule a Consultation
                            </Link>
                        </div>
                    </div>

                    {/* Sidebar / Demographics */}
                    <aside className={styles.sidebar}>
                        <div className={styles.statsCard}>
                            <h3>At a Glance</h3>

                            <div className={styles.statItem}>
                                <div className={styles.statIcon}><Users size={20} /></div>
                                <div className={styles.statData}>
                                    <span className={styles.statLabel}>Population</span>
                                    <span className={styles.statValue}>{city.demographics.population}</span>
                                </div>
                            </div>

                            <div className={styles.statItem}>
                                <div className={styles.statIcon}><DollarSign size={20} /></div>
                                <div className={styles.statData}>
                                    <span className={styles.statLabel}>Median Income</span>
                                    <span className={styles.statValue}>{city.demographics.medianIncome}</span>
                                </div>
                            </div>

                            <div className={styles.statItem}>
                                <div className={styles.statIcon}><Home size={20} /></div>
                                <div className={styles.statData}>
                                    <span className={styles.statLabel}>Median Home Value</span>
                                    <span className={styles.statValue}>{city.demographics.medianHomeValue}</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.agentCard}>
                            <div className={styles.agentImageWrapper}>
                                <Image src="/images/avatar.jpg" alt="Jae Beck" fill className={styles.agentImage} />
                            </div>
                            <h4>Jae Beck</h4>
                            <p>Realtor® | DRE# 02006349</p>
                            <Link href="/contact" className={styles.contactAgentBtn}>Get in Touch</Link>
                        </div>
                    </aside>
                </div>
            </section>
        </article>
    );
}
