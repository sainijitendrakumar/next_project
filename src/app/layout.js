import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import Popunder from "@/Components/Adsterra/Popunder/Popunder";
import Socialbar from "@/Components/Adsterra/Socialbar/Socialbar";
import Head from "next/head";
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="xoVUFEZx273sw_m6GyBqFVGg_ogO0ua6jF5d50SZOIc" />
        </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Socialbar />
        <Popunder />
        <Navbar />
        {children}
        <Footer />
      </body>
       <GoogleAnalytics gaId="G-X4PY6D6N29" />
    </html>
  );
}
