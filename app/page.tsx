"use client";

import { useLocation } from "@/lib/locationContext";
import { useWeather } from "@/lib/useWeather";
import { Sidebar } from "@/components/sidebar";
import { Weather } from "@/components/weather";
import { SkeletonScreen } from "@/components/loading";

export default function Home() {
  const { location } = useLocation();
  const { weatherData, error, isLoading } = useWeather(location);

  if (isLoading) {
    return <SkeletonScreen />;
  }

  if (error || !weatherData) {
    return <div className="h-dvh text-lg">{error}</div>;
  }

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-12">
      <Sidebar current={weatherData.currentWeather} />
      <Weather weatherData={weatherData} />
    </div>
  );
}
