import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, MapPin } from "lucide-react";
import styles from "./page.module.css";

const FEATURED_CITIES = [
  { name: "Laguna Hills", image: "/images/laguna-hills.jpg", slug: "laguna-hills" },
  { name: "Laguna Niguel", image: "/images/laguna-niguel.jpg", slug: "laguna-niguel" },
  { name: "Irvine", image: "/images/irvine.jpg", slug: "irvine" },
  { name: "Mission Viejo", image: "/images/mission-viejo.jpg", slug: "mission-viejo" },
];

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="/images/bg.jpg"
            alt="Orange County Real Estate"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>
            Welcome to Your Next Home
          </h1>
          <p className={styles.heroSubtitle}>
            Expert real estate guidance in Orange County with Jae Beck.
          </p>

          <div className={styles.searchBar}>
            <MapPin className={styles.searchIcon} size={20} />
            <input
              type="text"
              placeholder="Search by city, neighborhood, or zip..."
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>
              <Search size={20} />
              <span>Search</span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Cities Section */}
      <section className={`section container`}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>Explore Orange County</h2>
            <p className={styles.sectionDescription}>
              Discover the rich history, local schools, and unique lifestyle of our featured communities.
            </p>
          </div>
          <Link href="/cities" className={styles.viewAllLink}>
            View All Cities <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.citiesGrid}>
          {FEATURED_CITIES.map((city) => (
            <Link href={`/cities/${city.slug}`} key={city.slug} className={styles.cityCard}>
              <div className={styles.cityImageWrapper}>
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className={styles.cityImage}
                />
                <div className={styles.cityOverlay} />
              </div>
              <div className={styles.cityContent}>
                <h3 className={styles.cityName}>{city.name}</h3>
                <span className={styles.cityAction}>Explore <ArrowRight size={14} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Agent Bio Section */}
      <section className={styles.bioSection}>
        <div className={`container ${styles.bioContainer}`}>
          <div className={styles.bioImageWrapper}>
            <Image
              src="/images/avatar.jpg"
              alt="Jae Beck, Realtor"
              fill
              className={styles.bioImage}
            />
            <div className={styles.experienceBadge}>
              <span className={styles.badgeNumber}>20+</span>
              <span className={styles.badgeText}>Years in OC</span>
            </div>
          </div>

          <div className={styles.bioContent}>
            <h2 className={styles.bioTitle}>Meet Jae Beck</h2>
            <h3 className={styles.bioSubtitle}>Your Trusted Orange County Real Estate Expert</h3>

            <p className={styles.bioText}>
              Orange County is a vibrant locale, renowned for its picturesque beach towns, world-class entertainment, and top-rated schools. Having lived here for over two decades, I possess a deep understanding of the area and can guide you to the perfect location that meets your unique needs.
            </p>
            <p className={styles.bioText}>
              My passion for real estate stems from my love of interior design, which allows me to see the true potential in every home. Fluent in Korean, I bring cultural insight and a personalized approach to serve a diverse range of clients. I take pride in being approachable, honest, and deeply committed to my clients&apos; success.
            </p>

            <div className={styles.bioActions}>
              <Link href="/contact" className={styles.primaryButton}>
                Let&apos;s Work Together
              </Link>
              <Link href="/about" className={styles.secondaryButton}>
                Read Full Bio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
