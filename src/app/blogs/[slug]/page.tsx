import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getBlogBySlug, BLOGS } from "@/lib/blogData";
import styles from "./page.module.css";
import { ArrowLeft, Calendar, Share2, Facebook, Twitter, Linkedin } from "lucide-react";

export async function generateStaticParams() {
    return BLOGS.map((blog) => ({
        slug: blog.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const blog = getBlogBySlug(resolvedParams.slug);

    if (!blog) {
        notFound();
    }

    return (
        <article className={styles.pageWrapper}>
            <div className={`container ${styles.articleContainer}`}>

                {/* Navigation & Meta */}
                <div className={styles.topNav}>
                    <Link href="/blogs" className={styles.backLink}>
                        <ArrowLeft size={16} /> All Articles
                    </Link>
                    <div className={styles.categoryBadge}>{blog.category}</div>
                </div>

                {/* Header */}
                <header className={styles.header}>
                    <h1 className={styles.title}>{blog.title}</h1>

                    <div className={styles.metaRow}>
                        <div className={styles.authorInfo}>
                            <div className={styles.authorAvatar}>
                                <Image src="/images/avatar.jpg" alt="Jae Beck" fill className={styles.avatarImage} />
                            </div>
                            <div className={styles.authorDetails}>
                                <span className={styles.authorName}>Jae Beck</span>
                                <div className={styles.publishDate}>
                                    <Calendar size={14} />
                                    <span>{blog.date}</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.shareButtons}>
                            <button className={styles.iconBtn} aria-label="Share">
                                <Share2 size={18} />
                            </button>
                            <button className={styles.iconBtn} aria-label="Share to Facebook">
                                <Facebook size={18} />
                            </button>
                            <button className={styles.iconBtn} aria-label="Share to Twitter">
                                <Twitter size={18} />
                            </button>
                            <button className={styles.iconBtn} aria-label="Share to LinkedIn">
                                <Linkedin size={18} />
                            </button>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                <figure className={styles.featuredImageWrapper}>
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        priority
                        className={styles.featuredImage}
                    />
                </figure>

                {/* Content Body */}
                {/* We use dangerouslySetInnerHTML here since we are migrating raw HTML/Markdown content from the old codebase */}
                <div
                    className={styles.contentBody}
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Author Footer Bio */}
                <div className={styles.authorBioFooter}>
                    <div className={styles.largeAvatar}>
                        <Image src="/images/avatar.jpg" alt="Jae Beck" fill className={styles.avatarImage} />
                    </div>
                    <div className={styles.bioText}>
                        <h3>Written by Jae Beck</h3>
                        <p>Jae is a trusted Realtor in Orange County with over 20 years of local experience. She combines her passion for real estate with her love of interior design to help clients see the true potential in every home.</p>
                        <Link href="/contact" className={styles.contactLink}>Contact Jae regarding your home search ➔</Link>
                    </div>
                </div>
            </div>
        </article>
    );
}
