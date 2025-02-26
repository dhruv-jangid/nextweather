"use client";

import { Chart } from "@/components/chart";
import { WeatherResponse } from "@/lib/useWeather";
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
    <div className="col-span-9 bg-[#e4f0fe] rounded-t-4xl lg:rounded-t-none lg:rounded-l-4xl p-8 lg:p-12 text-black flex flex-col gap-8 h-full min-h-dvh">
      <div className="hidden lg:block">
        <h3 className="text-lg font-medium">Welcome back, Guest!</h3>
        <h4>Checkout today&apos;s weather information</h4>
      </div>
      <div className="lg:bg-white rounded-4xl lg:px-8 lg:py-6 flex flex-col gap-6 lg:gap-8">
        <div className="flex items-center justify-between">
          <h3>Upcoming hours</h3>
          <select
            className="rounded-xl px-2 py-1.5 text-sm cursor-pointer disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
            disabled={true}
          >
            <option value="precipitation">Rain Precipitation</option>
          </select>
        </div>
        <Chart chartData={weatherData.forecastWeather.list} />
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="font-medium">More details of today&apos;s weather</h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
          <div className="rounded-4xl bg-white px-5 py-4 lg:px-8 lg:py-6 flex flex-col items-center gap-1 justify-between">
            <div className="flex justify-between items-center w-full">
              <h5>Humidity</h5>
              <span className="p-1.5 bg-[#5c9de6] rounded-xl">
                <Droplets size={22} color="white" />
              </span>
            </div>
            <h2 className="text-2xl font-semibold">
              {weatherData.currentWeather.main.humidity}%
            </h2>
            <div className="flex justify-between w-full text-sm text-gray-500 mt-2">
              <span>Good</span>
              <span>Normal</span>
              <span>Bad</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-[#5c9de6] h-2.5 rounded-full"
                style={{
                  width: `${weatherData.currentWeather.main.humidity}%`,
                }}
              ></div>
            </div>
          </div>
          <div className="rounded-4xl bg-white px-5 py-4 lg:px-8 lg:py-6 flex flex-col items-center gap-1 justify-between">
            <div className="flex justify-between items-center w-full">
              <h5>Wind</h5>
              <span className="p-1.5 bg-[#5c9de6] rounded-xl">
                <Wind size={22} color="white" />
              </span>
            </div>
            <h2 className="text-2xl font-semibold">
              {weatherData.currentWeather.wind.speed} km/h
            </h2>
            <div className="flex justify-between w-full text-sm text-gray-500 mt-2">
              <span>0</span>
              <span>10</span>
              <span>20</span>
              <span>30</span>
              <span>40</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-[#5c9de6] h-2.5 rounded-full"
                style={{
                  width: `${
                    (weatherData.currentWeather.wind.speed / 40) * 100
                  }%`,
                }}
              ></div>
            </div>
          </div>
          <div className="rounded-4xl bg-white px-5 py-4 lg:px-8 lg:py-6 flex flex-col items-center gap-1 justify-between">
            <div className="flex justify-between items-center w-full">
              <h5>Ground</h5>
              <span className="p-1.5 bg-[#5c9de6] rounded-xl">
                <Waves size={22} color="white" />
              </span>
            </div>
            <h2 className="text-2xl font-semibold">
              {weatherData.currentWeather.main.grnd_level} hPa
            </h2>
            <div className="flex justify-between w-full text-sm text-gray-500 mt-2">
              <span>950</span>
              <span>1000</span>
              <span>1050</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-[#5c9de6] h-2.5 rounded-full"
                style={{
                  width: `${
                    ((weatherData.currentWeather.main.grnd_level - 950) / 100) *
                    100
                  }%`,
                }}
              ></div>
            </div>
          </div>
          <div className="rounded-4xl bg-white px-5 py-4 lg:px-8 lg:py-6 flex flex-col items-center gap-1 justify-between">
            <div className="flex justify-between items-center w-full">
              <h5>Pressure</h5>
              <span className="p-1.5 bg-[#5c9de6] rounded-xl">
                <WindArrowDown size={22} color="white" />
              </span>
            </div>
            <h2 className="text-2xl font-semibold">
              {weatherData.currentWeather.main.pressure} hPa
            </h2>
            <div className="flex justify-between w-full text-sm text-gray-500 mt-2">
              <span>950</span>
              <span>1000</span>
              <span>1050</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-[#5c9de6] h-2.5 rounded-full"
                style={{
                  width: `${
                    ((weatherData.currentWeather.main.pressure - 950) / 100) *
                    100
                  }%`,
                }}
              ></div>
            </div>
          </div>
          <div className="rounded-4xl bg-white px-5 py-4 lg:px-8 lg:py-6 flex flex-col items-center gap-1 justify-between">
            <div className="flex justify-between items-center w-full">
              <h5>Feels like</h5>
              <span className="p-1.5 bg-[#5c9de6] rounded-xl">
                <Thermometer size={22} color="white" />
              </span>
            </div>
            <h2 className="text-2xl font-semibold">
              {weatherData.currentWeather.main.feels_like}°
            </h2>
            <div className="flex justify-between w-full text-sm text-gray-500 mt-2">
              <span>0°</span>
              <span>25°</span>
              <span>50°</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="h-2.5 rounded-full"
                style={{
                  width: `${
                    (weatherData.currentWeather.main.feels_like / 50) * 100
                  }%`,
                  backgroundColor:
                    weatherData.currentWeather.main.feels_like >= 50
                      ? "red"
                      : "#5c9de6",
                }}
              ></div>
            </div>
          </div>
          <div className="rounded-4xl bg-white px-5 py-4 lg:px-8 lg:py-6 flex flex-col items-center gap-1 justify-between">
            <div className="flex justify-between items-center w-full">
              <h5>Visibility</h5>
              <span className="p-1.5 bg-[#5c9de6] rounded-xl">
                <Eye size={22} color="white" />
              </span>
            </div>
            <h2 className="text-2xl font-semibold">
              {weatherData.currentWeather.visibility} km
            </h2>
            <div className="flex justify-between w-full text-sm text-gray-500 mt-2">
              <span>0</span>
              <span>5</span>
              <span>10</span>
              <span>15</span>
              <span>20</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-[#5c9de6] h-2.5 rounded-full"
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
