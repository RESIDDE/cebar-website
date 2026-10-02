import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/components/site/site.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";

import SmoothScroll from "@/components/providers/smooth-scroll";
import ThemeProvider from "@/components/providers/theme-provider";
import SiteShell from "@/components/site/site-shell";
import SiteNav from "@/components/site/site-nav";
import SiteFooter from "@/components/site/site-footer";

// Fallback face for non-Apple devices; Apple devices render SF Pro via the system font stack.
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "CEBAR Group — Education & Corporate Training Consultancy",
  description: "CEBAR Training and Consultancy Services Limited is driven by the passion to empower educators and enrich the educational experience. We strive to be at the forefront of educational training and HR solutions.",
  icons: {
    icon: "/loo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`antialiased ${inter.variable}`}>
        <ThemeProvider>
          <ErrorReporter />
          <SmoothScroll>
            <SiteShell>
              <a href="#content" className="ap-skip">
                Skip to content
              </a>
              <SiteNav />
              <main id="content">{children}</main>
              <SiteFooter />
            </SiteShell>
          </SmoothScroll>
          <VisualEditsMessenger />
        </ThemeProvider>
      </body>
    </html>
  );
}
