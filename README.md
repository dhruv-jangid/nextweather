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

- Next.js 15.1.7
- React 19.0.0
- TypeScript
- Tailwind CSS 4.0.8
- Leaflet & React Leaflet
- Moment.js
- Highcharts
- React Loading Skeleton
- OpenWeatherMap API

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/nextweather.git
   cd nextweather
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add:
   ```bash
   OPENWEATHERMAP_API_KEY=your_api_key_here
   ```

## Environment Variables

The following environment variables are required:

| Variable         | Description                           |
| ---------------- | ------------------------------------- |
| `API_URL`        | OpenWeatherMap data API endpoint      |
| `API_SEARCH_URL` | OpenWeatherMap geocoding API endpoint |
| `API_KEY`        | Your OpenWeatherMap API key           |

## Usage

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
