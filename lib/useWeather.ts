"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export type WeatherResponse = {
  currentWeather: {
    coord: {
      lon: number;
      lat: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    base: string;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
      sea_level: number;
      grnd_level: number;
    };
    visibility: number;
    wind: {
      speed: number;
      deg: number;
      gust?: number;
    };
    clouds: {
      all: number;
    };
    dt: string;
    sys: {
      type: number;
      id: number;
      country: string;
      sunrise: string;
      sunset: string;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
  };
  forecastWeather: {
    cod: string;
    message: number;
    cnt: number;
    list: {
      dt: string;
      main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number;
      };
      weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
      }[];
      clouds: {
        all: number;
      };
      wind: {
        speed: number;
        deg: number;
        gust?: number;
      };
      visibility: number;
      pop: number;
      sys: {
        pod: string;
      };
      dt_txt: string;
    }[];
    city: {
      id: number;
      name: string;
      coord: {
        lat: number;
        lon: number;
      };
      country: string;
      population: number;
      timezone: number;
      sunrise: number;
      sunset: number;
    };
  };
};

export const useWeather = (location: number[]) => {
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const isInitialFetchDone = useRef(false);

  const fetchWeather = useCallback(async () => {
    try {
      if (!isInitialFetchDone.current) {
        setIsLoading(true);
        isInitialFetchDone.current = true;
      }

      const [lat, lon] = location;
      const weather = await fetch("/api/getWeather", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          latitude: lat,
          longitude: lon,
        }),
      });

      setWeatherData(await weather.json());
      setError(null);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      if (isInitialFetchDone.current) {
        setIsLoading(false);
      }
    }
  }, [location]);

  useEffect(() => {
    fetchWeather();

    const weatherUpdateInterval = setInterval(() => {
      fetchWeather();
    }, 1000 * 60 * 5);

    return () => {
      clearInterval(weatherUpdateInterval);
    };
  }, [fetchWeather]);

  return { weatherData, error, isLoading };
};
