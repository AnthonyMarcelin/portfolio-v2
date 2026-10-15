import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jet-brains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Anthony Marcelin",
    template: "%s | Anthony Marcelin",
  },
  authors: [{ name: "Anthony Marcelin" }],
  applicationName: "Anthony Marcelin Portfolio",
  icons: ["/favicon.ico"],
  robots: {
    index: true,
    follow: true,
  },
};

// ponytail: <html lang> stays "fr"; EN pages set lang on their wrapper div.
// Moving the root layout under [lang] would need a global-not-found page.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${jetBrainsMono.variable} antialiased font-mono`}
      >
        {children}
      </body>
    </html>
  );
}
