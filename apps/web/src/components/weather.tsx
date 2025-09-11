"use client";

import {
  Card,
  CardTitle,
  CardAction,
  CardHeader,
  CardContent,
} from "./ui/card";
import {
  Eye,
  Sun,
  Moon,
  Wind,
  Waves,
  Smile,
  Laugh,
  Frown,
  Droplets,
  Thermometer,
  WindArrowDown,
} from "lucide-react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { Chart } from "@/components/chart";
const Map = dynamic(() => import("@/components/map"), { ssr: false });

export const Weather = ({ weatherData }: { weatherData: WeatherResponse }) => {
  const { setTheme, theme } = useTheme();

  return (
    <div className="bg-foreground text-accent-foreground rounded-t-4xl xl:rounded-tr-none xl:rounded-bl-4xl p-8 lg:p-12 flex flex-col gap-8 max-h-dvh w-full overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]">
      <div className="flex justify-between mx-0.5">
        <div className="flex flex-col">
          <span className="text-lg font-medium">Greetings!</span>
          <span className="line-clamp-1 text-muted-foreground">
            Today&apos;s weather forecast
          </span>
        </div>
        {theme === "light" ? (
          <Sun
            size={18}
            className="cursor-pointer mt-1"
            onClick={() => setTheme("dark")}
          />
        ) : (
          <Moon
            size={18}
            className="cursor-pointer mt-1"
            onClick={() => setTheme("light")}
          />
        )}
      </div>
      <Chart chartData={weatherData.forecastWeather.list} />
      <div className="flex flex-col gap-4 mt-2.5">
        <span className="font-medium ml-0.5">
          More details of today&apos;s weather
        </span>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
          <Card>
            <CardHeader>
              <CardTitle>Humidity</CardTitle>
              <CardAction>
                <Droplets size={20} className="stroke-accent-foreground" />
              </CardAction>
            </CardHeader>
            <CardContent>
              <h2 className="text-xl lg:text-2xl font-semibold text-center -mt-2.5">
                {weatherData.currentWeather.main.humidity}%
              </h2>
              <div className="flex flex-col gap-1 mt-2.5 xl:mt-6">
                <div className="flex justify-between w-full text-sm">
                  <span>
                    <Laugh size={20} strokeWidth={1.6} />
                  </span>
                  <span>
                    <Smile size={20} strokeWidth={1.6} />
                  </span>
                  <span>
                    <Frown size={20} strokeWidth={1.6} />
                  </span>
                </div>
                <div className="w-full bg-background/20 rounded-full h-2.5">
                  <div
                    className="bg-background/60 h-2.5 rounded-full"
                    style={{
                      width: `${weatherData.currentWeather.main.humidity}%`,
                    }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Wind</CardTitle>
              <CardAction>
                <Wind size={20} className="stroke-accent-foreground" />
              </CardAction>
            </CardHeader>
            <CardContent>
              <h2 className="text-xl lg:text-2xl font-semibold text-center -mt-2.5">
                {weatherData.currentWeather.wind.speed} km/h
              </h2>
              <div className="flex flex-col gap-1 mt-2.5 xl:mt-6">
                <div className="flex justify-between w-full text-sm">
                  <span>0</span>
                  <span className="hidden lg:block">10</span>
                  <span>25</span>
                  <span className="hidden lg:block">30</span>
                  <span>40</span>
                </div>
                <div className="w-full bg-background/20 rounded-full h-2.5">
                  <div
                    className="bg-background/60 h-2.5 rounded-full"
                    style={{
                      width: `${
                        (weatherData.currentWeather.wind.speed / 40) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Ground</CardTitle>
              <CardAction>
                <Waves size={20} className="stroke-accent-foreground" />
              </CardAction>
            </CardHeader>
            <CardContent>
              <h2 className="text-xl lg:text-2xl font-semibold text-center -mt-2.5">
                {weatherData.currentWeather.main.grnd_level} hPa
              </h2>
              <div className="flex flex-col gap-1 mt-2.5 xl:mt-6">
                <div className="flex justify-between w-full text-sm">
                  <span>950</span>
                  <span>1000</span>
                  <span>1050</span>
                </div>
                <div className="w-full bg-background/20 rounded-full h-2.5">
                  <div
                    className="bg-background/60 h-2.5 rounded-full"
                    style={{
                      width: `${
                        ((weatherData.currentWeather.main.grnd_level - 950) /
                          100) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pressure</CardTitle>
              <CardAction>
                <WindArrowDown size={20} className="stroke-accent-foreground" />
              </CardAction>
            </CardHeader>
            <CardContent>
              <h2 className="text-xl lg:text-2xl font-semibold text-center -mt-2.5">
                {weatherData.currentWeather.main.pressure} hPa
              </h2>
              <div className="flex flex-col gap-1 mt-2.5 xl:mt-6">
                <div className="flex justify-between w-full text-sm">
                  <span>950</span>
                  <span>1000</span>
                  <span>1050</span>
                </div>
                <div className="w-full bg-background/20 rounded-full h-2.5">
                  <div
                    className="bg-background/60 h-2.5 rounded-full"
                    style={{
                      width: `${
                        ((weatherData.currentWeather.main.pressure - 950) /
                          100) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feels like</CardTitle>
              <CardAction>
                <Thermometer size={20} className="stroke-accent-foreground" />
              </CardAction>
            </CardHeader>
            <CardContent>
              <h2 className="text-xl lg:text-2xl font-semibold text-center -mt-2.5">
                {weatherData.currentWeather.main.feels_like}°
              </h2>
              <div className="flex flex-col gap-1 mt-2.5 xl:mt-6">
                <div className="flex justify-between w-full text-sm">
                  <span>0°</span>
                  <span>25°</span>
                  <span>50°</span>
                </div>
                <div className="w-full bg-background/20 rounded-full h-2.5">
                  <div
                    className="bg-background/60 h-2.5 rounded-full"
                    style={{
                      width: `${
                        (weatherData.currentWeather.main.feels_like / 50) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Visibility</CardTitle>
              <CardAction>
                <Eye size={20} className="stroke-accent-foreground" />
              </CardAction>
            </CardHeader>
            <CardContent>
              <h2 className="text-xl lg:text-2xl font-semibold text-center -mt-2.5">
                {weatherData.currentWeather.visibility} km
              </h2>
              <div className="flex flex-col gap-1 mt-2.5 xl:mt-6">
                <div className="flex justify-between w-full text-sm">
                  <span>0</span>
                  <span className="hidden lg:block">5</span>
                  <span>10</span>
                  <span className="hidden lg:block">15</span>
                  <span>25</span>
                </div>
                <div className="w-full bg-background/20 rounded-full h-2.5">
                  <div
                    className="bg-background/60 h-2.5 rounded-full"
                    style={{
                      width: `${
                        (weatherData.currentWeather.visibility / 25) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-2.5">
        <div className="font-medium ml-0.5">Global Map</div>
        <Map />
      </div>
    </div>
  );
};
