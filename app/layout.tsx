// Island Burgers & Bites — Root Layout
import type { Metadata } from "next";
import { Bebas_Neue, Nunito } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Island Burgers & Bites | Carolina Beach, NC",
  description:
    "NC's #1 Cheeseburger. Hand-pattied smash burgers, Philly cheesesteaks, and handspun milkshakes in Carolina Beach. Order online for faster pickup.",
  keywords: [
    "best burger Carolina Beach NC",
    "Island Burgers & Bites",
    "smash burger Wilmington NC",
    "Carolina Beach restaurants",
    "order online Carolina Beach",
  ],
  openGraph: {
    title: "Island Burgers & Bites | Carolina Beach, NC",
    description:
      "NC's #1 Cheeseburger. Hand-pattied smash burgers made fresh since 2017.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${nunito.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
