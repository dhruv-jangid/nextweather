import { Sunrise, Navigation, Sunset, Locate } from "lucide-react";
import { Search } from "@/components/search";
import Image from "next/image";
import Building from "@/public/images/building.png";
import { iconMap, WeatherIconCode } from "@/components/icons";
import { getLocation } from "@/utils/getLocation";
import { useLocation } from "@/lib/locationContext";
import { WeatherResponse } from "@/lib/useWeather";

export const Sidebar = ({
  current,
}: {
  current: WeatherResponse["currentWeather"];
}) => {
  const { setLocation } = useLocation();

  if (!current) {
    return null;
  }

  return (
    <div className="flex flex-col gap-16 xl:gap-20 p-8 lg:p-12 text-sky-100 w-full xl:fixed xl:left-0 xl:top-0 xl:h-dvh xl:max-w-96 overflow-hidden z-50">
      <div className="flex flex-col gap-8 line">
        <div className="flex justify-between items-center">
          <Locate
            size={32}
            className="p-1.5 bg-sky-100 stroke-sky-600 rounded-2xl cursor-pointer"
            onClick={async () => {
              const location = await getLocation();
              if (location) {
                setLocation([location.latitude, location.longitude]);
              }
            }}
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
      <div className="absolute top-28 lg:top-24 -right-1 xl:top-auto xl:-bottom-7 xl:-left-4 -z-10 h-96 xl:h-2/3 w-46 lg:w-64 xl:w-xs lg:h-2/5">
        <Image
          src={Building}
          alt="Building"
          fill
          priority
          sizes="(max-width: 768px) 100vw)"
          className="xl:object-cover scale-x-[-1] xl:scale-x-[1]"
        />
      </div>
    </div>
  );
};
