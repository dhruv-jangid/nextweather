import { DM_Sans } from "next/font/google";
import type { Metadata } from "next";
import "@/app/globals.css";
import { LocationProvider } from "@/lib/locationContext";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HorizonIQ",
  description: "Know whats near, forecasts clear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-sky-600 text-sky-950 antialiased text-balance ${font.className}`}
      >
        <LocationProvider>{children}</LocationProvider>
      </body>
    </html>
  );
}
