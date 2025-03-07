import { capFirstLetters } from "@/utils/capFirstLetters";

export async function POST(req: Request) {
  const body = await req.json();
  const { latitude, longitude } = body;
  if (!latitude || !longitude) {
    throw new Error("Latitude & Longitude are required!");
  }

  try {
    const currentResult = await fetch(
      `${process.env.API_URL}weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${process.env.API_KEY}`
    );
    const currentWeather = await currentResult.json();

    currentWeather.weather[0].description = capFirstLetters(
      currentWeather.weather[0].description
    );
    currentWeather.visibility = currentWeather.visibility / 1000;
    currentWeather.dt = new Date(
      (currentWeather.dt + currentWeather.timezone) * 1000
    ).toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "short",
    });
    currentWeather.sys.sunrise = new Date(
      (currentWeather.sys.sunrise + currentWeather.timezone) * 1000
    ).toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    currentWeather.sys.sunset = new Date(
      (currentWeather.sys.sunset + currentWeather.timezone) * 1000
    ).toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    currentWeather.wind.speed = (currentWeather.wind.speed * 3.6).toFixed(1);

    const forecastResult = await fetch(
      `${process.env.API_URL}forecast?units=metric&lat=${latitude}&lon=${longitude}&appid=${process.env.API_KEY}`
    );
    const forecastWeather = await forecastResult.json();

    forecastWeather.list = forecastWeather.list.map(
      (item: {
        dt: number;
        main: object;
        weather: { description: string }[];
        wind: object;
        visibility: number;
        pop: number;
        sys: object;
        dt_txt: string;
      }) => {
        return {
          ...item,
          dt: new Date(
            (item.dt + forecastWeather.city.timezone) * 1000
          ).toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }),
          weather: item.weather.map((weather) => ({
            ...weather,
            description: capFirstLetters(weather.description),
          })),
        };
      }
    );

    return Response.json({ currentWeather, forecastWeather });
  } catch (error) {
    console.log(error);
    return Response.json(
      { error: "Failed to fetch weather data" },
      { status: 500 }
    );
  }
}
