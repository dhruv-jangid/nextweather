import "server-only";
import "@/globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { mainFont } from "@/lib/static/fonts";
import { Providers } from "@/components/providers";

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
    <html lang="en" suppressHydrationWarning>
      <body className={cn(mainFont.className, "antialiased")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
