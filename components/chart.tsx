"use client";

import Highcharts from "highcharts";
import { useTheme } from "@/context/themeProvider";
import HighchartsReact from "highcharts-react-official";
import type { WeatherResponse } from "@/lib/static/types";

export const Chart = ({
  chartData,
}: {
  chartData: WeatherResponse["forecastWeather"]["list"];
}) => {
  const { theme } = useTheme();

  const slicedData = chartData.slice(0, 8);
  const times = slicedData.map((item) => item.dt);
  const degrees = slicedData.map((item) => Math.round(item.main.temp));
  const percentages = slicedData.map((item) => Math.round(item.pop * 100));

  const globalFontStyle = {
    fontFamily: "DM Sans",
    fontSize: "0.875rem",
    lineHeight: "calc(1.25 / 0.875)",
    letterSpacing: "-0.025em",
    color:
      theme === "light" ? "oklch(29.3% 0.066 243.157)" : "oklch(0.985 0 0)",
  };

  const chartOptions: Highcharts.Options = {
    chart: {
      type: "area",
      backgroundColor: "transparent",
      height: 220,
      marginTop: 60,
      marginBottom: 30,
      marginLeft: 2,
      marginRight: 3,
      style: { fontFamily: "DM Sans" },
    },
    title: { text: undefined },
    credits: { enabled: false },
    legend: { enabled: false },
    accessibility: { enabled: false },
    xAxis: [
      {
        categories: undefined,
        tickPositions: percentages.map((_, index) => index),
        labels: {
          formatter: function (
            this: Highcharts.AxisLabelsFormatterContextObject
          ) {
            return `${percentages[this.value as number]}%`;
          },
          style: globalFontStyle,
        },
        gridLineWidth: 1,
        gridZIndex: 10,
        gridLineColor:
          theme === "light"
            ? "oklch(29.3% 0.066 243.157 / 70%)"
            : "oklch(0.985 0 0 / 50%)",
        tickmarkPlacement: "on",
        lineWidth: 0,
      },
      {
        opposite: true,
        linkedTo: 0,
        categories: degrees.map((temp) => `${temp}°`),
        tickPositions: degrees.map((_, index) => index),
        labels: {
          style: {
            ...globalFontStyle,
            fontSize: "1.125rem",
            fontWeight: "500",
          },
          y: 6,
        },
        gridLineWidth: 0,
        lineWidth: 0,
      },
      {
        opposite: true,
        linkedTo: 0,
        categories: times,
        tickPositions: times.map((_, index) => index),
        labels: { style: globalFontStyle, y: 24 },
        gridLineWidth: 0,
        lineWidth: 0,
      },
    ],
    yAxis: {
      min: 0,
      max: 100,
      labels: { enabled: false },
      gridLineColor: "transparent",
    },
    tooltip: {
      backgroundColor: "#fff",
      borderRadius: 16,
      pointFormat: "{point.y}% Chance of Rain",
      headerFormat: "",
    },
    plotOptions: {
      area: {
        lineWidth: 1,
        lineColor:
          theme === "light"
            ? "oklch(29.3% 0.066 243.157 / 30%)"
            : "oklch(0.985 0 0 / 30%)",
        fillColor:
          theme === "light"
            ? "oklch(58.8% 0.158 241.966)"
            : "oklch(29.3% 0.066 243.157)",
        marker: { enabled: false },
        dataLabels: { enabled: false },
        cursor: "pointer",
      },
    },
    series: [
      {
        type: "area",
        name: "Chance of Rain",
        data: percentages,
        color:
          theme === "light" ? "oklch(0.985 0 0)" : "oklch(29.3% 0.066 243.157)",
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};
