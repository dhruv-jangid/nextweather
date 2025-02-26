import { Sunrise, Navigation, Sunset, Locate } from "lucide-react";
import { Search } from "@/components/search";
import Image from "next/image";
import Building from "@/public/images/building.png";
import { iconMap, WeatherIconCode } from "@/components/icon";
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
    <div className="col-span-3 flex flex-col gap-20 p-12 w-full relative overflow-hidden">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <Locate
            size={32}
            className="p-1.5 bg-[#e4f0fe] rounded-2xl cursor-pointer"
            color="#5c9de6"
            onClick={async () => {
              const result = await getLocation();
              if (result) {
                setLocation([result.lat, result.lng]);
              }
            }}
          />
          <Search />
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-center">
            <h3 className="text-xl flex gap-1.5 items-center">
              <Navigation size={16} />
              {current.name}
            </h3>
            <h4 className="flex items-center gap-1.5">
              <Sunrise size={16} />
              {current.sys.sunrise}
            </h4>
          </div>
          <div className="flex justify-between">
            <h4>{current.dt}</h4>
            <h4 className="flex items-center gap-1.5">
              <Sunset size={16} />
              {current.sys.sunset}
            </h4>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-7xl ml-6">{current.main.temp}°</h1>
        <h1 className="text-xl flex items-center gap-2">
          {iconMap[current.weather[0].icon as WeatherIconCode]}
          {current.weather[0].main}
        </h1>
      </div>
      <div className="absolute -bottom-6 -left-4 -z-10 h-2/3 w-xs">
        <Image
          src={Building}
          alt="Building"
          fill={true}
          priority={true}
          sizes="(max-width: 768px) 100vw)"
          className="object-cover"
        />
      </div>
    </div>
  );
};
