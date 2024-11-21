import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
import Head from "next/head"; // Import Head from next/head

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Harshil Barad - Software Developer",
  description:
    "This is the portfolio of Harshil Barad, a full stack developer and self-taught programmer. I specialize in building web applications and love collaborating with others to solve complex challenges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>
          {/* Basic SEO Tags */}
          <meta name="description" content={metadata.description} />
          <meta name="robots" content="index, follow" />

          {/* Title for Search Engine Results */}
          <title>{metadata.title}</title>

          {/* Open Graph (for social media sharing) */}
          <meta property="og:title" content={metadata.title} />
          <meta property="og:description" content={metadata.description} />
          <meta property="og:image" content="/path-to-image.jpg" /> {/* Use a valid image URL */}
          <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} /> {/* Set the site URL */}
          <meta property="og:type" content="website" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metadata.title} />
          <meta name="twitter:description" content={metadata.description} />
          <meta name="twitter:image" content="/path-to-image.jpg" /> {/* Use a valid image URL */}

          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.jpg" type="image/png" />

          {/* Canonical URL to avoid duplicate content */}
          <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL} />

          {/* Structured Data - JSON-LD for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Harshil Barad",
                jobTitle: "Software Developer",
                url: process.env.NEXT_PUBLIC_SITE_URL,
                sameAs: [
                  "https://www.linkedin.com/in/barad-harshil/?originalSubdomain=in",
                  "https://github.com/harshil8000",
                ],
                image: "/screen.png", // A profile image URL
              }),
            }}
          />

          {/* Meta Tags for Apple Devices */}
          <meta name="apple-mobile-web-app-title" content="Harshil Barad" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />

          {/* Mobile App Support (Web Manifest) */}
          <link rel="manifest" href="/manifest.json" />
        </Head>

        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
