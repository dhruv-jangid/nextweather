import "@/app/globals.css";
import type { Metadata } from "next";
import { cn } from "@/lib/static/shadcnUtils";
import { mainFont } from "@/lib/static/fonts";
import { ThemeProvider } from "@/context/themeProvider";
import { LocationProvider } from "@/context/locationProvider";

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
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LocationProvider>{children}</LocationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
