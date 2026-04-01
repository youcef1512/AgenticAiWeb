import type { Metadata } from "next";
import "./globals.css";
import { siteContent } from "@/data/site";

export const metadata: Metadata = {
  title: `${siteContent.name} | Personal Website`,
  description: siteContent.description,
  openGraph: {
    title: `${siteContent.name} | Personal Website`,
    description: siteContent.description,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteContent.name} | Personal Website`,
    description: siteContent.description
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
