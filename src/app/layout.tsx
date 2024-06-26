import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "The Best Software Dev Ever",
    description: "I hate javascript 💀"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en-GB">
            <body>
                <header className={styles.socialBar}>
                    <ul>
                        <a href="https://github.com/Aw4k3/">Github</a>
                    </ul>
                    <ul>
                        <a href="https://www.linkedin.com/in/piraveen-s-091640275/">Linked In</a>
                    </ul>
                    <ul>
                        <a href="https://www.instagram.com/p.awake14/">Instagram</a>
                    </ul>
                </header>
                <main className={styles.layout}>
                    <nav className={styles.navBar}>
                        <ul>
                            <a className={styles.selectedNavItem} href="#">
                                Welcome
                            </a>
                        </ul>
                        <ul>
                            <a href="#about">About Me</a>
                        </ul>
                        <ul>
                            <a href="#skills">Skills</a>
                        </ul>
                        <ul>
                            <a href="#projects">Projects</a>
                        </ul>
                    </nav>
                    {children}
                </main>
            </body>
        </html>
    );
}
