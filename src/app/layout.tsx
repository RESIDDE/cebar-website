import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

import SmoothScroll from "@/components/providers/smooth-scroll";
import ThemeProvider from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  title: "CEBAR Group — Education & Corporate Training Consultancy",
  description: "CEBAR Training and Consultancy Services Limited is driven by the passion to empower educators and enrich the educational experience. We strive to be at the forefront of educational training and HR solutions.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <ErrorReporter />
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <VisualEditsMessenger />
        </ThemeProvider>
      </body>
    </html>
  );
}
