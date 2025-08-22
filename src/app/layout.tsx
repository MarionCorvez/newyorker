import type { Metadata } from "next";
import Neutraface from "next/font/local";
import TNYAdobeCaslonPro from "next/font/local";
import IrvinHeadingPro from "next/font/local";

import "@/styles/globals.scss";

import Header from "@/partials/Header";
import Footer from "@/partials/Footer";
import CookieBanner from "@/partials/CookieBanner";

const neutraface = Neutraface({
  src: "../../public/fonts/neutraface-newyorker.woff2",
  variable: "--f-neutraface",
  display: "swap",
  weight: "400",
  fallback: ["Helvetica Neue", "arial"],
});

const tnyiadobe = TNYAdobeCaslonPro({
  src: "../../public/fonts/tny-adobe-caslon-pro-regular.woff2",
  variable: "--f-tny",
  display: "swap",
  weight: "400",
  fallback: ["Times New Roman", "times"],
});

const irvinheading = IrvinHeadingPro({
  src: "../../public/fonts/irvin-heading.woff2",
  variable: "--f-irvin",
  display: "swap",
  weight: "400",
  fallback: ["Helvetica Neue", "arial"],
});

export const metadata: Metadata = {
  title: "The New Yorker",
  description: "Work project unrelated to The New Yorker creators",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${neutraface.variable} ${tnyiadobe.variable} ${irvinheading.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <CookieBanner />
        <Footer />
      </body>
    </html>
  );
}
