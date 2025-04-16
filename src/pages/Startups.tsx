
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardFooter,
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { PieChart } from "@/components/charts/PieChart";
import { 
  Search, 
  FileText, 
  Calendar, 
  Users,
  Plus,
  ArrowRight
} from "lucide-react";
import { startups } from "@/data/mockData";

export default function Startups() {
  const startupSectors = [
    { name: "CleanTech", value: 30, color: "#F59E0B" },
    { name: "HealthTech", value: 25, color: "#FB923C" },
    { name: "EdTech", value: 20, color: "#FDBA74" },
    { name: "AgriTech", value: 15, color: "#FED7AA" },
    { name: "Others", value: 10, color: "#FFEDD5" },
  ];

  return (
    <Layout>
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Startup Ecosystem</h1>
            <p className="text-muted-foreground">
              Monitor incubated startups, funding, and entrepreneurial activities
            </p>
          </div>
          <Button className="bg-[hsl(var(--startup))]">
            <Plus className="mr-2 h-4 w-4" />
            Register New Startup
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Active Startups</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">
                In incubation program
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Total Investment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$8.2M</div>
              <p className="text-xs text-muted-foreground">
                Raised by incubated startups
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Jobs Created</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">120+</div>
              <p className="text-xs text-muted-foreground">
                By incubated companies
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Success Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">68%</div>
              <p className="text-xs text-muted-foreground">
                Survival after 2 years
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mt-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Incubated Startups</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search startups..."
                      className="pl-8 w-[250px]"
                    />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Domain</TableHead>
                    <TableHead>Founded</TableHead>
                    <TableHead>Funding</TableHead>
                    <TableHead>Stage</TableHead>
                    <TableHead>Founders</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {startups.map((startup) => (
                    <TableRow key={startup.id}>
                      <TableCell className="font-medium">{startup.name}</TableCell>
                      <TableCell>{startup.domain}</TableCell>
                      <TableCell>{startup.founded}</TableCell>
                      <TableCell>{startup.funding}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          startup.stage === "Series A" 
                            ? "bg-green-100 text-green-800" 
                            : startup.stage === "Seed"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {startup.stage}
                        </span>
                      </TableCell>
                      <TableCell>{startup.founders.join(", ")}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Startup Sectors</CardTitle>
            </CardHeader>
            <CardContent>
              <PieChart
                title=""
                data={startupSectors}
              />
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Upcoming Events for Entrepreneurs</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col space-y-3 rounded-md border p-4">
              <div className="flex justify-between">
                <h3 className="font-medium">Pitch Perfect Workshop</h3>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Workshop</span>
              </div>
              <p className="text-sm text-muted-foreground">Learn how to create compelling pitches for investors.</p>
              <div className="flex items-center text-xs text-muted-foreground">
                <Calendar className="mr-1 h-3 w-3" />
                <span>May 10, 2025</span>
                <Users className="ml-3 mr-1 h-3 w-3" />
                <span>30 spots</span>
              </div>
              <Button variant="outline" size="sm" className="mt-2 w-full">
                Register
                <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </div>
            <div className="flex flex-col space-y-3 rounded-md border p-4">
              <div className="flex justify-between">
                <h3 className="font-medium">Investor Networking</h3>
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Networking</span>
              </div>
              <p className="text-sm text-muted-foreground">Connect with potential investors and venture capitalists.</p>
              <div className="flex items-center text-xs text-muted-foreground">
                <Calendar className="mr-1 h-3 w-3" />
                <span>June 5, 2025</span>
                <Users className="ml-3 mr-1 h-3 w-3" />
                <span>50 spots</span>
              </div>
              <Button variant="outline" size="sm" className="mt-2 w-full">
                Register
                <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
