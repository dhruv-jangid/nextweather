import moment from "moment";

export async function POST(req: Request) {
  const body = await req.json();
  const { latitude, longitude } = body;

  try {
    const curr_result = await fetch(
      `${process.env.API_URL}weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${process.env.API_KEY}`
    );
    const currentWeather = await curr_result.json();

    currentWeather.weather[0].description = capFirstLetters(
      currentWeather.weather[0].description
    );
    currentWeather.visibility = currentWeather.visibility / 1000;
    currentWeather.dt = moment()
      .utcOffset(currentWeather.timezone / 60)
      .format("dddd, d MMM");
    currentWeather.sys.sunrise = moment().format("HH:mm");
    currentWeather.sys.sunset = moment().format("HH:mm");
    currentWeather.wind.speed = (currentWeather.wind.speed * 3.6).toFixed(1);

    const forecast_result = await fetch(
      `${process.env.API_URL}forecast?units=metric&lat=${latitude}&lon=${longitude}&appid=${process.env.API_KEY}`
    );
    const forecastWeather = await forecast_result.json();

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
          dt: moment((item.dt + forecastWeather.city.timezone) * 1000).format(
            "HH:mm"
          ),
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

const capFirstLetters = (str: string) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
