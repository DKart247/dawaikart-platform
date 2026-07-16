"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const chartData = [
  { day: "Mon", sales: 12000 },
  { day: "Tue", sales: 18000 },
  { day: "Wed", sales: 15000 },
  { day: "Thu", sales: 22000 },
  { day: "Fri", sales: 28000 },
  { day: "Sat", sales: 35000 },
  { day: "Sun", sales: 26000 },
];

const chartConfig = {
  sales: {
    label: "Sales",
    color: "hsl(var(--chart-1))",
  },
};

export default function SalesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Sales</CardTitle>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-[320px] w-full">
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="day" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="sales" fill="var(--color-sales)" radius={6} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}