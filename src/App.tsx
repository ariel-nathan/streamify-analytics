import ThemeSwitcher from '@/components/theme-switcher'
import { ThemeProvider } from '@/providers/theme-provider'
import { RecentStreamsTable } from './components/dashboard/recent-streams-table'
import { RevenueDistributionChart } from './components/dashboard/revenue-distribution-chart'
import { StatsCards } from './components/dashboard/stats-cards'
import { TopStreamedSongsChart } from './components/dashboard/top-streamed-songs-chart'
import { UserGrowthChart } from './components/dashboard/user-growth-chart'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'

export default function App() {
  return (
    <ThemeProvider>
      <header className="sticky top-0 z-50 border-b bg-background">
        <div className="container flex h-12 items-center justify-between">
          <h1 className="text-lg font-bold">Streamify</h1>
          <ThemeSwitcher />
        </div>
      </header>
      <div className="container max-h-[calc(100vh-5rem-2px)] min-h-[calc(100vh-3rem-1px)] space-y-4 overflow-y-auto py-4">
        <Tabs defaultValue="stats">
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="stats">Stats</TabsTrigger>
            <TabsTrigger value="graphs">Graphs</TabsTrigger>
            <TabsTrigger value="tables">Tables</TabsTrigger>
          </TabsList>
          <TabsContent value="stats">
            <StatsCards />
          </TabsContent>
          <TabsContent value="graphs">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <RevenueDistributionChart />
              <TopStreamedSongsChart />
              <UserGrowthChart />
            </div>
          </TabsContent>
          <TabsContent value="tables" className="space-y-4">
            <div>
              <h1 className="text-2xl font-bold">Recent Streams</h1>
              <p className="text-sm text-muted-foreground">This month</p>
            </div>
            <RecentStreamsTable />
          </TabsContent>
        </Tabs>
      </div>
    </ThemeProvider>
  )
}
