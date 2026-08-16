import localFont from "next/font/local";
import "./globals.css";

const fraunces = localFont({
  src: "./fonts/fraunces.woff2",
  variable: "--font-fraunces",
  weight: "300 900",
  display: "swap",
});

const manrope = localFont({
  src: "./fonts/manrope.woff2",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
});

const title = "Philips 5400 Series LatteGo — Kaffeehaus-Qualität für Zuhause";
const description =
  "Philips 5400 Series LatteGo Kaffeevollautomat zum Restposten-Preis. Kostenloser Versand nach Deutschland, 2 Jahre Garantie, 14 Tage Rückgaberecht.";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: ["/images/clean-front.webp"],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/clean-front.webp"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
