"use client";

import { Chart } from "@/components/chart";
import type { WeatherResponse } from "@/lib/useWeather";
import {
  Droplets,
  Eye,
  Thermometer,
  Waves,
  Wind,
  WindArrowDown,
} from "lucide-react";

export const Weather = ({ weatherData }: { weatherData: WeatherResponse }) => {
  return (
    <div className="col-span-9 bg-sky-100 rounded-t-4xl lg:rounded-t-none lg:rounded-l-4xl p-8 lg:p-12 flex flex-col gap-8 h-full min-h-dvh">
      <div className="hidden lg:block">
        <div className="text-lg font-medium">Welcome back, Guest!</div>
        <div>Checkout today&apos;s weather information</div>
      </div>
      <div className="lg:bg-sky-50 lg:border border-sky-900/30 rounded-4xl lg:px-8 lg:py-6 flex flex-col gap-6 lg:gap-8">
        <div className="flex items-center justify-between">
          <div>Upcoming hours</div>
          <div className="rounded-xl px-2 py-1.5 text-sm bg-sky-100 text-sky-950/50 cursor-not-allowed">
            Rain Precipitation
          </div>
        </div>
        <Chart chartData={weatherData.forecastWeather.list} />
      </div>
      <div className="flex flex-col gap-6">
        <div className="font-medium">More details of today&apos;s weather</div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
          <div className="rounded-4xl bg-sky-50 border border-sky-900/30 px-5 py-4 lg:px-8 lg:py-6 flex flex-col items-center gap-1 justify-between">
            <div className="flex justify-between items-center w-full">
              <p>Humidity</p>
              <span className="p-1.5 bg-sky-600 rounded-xl">
                <Droplets size={22} color="white" />
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
            <div className="w-full bg-sky-200 rounded-full h-2.5">
              <div
                className="bg-sky-600 h-2.5 rounded-full"
                style={{
                  width: `${weatherData.currentWeather.main.humidity}%`,
                }}
              ></div>
            </div>
          </div>
          <div className="rounded-4xl bg-sky-50 border border-sky-900/30 px-5 py-4 lg:px-8 lg:py-6 flex flex-col items-center gap-1 justify-between">
            <div className="flex justify-between items-center w-full">
              <p>Wind</p>
              <span className="p-1.5 bg-sky-600 rounded-xl">
                <Wind size={22} color="white" />
              </span>
            </div>
            <h2 className="text-2xl font-semibold">
              {weatherData.currentWeather.wind.speed} km/h
            </h2>
            <div className="flex justify-between w-full text-sm mt-2.5">
              <span>0</span>
              <span>10</span>
              <span>20</span>
              <span>30</span>
              <span>40</span>
            </div>
            <div className="w-full bg-sky-200 rounded-full h-2.5">
              <div
                className="bg-sky-600 h-2.5 rounded-full"
                style={{
                  width: `${
                    (weatherData.currentWeather.wind.speed / 40) * 100
                  }%`,
                }}
              ></div>
            </div>
          </div>
          <div className="rounded-4xl bg-sky-50 border border-sky-900/30 px-5 py-4 lg:px-8 lg:py-6 flex flex-col items-center gap-1 justify-between">
            <div className="flex justify-between items-center w-full">
              <p>Ground</p>
              <span className="p-1.5 bg-sky-600 rounded-xl">
                <Waves size={22} color="white" />
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
            <div className="w-full bg-sky-200 rounded-full h-2.5">
              <div
                className="bg-sky-600 h-2.5 rounded-full"
                style={{
                  width: `${
                    ((weatherData.currentWeather.main.grnd_level - 950) / 100) *
                    100
                  }%`,
                }}
              ></div>
            </div>
          </div>
          <div className="rounded-4xl bg-sky-50 border border-sky-900/30 px-5 py-4 lg:px-8 lg:py-6 flex flex-col items-center gap-1 justify-between">
            <div className="flex justify-between items-center w-full">
              <p>Pressure</p>
              <span className="p-1.5 bg-sky-600 rounded-xl">
                <WindArrowDown size={22} color="white" />
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
            <div className="w-full bg-sky-200 rounded-full h-2.5">
              <div
                className="bg-sky-600 h-2.5 rounded-full"
                style={{
                  width: `${
                    ((weatherData.currentWeather.main.pressure - 950) / 100) *
                    100
                  }%`,
                }}
              ></div>
            </div>
          </div>
          <div className="rounded-4xl bg-sky-50 border border-sky-900/30 px-5 py-4 lg:px-8 lg:py-6 flex flex-col items-center gap-1 justify-between">
            <div className="flex justify-between items-center w-full">
              <p>Feels like</p>
              <span className="p-1.5 bg-sky-600 rounded-xl">
                <Thermometer size={22} color="white" />
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
            <div className="w-full bg-sky-200 rounded-full h-2.5">
              <div
                className="bg-sky-600 h-2.5 rounded-full"
                style={{
                  width: `${
                    (weatherData.currentWeather.main.feels_like / 50) * 100
                  }%`,
                }}
              ></div>
            </div>
          </div>
          <div className="rounded-4xl bg-sky-50 border border-sky-900/30 px-5 py-4 lg:px-8 lg:py-6 flex flex-col items-center gap-1 justify-between">
            <div className="flex justify-between items-center w-full">
              <p>Visibility</p>
              <span className="p-1.5 bg-sky-600 rounded-xl">
                <Eye size={22} color="white" />
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
              <span>20</span>
            </div>
            <div className="w-full bg-sky-200 rounded-full h-2.5">
              <div
                className="bg-sky-600 h-2.5 rounded-full"
                style={{
                  width: `${
                    (weatherData.currentWeather.visibility / 20) * 100
                  }%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
