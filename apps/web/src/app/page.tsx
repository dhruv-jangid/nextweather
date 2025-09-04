"use client";

import { Sidebar } from "@/components/sidebar";
import { Weather } from "@/components/weather";
import { useWeather } from "@/hooks/useWeather";
import { Skeleton } from "@/components/ui/skeleton";
import { useLocation } from "@/components/providers/locationProvider";

export default function Home() {
  const { location } = useLocation();
  const { weatherData, error } = useWeather(location);

  if (!weatherData) {
    return (
      <>
        <Skeleton className="h-86 w-full xl:h-dvh xl:w-96" />
        <Skeleton className="h-full w-full xl:h-dvh" />
      </>
    );
  }

  if (error) {
    throw new Error(error);
  }

  return (
    <div className="flex flex-col xl:flex-row overflow-hidden">
      <Sidebar current={weatherData.currentWeather} />
      <Weather weatherData={weatherData} />
    </div>
  );
}
