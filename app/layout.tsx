import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LOLYPOP — Building for the Internet's Wild Side",
  description: "LOLYPOP helps memecoins, betting brands, and internet-native projects stand out, grow, and convert.",
  metadataBase: new URL("https://lolypop.agency"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://lolypop.agency/",
    title: "LOLYPOP — Building for the Internet's Wild Side",
    description: "LOLYPOP helps memecoins, betting brands, and internet-native projects stand out, grow, and convert.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LOLYPOP — Building for the Internet's Wild Side",
    description: "LOLYPOP helps memecoins, betting brands, and internet-native projects stand out, grow, and convert.",
    images: ["/og-image.png"],
  },


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
