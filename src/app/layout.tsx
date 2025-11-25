import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MetaMask DS",
  description: "MetaMask Design System - A minimal, mobile-first design system dashboard showcasing essential primitives and MetaMask-specific components.",
  openGraph: {
    title: "MetaMask DS",
    description: "MetaMask Design System - A minimal, mobile-first design system dashboard showcasing essential primitives and MetaMask-specific components.",
    siteName: "MetaMask DS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MetaMask DS",
    description: "MetaMask Design System - A minimal, mobile-first design system dashboard showcasing essential primitives and MetaMask-specific components.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} dark`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const storageKey = 'baby-metamask-theme';
                const root = document.documentElement;
                const theme = localStorage.getItem(storageKey) || 'dark';
                root.classList.remove('light', 'dark');
                root.classList.add(theme);
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased surface-default text-default">
        <ThemeProvider defaultTheme="dark" storageKey="baby-metamask-theme">
          <div vaul-drawer-wrapper="">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
