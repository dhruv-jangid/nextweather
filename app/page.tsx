"use client";

import { Sidebar } from "@/components/sidebar";
import { Weather } from "@/components/weather";
import { useWeather } from "@/hook/useWeather";
import { SkeletonScreen } from "@/components/skeleton";
import { useLocation } from "@/context/locationProvider";

export default function Home() {
  const { location } = useLocation();
  const { weatherData, error, isLoading } = useWeather(location);

  if (isLoading) {
    return <SkeletonScreen />;
  }

  if (error || !weatherData) {
    throw new Error(error);
  }

  return (
    <div className="flex flex-col xl:flex-row max-h-dvh overflow-hidden">
      <Sidebar current={weatherData.currentWeather} />
      <Weather weatherData={weatherData} />
    </div>
  );
}
