import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://umesh-portfolio-2026-enji.vercel.app"),
  title: "Umesh Chandra | Data Scientist & Founder of ExploreXAI",
  description:
    "Official portfolio of Umesh Chandra, Data Scientist, AI Developer and Founder of ExploreXAI in Haldwani, Uttarakhand, India.",
  keywords: [
    "Umesh Chandra",
    "Umesh Chandra Data Scientist",
    "Founder of ExploreXAI",
    "ExploreXAI",
    "AI Developer Haldwani",
    "Generative AI Developer",
    "vijAI Robotics",
  ],
  authors: [{ name: "Umesh Chandra", url: "/" }],
  creator: "Umesh Chandra",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    title: "Umesh Chandra | Data Scientist & Founder of ExploreXAI",
    description:
      "Data Scientist and AI Developer building practical AI products, including ExploreXAI.",
    siteName: "Umesh Chandra Portfolio",
    images: [{ url: "/umesh-new.jpg", alt: "Umesh Chandra" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Umesh Chandra | Data Scientist & Founder of ExploreXAI",
    description:
      "Official portfolio of Umesh Chandra, Data Scientist and AI Developer.",
    images: ["/umesh-new.jpg"],
  },
  robots: { index: true, follow: true },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://umesh-portfolio-2026-enji.vercel.app/#umesh-chandra",
  name: "Umesh Chandra",
  url: "https://umesh-portfolio-2026-enji.vercel.app/",
  image: "https://umesh-portfolio-2026-enji.vercel.app/umesh-new.jpg",
  jobTitle: ["Data Scientist", "AI Developer", "Founder of ExploreXAI"],
  description:
    "Umesh Chandra is a Data Scientist, AI Developer and Founder of ExploreXAI based in Haldwani, Uttarakhand, India.",
  homeLocation: {
    "@type": "Place",
    name: "Haldwani, Uttarakhand, India",
  },
  sameAs: [
    "https://github.com/Umesh1234AI-afk",
    "https://www.linkedin.com/in/umesh-chandra-660429307/",
    "https://explorexai.vercel.app/",
  ],
  knowsAbout: [
    "Data Science",
    "Machine Learning",
    "Generative AI",
    "AI Application Development",
    "Next.js",
    "Telecom Engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
