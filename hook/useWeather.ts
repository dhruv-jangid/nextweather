"use client";

import useSWR from "swr";

export const useWeather = (location: number[]) => {
  const [lat, lon] = location;

  const { data, error, isLoading } = useSWR(
    lat && lon ? `/api/getWeather?lat=${lat}&lon=${lon}` : null,
    {
      dedupingInterval: 3600 * 1000,
      refreshInterval: 1000 * 60 * 5,
      revalidateOnFocus: false,
      fetcher: (url: string) => fetch(url).then((res) => res.json()),
    }
  );

  return {
    weatherData: data,
    error,
    isLoading,
  };
};
