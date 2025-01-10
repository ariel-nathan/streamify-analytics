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
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'

const userGrowthChartConfig = {
  total: {
    label: 'Total',
    color: 'hsl(var(--chart-1))',
  },
  active: {
    label: 'Active',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig

const userGrowthChartData = [
  { month: 'January', total: 520000000, active: 380000000 },
  { month: 'February', total: 535000000, active: 390000000 },
  { month: 'March', total: 548000000, active: 398000000 },
  { month: 'April', total: 560000000, active: 405000000 },
  { month: 'May', total: 575000000, active: 415000000 },
  { month: 'June', total: 585000000, active: 425000000 },
  { month: 'July', total: 595000000, active: 432000000 },
  { month: 'August', total: 602000000, active: 438000000 },
  { month: 'September', total: 608000000, active: 442000000 },
  { month: 'October', total: 615000000, active: 450000000 },
  { month: 'November', total: 620000000, active: 455000000 },
  { month: 'December', total: 626000000, active: 460000000 },
]

export function UserGrowthChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Growth</CardTitle>
        <CardDescription>Past 12 months</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={userGrowthChartConfig} className="w-full">
          <AreaChart accessibilityLayer data={userGrowthChartData}>
            <CartesianGrid />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              dataKey="total"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              domain={[300000000, 'auto']}
              tickFormatter={(value) => (value / 1000000).toFixed(1) + 'M'}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Area
              dataKey="total"
              fill="hsl(var(--chart-1))"
              stroke="hsl(var(--chart-1))"
            />
            <Area
              dataKey="active"
              fill="hsl(var(--chart-2))"
              stroke="hsl(var(--chart-2))"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total users for the last 12 months
        </div>
      </CardFooter>
    </Card>
  )
}
