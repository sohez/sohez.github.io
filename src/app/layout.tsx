import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "SAYYED SOHEL",
  url: "https://sohez.github.io/",
  image: "https://sohez.github.io/images/hero/sohel-sayyed-image.webp",
  sameAs: [
    "https://www.instagram.com/sohel_sayyed.dev",
    "https://github.com/sohez",
    "https://www.linkedin.com/in/sohez/",
  ],
  jobTitle: "Founder & Software Developer",
  worksFor: {
    "@type": "Organization",
    name: "Sohezsoft",
    url: "https://sohez.github.io/",
  },
  description:
    "Sayyed Sohel — Full-Stack Web & Android Developer, Founder of Sohezsoft. I build fast, modern, and user-focused digital experiences that stand out.",
};

export const metadata: Metadata = {
  title: "Sohez: Official Site of Sayyed Sohel",
  description:
    "Sayyed Sohel — Full-Stack Web & Android Developer, Founder of Sohezsoft. I build fast, modern, and user-focused digital experiences that stand out.",
  keywords: [
    "Sohez: Official Site of Sayyed Sohel",
    "sayyed sohel",
    "sohez",
    "Sohez Official",
    "Portfolio website",
    "Developer website",
    "Websites Development",
    "Android Development",
  ],
  metadataBase: new URL("https://sohez.github.io/"),
  alternates: {
    canonical: "https://sohez.github.io/",
  },
  openGraph: {
    type: "website",
    url: "https://sohez.github.io/",
    title: "Sohez: Official Site of Sayyed Sohel",
    description:
      "Sayyed Sohel — Full-Stack Web & Android Developer, Founder of Sohezsoft. I build fast, modern, and user-focused digital experiences that stand out.",
    siteName: "sohez.github.io",
    images: [
      {
        url: "https://sohez.github.io/images/hero/sohel-sayyed-image.webp",
        width: 800,
        height: 800,
        alt: "Sayyed Sohel",
      },
    ],
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "bu-25FFf4PhQHh1K0g0TkBl234K940ET9TRibw34ExM",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Sohez",
  },
  icons: {
    icon: "https://sohez.github.io/images/hero/sohel-sayyed-image.webp",
    apple: "https://sohez.github.io/images/hero/sohel-sayyed-image.webp",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1117",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased grid-background`}
      >
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
