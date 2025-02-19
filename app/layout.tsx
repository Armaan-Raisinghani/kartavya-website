import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/components/main-nav";
import type React from "react"; // Added import for React
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const lato = Lato({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kartavya Club",
  description: "Making a difference through dedicated service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <MainNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
