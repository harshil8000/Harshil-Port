import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ScrollProgress from "./components/ui/scroll-progress";
import ThemeToggle from "./components/ui/theme-toggle";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
import Head from "next/head"; // Import Head from next/head

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harshil Barad - Full Stack Developer | AI & Tech Innovation Portfolio",
  description:
    "Harshil Barad: Expert full-stack developer specializing in AI, insurance tech, policy management systems, and CRM solutions. Passionate about creating innovative web applications with modern technologies.",
  keywords: [
    "Harshil Barad",
    "Full Stack Developer",
    "AI Developer",
    "Insurance Technology",
    "Policy Management",
    "Fuel Station CRM",
    "React Developer",
    "Next.js",
    "Node.js",
    "JavaScript",
    "Software Engineer",
    "Web Development",
    "Tech Portfolio"
  ],
  authors: [{ name: "Harshil Barad" }],
  creator: "Harshil Barad",
  publisher: "Harshil Barad",
  openGraph: {
    title: "Harshil Barad - Full Stack Developer | AI & Tech Innovation",
    description: "Expert full-stack developer specializing in AI, insurance tech, and CRM solutions. Explore my portfolio of innovative web applications.",
    url: "https://harshilbarad.dev",
    siteName: "Harshil Barad Portfolio",
    images: [
      {
        url: "/screen.png",
        width: 1200,
        height: 630,
        alt: "Harshil Barad - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshil Barad - Full Stack Developer | AI & Tech Innovation",
    description: "Expert full-stack developer specializing in AI, insurance tech, and CRM solutions.",
    images: ["/screen.png"],
    creator: "@harshil8000",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google verification code
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>
          {/* Primary Meta Tags */}
          <title>{metadata.title}</title>
          <meta name="title" content={metadata.title} />
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords.join(", ")} />
          <meta name="author" content="Harshil Barad" />

          {/* SEO Meta Tags */}
          <meta name="robots" content="index, follow" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="7 days" />
          <meta name="distribution" content="web" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://harshilbarad.dev" />
          <meta property="og:title" content={metadata.title} />
          <meta property="og:description" content={metadata.description} />
          <meta property="og:image" content="/screen.png" />
          <meta property="og:site_name" content="Harshil Barad Portfolio" />
          <meta property="og:locale" content="en_US" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://harshilbarad.dev" />
          <meta name="twitter:title" content={metadata.title} />
          <meta name="twitter:description" content={metadata.description} />
          <meta name="twitter:image" content="/screen.png" />
          <meta name="twitter:creator" content="@harshil8000" />

          {/* Favicon */}
          <link rel="icon" href="/favicon.jpg" type="image/x-icon" />
          <link rel="icon" href="/favicon.jpg" type="image/jpg" />
          <link rel="apple-touch-icon" href="/favicon.jpg" />

          {/* Canonical URL */}
          <link rel="canonical" href="https://harshilbarad.dev" />

          {/* Enhanced Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Harshil Barad",
                "jobTitle": "Full Stack Developer",
                "description": "Expert full-stack developer specializing in AI, insurance technology, policy management systems, and CRM solutions",
                "url": "https://harshilbarad.dev",
                "image": "/screen.png",
                "sameAs": [
                  "https://www.linkedin.com/in/barad-harshil/",
                  "https://github.com/harshil8000",
                  "https://twitter.com/harshil8000",
                  "https://leetcode.com/harshil8000"
                ],
                "knowsAbout": [
                  "JavaScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Python",
                  "AI/ML",
                  "Insurance Technology",
                  "Policy Management",
                  "CRM Systems",
                  "Full Stack Development"
                ],
                "hasOccupation": {
                  "@type": "Occupation",
                  "name": "Full Stack Developer",
                  "occupationLocation": {
                    "@type": "City",
                    "name": "Surat",
                    "addressRegion": "Gujarat",
                    "addressCountry": "India"
                  }
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-800065038",
                  "email": "baradharshil00@gmail.com",
                  "contactType": "Professional"
                }
              }),
            }}
          />

          {/* Additional Meta Tags */}
          <meta name="theme-color" content="#0d1224" />
          <meta name="msapplication-TileColor" content="#0d1224" />
          <meta name="apple-mobile-web-app-title" content="Harshil Barad" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        </Head>

        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white pt-16 lg:pt-20">
          <Navbar />
          <ScrollProgress />
          <ThemeToggle />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
