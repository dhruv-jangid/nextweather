# NextWeather

A modern weather application built with Next.js that provides real-time weather information and forecasts.

## Features

- Current weather conditions including temperature, humidity, wind speed, and more
- Hourly weather forecasts
- Clean and responsive UI built with Tailwind CSS
- Interactive maps integration with Leaflet
- Loading states with React Loading Skeleton
- Weather icons from Lucide React
- Location-based weather data
- Search functionality for any location
- Interactive weather data visualization using Highcharts

## Technologies Used

- Next.js 15 with React 19
- TypeScript
- Tailwind CSS
- Leaflet & React Leaflet
- Highcharts
- React Skeleton Loading
- OpenWeatherMap API

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/toxic-lmao/nextweather.git
   cd nextweather
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Environment Variables

The following environment variables are required:

| Variable         | Description                                   |
| ---------------- | --------------------------------------------- |
| `API_URL`        | https://api.openweathermap.org/data/2.5/      |
| `API_SEARCH_URL` | https://api.openweathermap.org/geo/1.0/direct |
| `API_KEY`        | Your OpenWeatherMap API key                   |

## Usage

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
