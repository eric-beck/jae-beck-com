"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import styles from "./page.module.css";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
    const [status, setStatus] = useState<FormStatus>("idle");

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const res = await fetch("https://formspree.io/f/xwpkdjlq", {
                method: "POST",
                body: data,
                headers: { Accept: "application/json" },
            });

            if (res.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }

    if (status === "success") {
        return (
            <div className={styles.formCard}>
                <div className={styles.successMessage}>
                    <CheckCircle size={48} />
                    <h2>Message Sent!</h2>
                    <p>Thank you for reaching out. Jae will get back to you shortly.</p>
                    <button
                        onClick={() => setStatus("idle")}
                        className={styles.submitButton}
                    >
                        Send Another Message
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.formCard}>
            <h2>Send a Message</h2>

            {status === "error" && (
                <div className={styles.errorMessage}>
                    <AlertCircle size={18} />
                    <span>Something went wrong. Please try again or email Jae directly.</span>
                </div>
            )}

            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="Jane Doe" required className={styles.input} />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="jane@example.com" required className={styles.input} />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number (Optional)</label>
                    <input type="tel" id="phone" name="phone" placeholder="(555) 000-0000" className={styles.input} />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="interest">I am interested in...</label>
                    <select id="interest" name="interest" className={styles.select}>
                        <option value="buying">Buying a home</option>
                        <option value="selling">Selling a home</option>
                        <option value="valuation">Home Valuation</option>
                        <option value="other">Other Inquiry</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={5} placeholder="How can I help you?" required className={styles.textarea}></textarea>
                </div>

                <button type="submit" className={styles.submitButton} disabled={status === "submitting"}>
                    <Send size={18} />
                    {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
            </form>
        </div>
    );
}
