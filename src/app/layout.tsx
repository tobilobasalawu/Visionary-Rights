import type { Metadata } from "next";
import { ReactNode } from 'react';
import "./globals.css";

export const metadata: Metadata = {
  title: 'Visionary Rights',
  description: 'A tool that helps people understand their human rights and accessibility rights based on their location and situation. It provides quick legal info, guidance, and solutions for accessibility issues',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
