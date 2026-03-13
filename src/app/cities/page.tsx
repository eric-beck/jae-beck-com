import Link from "next/link";
import Image from "next/image";
import { CITIES } from "@/lib/data";
import styles from "./page.module.css";
import { ArrowRight, Map, ChevronRight } from "lucide-react";

export default function CitiesPage() {
    const parentCities = CITIES.filter(c => !c.parentSlug);

    return (
        <div className={styles.pageWrapper}>
            <header className={styles.header}>
                <div className={`container ${styles.headerContainer}`}>
                    <div className={styles.headerIcon}>
                        <Map size={48} />
                    </div>
                    <h1 className={styles.title}>Orange County Area Guide</h1>
                    <p className={styles.subtitle}>
                        Explore the rich history, local amenities, and real estate market of the diverse communities across Orange County, California.
                    </p>
                </div>
            </header>

            <section className={`section container`}>
                <div className={styles.grid}>
                    {parentCities.map((city) => {
                        const subCommunities = CITIES.filter(c => c.parentSlug === city.slug);

                        return (
                            <div key={city.slug} className={styles.cityGroup}>
                                <Link href={`/cities/${city.slug}`} className={styles.card}>
                                    <div className={styles.imageWrapper}>
                                        <Image
                                            src={city.image}
                                            alt={city.name}
                                            fill
                                            className={styles.image}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                    <div className={styles.content}>
                                        <h2 className={styles.cityName}>{city.name}</h2>
                                        <p className={styles.cityIntro}>{city.intro}</p>
                                        <div className={styles.action}>
                                            View City Guide <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </Link>

                                {subCommunities.length > 0 && (
                                    <div className={styles.subCommunities}>
                                        <h3 className={styles.subTitle}>Featured Neighborhoods</h3>
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
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
