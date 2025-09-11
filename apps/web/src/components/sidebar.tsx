"use client";

import { getLocation } from "@/lib/utils";
import { Search } from "@/components/search";
import { iconMap, type WeatherIconCode } from "@/components/icons";
import { Sunrise, Navigation, Sunset, Locate } from "lucide-react";
import { useLocation } from "@/components/providers/locationProvider";

export const Sidebar = ({
  current,
}: {
  current: WeatherResponse["currentWeather"];
}) => {
  const { setLocation } = useLocation();

  const handleGetLocation = async () => {
    const location = await getLocation();
    if (location) {
      setLocation([location.latitude, location.longitude]);
    }
  };

  return (
    <div className="flex dark:text-accent-foreground flex-col gap-12 xl:gap-20 p-8 lg:p-12 w-full xl:max-w-96 overflow-hidden">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <Locate
            size={32}
            className="p-1.5 bg-foreground stroke-accent-foreground rounded-2xl cursor-pointer"
            onClick={handleGetLocation}
          />
          <Search />
        </div>
        <div className="flex flex-col gap-1.5 lg:gap-3">
          <div className="flex justify-between items-center">
            <h3 className="text-xl flex gap-1.5 items-center leading-tight">
              <Navigation size={16} />
              {current.name || "Unknown"}
            </h3>
            <h4 className="flex items-center gap-1.5">
              <Sunrise size={16} />
              {current.sys.sunrise}
            </h4>
          </div>
          <div className="flex justify-between items-center">
            <h4 className="leading-tight">{current.dt}</h4>
            <h4 className="flex items-center gap-1.5">
              <Sunset size={16} />
              {current.sys.sunset}
            </h4>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:items-center gap-4">
        <h1 className="text-7xl xl:ml-6 -ml-1.5">{current.main.temp}°</h1>
        <h1 className="text-xl flex items-center gap-2">
          {iconMap[current.weather[0].icon as WeatherIconCode]}
          {current.weather[0].main}
        </h1>
      </div>
    </div>
  );
};
