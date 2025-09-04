import {
  Sun,
  Moon,
  Cloud,
  CloudSun,
  CloudFog,
  Snowflake,
  CloudMoon,
  CloudRain,
  CloudLightning,
} from "lucide-react";

export type WeatherIconCode =
  | "01d"
  | "01n"
  | "02d"
  | "02n"
  | "03d"
  | "03n"
  | "04d"
  | "04n"
  | "09d"
  | "09n"
  | "10d"
  | "10n"
  | "11d"
  | "11n"
  | "13d"
  | "13n"
  | "50d"
  | "50n";

export const iconMap: Record<WeatherIconCode, React.JSX.Element> = {
  "01d": <Sun size={22} />,
  "01n": <Moon size={22} />,
  "02d": <CloudSun size={22} />,
  "02n": <CloudMoon size={22} />,
  "03d": <Cloud size={22} />,
  "03n": <Cloud size={22} />,
  "04d": <Cloud size={22} />,
  "04n": <Cloud size={22} />,
  "09d": <CloudRain size={22} />,
  "09n": <CloudRain size={22} />,
  "10d": <CloudRain size={22} />,
  "10n": <CloudRain size={22} />,
  "11d": <CloudLightning size={22} />,
  "11n": <CloudLightning size={22} />,
  "13d": <Snowflake size={22} />,
  "13n": <Snowflake size={22} />,
  "50d": <CloudFog size={22} />,
  "50n": <CloudFog size={22} />,
};
