import { Layout } from "@/components/Layout";
import { CardStats } from "@/components/ui/card-stats";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ActivityItem } from "@/components/ui/activity-item";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Briefcase, MapPin, Clock, TrendingUp } from "lucide-react";

export default function Index() {
  // Mock data for the career platform
  const careerStats = [
    { title: "Active Jobs", value: "2,450+", trend: { value: 12, positive: true }, color: "#3498db" },
    { title: "Companies", value: "580", trend: { value: 5, positive: true }, color: "#2ecc71" },
    { title: "Internships", value: "890", trend: { value: 15, positive: true }, color: "#9b59b6" },
    { title: "Placements", value: "76%", trend: { value: 8, positive: true }, color: "#e74c3c" },
  ];

  const featuredJobs = [
    {
      id: 1,
      title: "AI Research Scientist",
      company: "TechGen Solutions",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120K - $150K",
      posted: "2 days ago",
      icon: Briefcase,
    },
    {
      id: 2,
      title: "Software Engineering Intern",
      company: "InnovateTech",
      location: "Remote",
      type: "Internship",
      salary: "$30 - $45/hr",
      posted: "5 days ago",
      icon: Briefcase,
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "DataDrive Inc.",
      location: "New York, NY",
      type: "Full-time",
      salary: "$85K - $105K",
      posted: "1 day ago",
      icon: Briefcase,
    },
    {
      id: 4,
      title: "UX/UI Design Intern",
      company: "Creative Solutions",
      location: "Chicago, IL",
      type: "Internship",
      salary: "$25 - $35/hr",
      posted: "3 days ago",
      icon: Briefcase,
    },
  ];

  const recentActivities = [
    {
      icon: Clock,
      title: "Resume reviewed by Google recruiter",
      description: "Your resume passed initial screening. Next steps provided in your inbox.",
      timestamp: "2h ago",
      categoryColor: "bg-blue-500",
    },
    {
      icon: TrendingUp,
      title: "New skill match: Machine Learning",
      description: "5 new jobs match your ML skills. Update your profile to increase visibility.",
      timestamp: "5h ago",
      categoryColor: "bg-purple-500",
    },
    {
      icon: MapPin,
      title: "Career Fair Registration Open",
      description: "Tech Innovators Career Fair is now open for registration on June 15th.",
      timestamp: "1d ago",
      categoryColor: "bg-green-500",
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">CareerSync AI</h1>
          <p className="text-muted-foreground">
            Your AI-powered platform for career growth, internships, and global job opportunities
          </p>
        </div>

        <div className="relative">
          <div className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-2xl font-bold">Find Your Dream Career</h2>
              <p className="opacity-90">
                Let our AI match you with perfect opportunities based on your skills, preferences, and career goals
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input 
                    className="pl-10 h-12 w-full bg-white text-black" 
                    placeholder="Job titles, skills, or keywords"
                  />
                </div>
                <Button className="h-12 bg-white text-blue-600 hover:bg-gray-100">
                  Find Jobs
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {careerStats.map((stat, index) => (
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

        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Featured Opportunities</CardTitle>
                  <Tabs defaultValue="all" className="w-[300px]">
                    <TabsList>
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="jobs">Jobs</TabsTrigger>
                      <TabsTrigger value="internships">Internships</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {featuredJobs.map(job => (
                    <div 
                      key={job.id}
                      className="flex flex-col md:flex-row md:items-center justify-between rounded-lg border p-4 hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-blue-100 p-2">
                          <job.icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">{job.title}</h3>
                          <div className="text-sm text-muted-foreground">
                            {job.company} · {job.location}
                          </div>
                          <div className="mt-1 flex items-center gap-2 text-xs">
                            <span className="rounded-full bg-green-100 px-2 py-0.5 text-green-800">
                              {job.type}
                            </span>
                            <span className="text-muted-foreground">{job.salary}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 md:mt-0 flex items-center gap-4">
                        <span className="text-xs text-muted-foreground">{job.posted}</span>
                        <Button variant="outline" size="sm">Apply</Button>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-center mt-2">
                    <Button variant="outline">View All Opportunities</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
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
      </div>
    </Layout>
  );
}
