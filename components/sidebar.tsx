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
    <div className="col-span-3 flex flex-col gap-16 xl:gap-20 p-8 lg:p-12 w-full relative lg:overflow-hidden">
      <div className="flex flex-col gap-8 line">
        <div className="flex justify-between items-center">
          <Locate
            size={32}
            className="p-1.5 bg-[#e4f0fe] rounded-2xl cursor-pointer"
            color="#5c9de6"
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
          <div className="flex justify-between items-center lg:flex-col lg:items-start lg:gap-1 xl:gap-0 xl:items-center xl:flex-row">
            <h3 className="text-xl flex gap-1.5 items-center leading-tight">
              <Navigation size={16} />
              {current.name}
            </h3>
            <h4 className="flex items-center gap-1.5">
              <Sunrise size={16} />
              {current.sys.sunrise}
            </h4>
          </div>
          <div className="flex justify-between items-center lg:flex-col lg:items-start lg:gap-1 xl:gap-0 xl:items-center xl:flex-row">
            <h4 className="leading-tight">{current.dt}</h4>
            <h4 className="flex items-center gap-1.5">
              <Sunset size={16} />
              {current.sys.sunset}
            </h4>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:items-center gap-4">
        <h1 className="text-7xl lg:ml-6 -ml-1.5">{current.main.temp}°</h1>
        <h1 className="text-xl flex items-center gap-2">
          {iconMap[current.weather[0].icon as WeatherIconCode]}
          {current.weather[0].main}
        </h1>
      </div>
      <div className="absolute -bottom-28 -right-1 lg:-bottom-6 lg:-left-4 -z-10 h-full lg:h-1/2 xl:h-2/3 w-44 lg:w-full xl:w-xs">
        <Image
          src={Building}
          alt="Building"
          fill={true}
          priority={true}
          sizes="(max-width: 768px) 100vw)"
          className="xl:object-cover scale-x-[-1] lg:scale-x-[1]"
        />
      </div>
    </div>
  );
};
