"use client";

import { createContext, useContext, useState } from "react";
import { getInitialLocation } from "@/utils/getInitialLocation";

const LocationContext = createContext<
  | {
      location: [number, number];
      setLocation: (location: [number, number]) => void;
    }
  | undefined
>(undefined);

export const LocationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [location, setLocation] = useState(() => getInitialLocation());

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return context;
};
