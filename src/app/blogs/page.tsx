import { BLOGS } from "@/lib/blogData";
import styles from "./page.module.css";
import BlogGrid from "./BlogGrid";

export default function BlogsPage() {
    return (
        <div className={styles.pageWrapper}>
            <header className={styles.header}>
                <div className={`container ${styles.headerContainer}`}>
                    <h1 className={styles.title}>Real Estate Insights &amp; Lifestyle</h1>
                    <p className={styles.subtitle}>
                        A vibrant space where I share market trends, home buying advice, and lifestyle inspiration to help you thrive in Orange County.
                    </p>
                </div>
            </header>

            <section className={`section container`}>
                <BlogGrid blogs={BLOGS} />
            </section>
        </div>
    );
}
