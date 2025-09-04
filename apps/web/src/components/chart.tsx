"use client";

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  ChartTooltip,
  ChartContainer,
  type ChartConfig,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type { WeatherResponse } from "@/lib/static/types";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export const Chart = ({
  chartData,
}: {
  chartData: WeatherResponse["forecastWeather"]["list"];
}) => {
  const slicedData = chartData.slice(0, 8);
  const data = slicedData
    .map((item) => item.dt)
    .map((time, idx) => ({
      percentage: slicedData.map((item) => Math.round(item.pop * 100))[idx],
      time: time,
      degree: slicedData.map((item) => Math.round(item.main.temp))[idx] + "°",
    }));

  return (
    <Card>
      <CardHeader className="ml-0.5 mt-1">
        <CardTitle>Rain Precipitation</CardTitle>
        <CardDescription>Upcoming hours</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="h-48 xl:h-[36dvh] w-full"
        >
          <AreaChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              xAxisId="top"
              orientation="top"
              dataKey="degree"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <XAxis
              xAxisId="bottom"
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 5)}
            />
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent indicator="line" />}
              formatter={(value) => {
                return ["Chances of Rain: ", value + "%"];
              }}
            />
            <Area
              xAxisId="bottom"
              dataKey="percentage"
              type="bump"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
