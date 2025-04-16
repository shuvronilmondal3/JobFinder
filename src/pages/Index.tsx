
import { Layout } from "@/components/Layout";
import { CardStats } from "@/components/ui/card-stats";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart } from "@/components/charts/LineChart";
import { PieChart } from "@/components/charts/PieChart";
import { ActivityItem } from "@/components/ui/activity-item";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dashboardStats, performanceData, performanceCategories, categoryChartData, fundingChartData, recentActivities } from "@/data/mockData";

export default function Index() {
  return (
    <Layout>
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to the EcoSync Research Hub - your unified platform for research management, IPR, innovation, and startups.
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {dashboardStats.map((stat, index) => (
            <CardStats
              key={index}
              title={stat.title}
              value={stat.value}
              trend={stat.trend}
              className="border-l-4"
              valueClassName=""
              style={{ borderLeftColor: stat.color }}
            />
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <LineChart
            title="Monthly Performance"
            data={performanceData}
            categories={performanceCategories}
          />
          
          <Tabs defaultValue="category">
            <div className="flex items-center justify-between mb-4">
              <CardTitle>Distribution Analysis</CardTitle>
              <TabsList>
                <TabsTrigger value="category">Categories</TabsTrigger>
                <TabsTrigger value="funding">Funding</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="category" className="space-y-4">
              <PieChart title="" data={categoryChartData} />
            </TabsContent>
            <TabsContent value="funding" className="space-y-4">
              <PieChart title="" data={fundingChartData} />
            </TabsContent>
          </Tabs>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {recentActivities.map((activity, index) => (
                <ActivityItem
                  key={index}
                  icon={activity.icon}
                  title={activity.title}
                  description={activity.description}
                  timestamp={activity.timestamp}
                  categoryColor={activity.categoryColor}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
