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
import { Cell, Label, Pie, PieChart } from 'recharts'

const revenueDistributionChartConfig = {
  Subscriptions: {
    label: 'Subscriptions',
    color: 'hsl(var(--chart-1))',
  },
  Advertising: {
    label: 'Advertising',
    color: 'hsl(var(--chart-2))',
  },
  Other: {
    label: 'Other',
    color: 'hsl(var(--chart-3))',
  },
} satisfies ChartConfig

const revenueDistributionChartData = [
  { name: 'Subscriptions', color: 'hsl(var(--chart-1))', value: 230000000 },
  { name: 'Advertising', color: 'hsl(var(--chart-2))', value: 100000000 },
  { name: 'Other', color: 'hsl(var(--chart-3))', value: 57000000 },
]

export function RevenueDistributionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Distribution</CardTitle>
        <CardDescription>This year</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={revenueDistributionChartConfig}
          className="w-full"
        >
          <PieChart accessibilityLayer>
            <Pie
              data={revenueDistributionChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground font-bold"
                        >
                          $11,570,000,000
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Revenue
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
              {revenueDistributionChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    revenueDistributionChartConfig[
                      entry.name as keyof typeof revenueDistributionChartConfig
                    ].color
                  }
                />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total revenue for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
