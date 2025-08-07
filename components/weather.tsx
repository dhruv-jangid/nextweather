"use client";

import {
  Eye,
  Sun,
  Moon,
  Wind,
  Waves,
  Droplets,
  Thermometer,
  WindArrowDown,
} from "lucide-react";
import dynamic from "next/dynamic";
import { Chart } from "@/components/chart";
import { useTheme } from "@/context/themeProvider";
import type { WeatherResponse } from "@/lib/static/types";
const Map = dynamic(() => import("@/components/map"), { ssr: false });

export const Weather = ({ weatherData }: { weatherData: WeatherResponse }) => {
  const { setTheme, theme } = useTheme();

  return (
    <div className="bg-foreground text-accent-foreground rounded-t-4xl xl:rounded-tr-none xl:rounded-bl-4xl p-8 lg:p-12 flex flex-col gap-8 max-h-dvh w-full overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]">
      <div className="hidden lg:flex justify-between">
        <div>
          <div className="text-lg font-medium">Welcome back, Guest!</div>
          <div>Checkout today&apos;s weather information</div>
        </div>
        {theme === "light" ? (
          <Sun size={18} cursor="pointer" onClick={() => setTheme("dark")} />
        ) : (
          <Moon size={18} cursor="pointer" onClick={() => setTheme("light")} />
        )}
      </div>
      <div className="lg:bg-accent lg:border border-accent-foreground/25 rounded-4xl lg:px-8 lg:py-6 flex flex-col gap-6 lg:gap-8 shadow-lg">
        <div className="flex items-center justify-between">
          <div>Upcoming hours</div>
          <div className="rounded-xl px-2 py-1.5 text-sm bg-foreground text-accent-foreground/50 cursor-not-allowed">
            Rain Precipitation
          </div>
        </div>
        <Chart chartData={weatherData.forecastWeather.list} />
      </div>
      <div className="flex flex-col gap-6">
        <div className="font-medium">More details of today&apos;s weather</div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
          <div className="rounded-4xl bg-accent shadow-lg border border-accent-foreground/25 px-5 py-4 lg:px-8 lg:py-6 flex flex-col items-center gap-1 justify-between">
            <div className="flex justify-between items-center w-full">
              <p>Humidity</p>
              <span className="p-1.5 bg-foreground rounded-xl">
                <Droplets size={22} className="stroke-accent-foreground" />
              </span>
            </div>
            <h2 className="text-2xl font-semibold">
              {weatherData.currentWeather.main.humidity}%
            </h2>
            <div className="flex justify-between w-full text-sm mt-2.5">
              <span>Good</span>
              <span>Normal</span>
              <span>Bad</span>
            </div>
            <div className="w-full bg-background/25 rounded-full h-2.5">
              <div
                className="bg-background/75 h-2.5 rounded-full"
                style={{
                  width: `${weatherData.currentWeather.main.humidity}%`,
                }}
              ></div>
            </div>
          </div>
          <div className="rounded-4xl bg-accent shadow-lg border border-accent-foreground/25 px-5 py-4 lg:px-8 lg:py-6 flex flex-col items-center gap-1 justify-between">
            <div className="flex justify-between items-center w-full">
              <p>Wind</p>
              <span className="p-1.5 bg-foreground rounded-xl">
                <Wind size={22} className="stroke-accent-foreground" />
              </span>
            </div>
            <h2 className="text-2xl font-semibold">
              {weatherData.currentWeather.wind.speed} km/h
            </h2>
            <div className="flex justify-between w-full text-sm mt-2.5">
              <span>0</span>
              <span>10</span>
              <span>25</span>
              <span>30</span>
              <span>40</span>
            </div>
            <div className="w-full bg-background/25 rounded-full h-2.5">
              <div
                className="bg-background/75 h-2.5 rounded-full"
                style={{
                  width: `${
                    (weatherData.currentWeather.wind.speed / 40) * 100
                  }%`,
                }}
              ></div>
            </div>
          </div>
          <div className="rounded-4xl bg-accent shadow-lg border border-accent-foreground/25 px-5 py-4 lg:px-8 lg:py-6 flex flex-col items-center gap-1 justify-between">
            <div className="flex justify-between items-center w-full">
              <p>Ground</p>
              <span className="p-1.5 bg-foreground rounded-xl">
                <Waves size={22} className="stroke-accent-foreground" />
              </span>
            </div>
            <h2 className="text-2xl font-semibold">
              {weatherData.currentWeather.main.grnd_level} hPa
            </h2>
            <div className="flex justify-between w-full text-sm mt-2.5">
              <span>950</span>
              <span>1000</span>
              <span>1050</span>
            </div>
            <div className="w-full bg-background/25 rounded-full h-2.5">
              <div
                className="bg-background/75 h-2.5 rounded-full"
                style={{
                  width: `${
                    ((weatherData.currentWeather.main.grnd_level - 950) / 100) *
                    100
                  }%`,
                }}
              ></div>
            </div>
          </div>
          <div className="rounded-4xl bg-accent shadow-lg border border-accent-foreground/25 px-5 py-4 lg:px-8 lg:py-6 flex flex-col items-center gap-1 justify-between">
            <div className="flex justify-between items-center w-full">
              <p>Pressure</p>
              <span className="p-1.5 bg-foreground rounded-xl">
                <WindArrowDown size={22} className="stroke-accent-foreground" />
              </span>
            </div>
            <h2 className="text-2xl font-semibold">
              {weatherData.currentWeather.main.pressure} hPa
            </h2>
            <div className="flex justify-between w-full text-sm mt-2.5">
              <span>950</span>
              <span>1000</span>
              <span>1050</span>
            </div>
            <div className="w-full bg-background/25 rounded-full h-2.5">
              <div
                className="bg-background/75 h-2.5 rounded-full"
                style={{
                  width: `${
                    ((weatherData.currentWeather.main.pressure - 950) / 100) *
                    100
                  }%`,
                }}
              ></div>
            </div>
          </div>
          <div className="rounded-4xl bg-accent shadow-lg border border-accent-foreground/25 px-5 py-4 lg:px-8 lg:py-6 flex flex-col items-center gap-1 justify-between">
            <div className="flex justify-between items-center w-full">
              <p>Feels like</p>
              <span className="p-1.5 bg-foreground rounded-xl">
                <Thermometer size={22} className="stroke-accent-foreground" />
              </span>
            </div>
            <h2 className="text-2xl font-semibold">
              {weatherData.currentWeather.main.feels_like}°
            </h2>
            <div className="flex justify-between w-full text-sm mt-2.5">
              <span>0°</span>
              <span>25°</span>
              <span>50°</span>
            </div>
            <div className="w-full bg-background/25 rounded-full h-2.5">
              <div
                className="bg-background/75 h-2.5 rounded-full"
                style={{
                  width: `${
                    (weatherData.currentWeather.main.feels_like / 50) * 100
                  }%`,
                }}
              ></div>
            </div>
          </div>
          <div className="rounded-4xl bg-accent shadow-lg border border-accent-foreground/25 px-5 py-4 lg:px-8 lg:py-6 flex flex-col items-center gap-1 justify-between">
            <div className="flex justify-between items-center w-full">
              <p>Visibility</p>
              <span className="p-1.5 bg-foreground rounded-xl">
                <Eye size={22} className="stroke-accent-foreground" />
              </span>
            </div>
            <h2 className="text-2xl font-semibold">
              {weatherData.currentWeather.visibility} km
            </h2>
            <div className="flex justify-between w-full text-sm mt-2.5">
              <span>0</span>
              <span>5</span>
              <span>10</span>
              <span>15</span>
              <span>25</span>
            </div>
            <div className="w-full bg-background/25 rounded-full h-2.5">
              <div
                className="bg-background/75 h-2.5 rounded-full"
                style={{
                  width: `${
                    (weatherData.currentWeather.visibility / 25) * 100
                  }%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="font-medium">Global Map</div>
        <Map />
      </div>
    </div>
  );
};
