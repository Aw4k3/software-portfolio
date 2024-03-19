import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <nav>
          <ul>
            <a href="#">Welcome</a>
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
        </nav> */}
        {/* <hr /> */}
        {children}
      </body>
    </html>
  );
}
