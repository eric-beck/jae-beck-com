"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ChevronRight } from "lucide-react";
import { BlogPost } from "@/lib/blogData";
import styles from "./page.module.css";

const CATEGORIES = ["All Posts", "Real Estate Advice", "Home & Lifestyle", "Market Updates"] as const;

export default function BlogGrid({ blogs }: { blogs: BlogPost[] }) {
    const [activeCategory, setActiveCategory] = useState<string>("All Posts");

    const filtered = activeCategory === "All Posts"
        ? blogs
        : blogs.filter((b) => b.category === activeCategory);

    return (
        <>
            <div className={styles.categoryFilters}>
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={activeCategory === cat ? styles.activeFilter : styles.filter}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className={styles.grid}>
                {filtered.map((blog) => (
                    <article key={blog.slug} className={styles.card}>
                        <Link href={`/blogs/${blog.slug}`} className={styles.imageLink}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className={styles.image}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className={styles.categoryBadge}>{blog.category}</div>
                            </div>
                        </Link>

                        <div className={styles.content}>
                            <div className={styles.meta}>
                                <Calendar size={14} />
                                <span>{blog.date}</span>
                            </div>

                            <h2 className={styles.blogTitle}>
                                <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                            </h2>

                            <p className={styles.blogExcerpt}>{blog.excerpt}</p>

                            <Link href={`/blogs/${blog.slug}`} className={styles.readMore}>
                                Read Article <ChevronRight size={16} />
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </>
    );
}
