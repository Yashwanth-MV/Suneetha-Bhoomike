import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/lib/SmoothScroll";
import Chatbot from "@/components/Chatbot";
export const metadata: Metadata = {
  title: "Suneetha Bhoomike — School of Music, Mysuru",
  description: "Discover your musical journey with Suneetha Bhoomike, a premier school of music in Mysuru founded by Bhoomika Koundinya. Offering classes in Carnatic vocal, Sugama Sangeetha, Piano, Guitar, Violin, and Drums.",
  keywords: ["Suneetha Bhoomike", "Bhoomika Koundinya", "School of Music Mysuru", "Carnatic Music Classes Mysuru", "Sugama Sangeetha Mysuru", "Vocal Music Classes Mysuru", "Music Learning Community Mysuru", "Singing Classes Mysuru"],
  authors: [{ name: "Suneetha Bhoomike" }],
  creator: "Suneetha Bhoomike",
  publisher: "Suneetha Bhoomike",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Suneetha Bhoomike",
    title: "Suneetha Bhoomike — School of Music, Mysuru",
    description: "Join a community of passionate learners. Personalized training for children and adults in Carnatic vocal, devotional music, and instruments.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suneetha Bhoomike — School of Music, Mysuru",
    description: "Join a community of passionate learners. Personalized training for children and adults in Carnatic vocal, devotional music, and instruments.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          {children}
          <Chatbot />
        </SmoothScroll>
      </body>
    </html>
  );
}
