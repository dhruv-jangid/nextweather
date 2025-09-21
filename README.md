# HorizonIQ

> Know what's near, forecasts clear

A modern, responsive weather application built with Next.js 15 and React 19 that provides real-time weather information and forecasts with an elegant user interface.

## Features

- Real-time Weather Data: Current conditions including temperature, humidity, wind speed, and more
- Detailed Forecasts: Hourly and daily weather predictions
- Interactive Maps: Location-based weather visualization with Leaflet integration
- Responsive Design: Beautiful UI that works on all devices
- Data Visualization: Interactive charts for weather trends using Recharts
- Dark/Light Mode: Theme support for comfortable viewing
- Location Search: Find weather for any location worldwide
- Fast Performance: Built with Next.js 15 and Turbopack for optimal speed

## Tech Stack

- Frontend:

  - Next.js 15.5.0 with React 19
  - TypeScript for type safety
  - Tailwind CSS 4 for styling
  - SWR for data fetching
  - Recharts for data visualization
  - Leaflet & React Leaflet for maps

- Development:
  - Bun as package manager
  - Turbo for monorepo management
  - Husky for Git hooks

## Getting Started

### Prerequisites

- Bun (v1.2.20 or higher)
- OpenWeatherMap API key

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/nextweather.git
   cd nextweather
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the `apps/web` directory with the following variables:

   ```bash
   API_URL=https://api.openweathermap.org/data/2.5/
   API_SEARCH_URL=https://api.openweathermap.org/geo/1.0/direct
   API_KEY=your_openweathermap_api_key
   ```

## Usage

### Development

Run the development server with Turbopack:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build

Create a production build:

```bash
bun build
```

### Start Production Server

```bash
cd apps/web
bun start
```

## Screenshots

_[Add screenshots of your application here]_

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- OpenWeatherMap for weather data
- Lucide React for beautiful icons
- Tailwind CSS for styling
- Next.js for the amazing framework
