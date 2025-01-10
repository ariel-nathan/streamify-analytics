import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'
import { TrendingUp } from 'lucide-react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'

const topSongsChartConfig = {
  streams: {
    label: 'Streams',
    color: 'hsl(var(--chart-1))',
  },
  label: {
    color: 'hsl(var(--background))',
  },
} satisfies ChartConfig

const topSongsChartData = [
  { name: 'Cruel Summer', streams: 1250000, color: 'hsl(var(--chart-1))' },
  { name: 'vampire', streams: 1100000, color: 'hsl(var(--chart-2))' },
  { name: 'Last Night', streams: 950000, color: 'hsl(var(--chart-3))' },
  { name: 'Kill Bill', streams: 920000, color: 'hsl(var(--chart-4))' },
  { name: 'Anti-Hero', streams: 890000, color: 'hsl(var(--chart-5))' },
]

export function TopStreamedSongsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Streamed Songs</CardTitle>
        <CardDescription>This month</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={topSongsChartConfig} className="w-full p-4">
          <ResponsiveContainer height={300}>
            <BarChart data={topSongsChartData} layout="vertical">
              <CartesianGrid horizontal={true} vertical={false} />
              <XAxis
                type="number"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => (value / 1000).toFixed(0) + 'K'}
              />
              <YAxis
                dataKey="name"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                hide
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar
                dataKey="streams"
                fill="hsl(var(--chart-1))"
                layout="vertical"
                radius={4}
              >
                <LabelList
                  dataKey="name"
                  position="insideLeft"
                  offset={8}
                  className="fill-[--color-label]"
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
