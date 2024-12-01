/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved.
 */

import type { Metadata } from "next";
import "../lib/globals.css";


export const metadata: Metadata = {
  title: "Adam Long - Personal Website",
  description: "My home on the internet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
