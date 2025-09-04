"use client";

import { ThemeProvider } from "./providers/themeProvider";
import { LocationProvider } from "./providers/locationProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LocationProvider>{children}</LocationProvider>
    </ThemeProvider>
  );
};
