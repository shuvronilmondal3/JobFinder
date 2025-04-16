
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
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
import { BarChart } from "@/components/charts/BarChart";
import { Progress } from "@/components/ui/progress";
import { 
  Search, 
  FileText, 
  Download, 
  Plus
} from "lucide-react";
import { researchProjects, performanceData, performanceCategories } from "@/data/mockData";

export default function Research() {
  return (
    <Layout>
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Research Projects</h1>
            <p className="text-muted-foreground">
              Manage and monitor all research projects across departments
            </p>
          </div>
          <Button className="bg-[hsl(var(--research))]">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Total Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">42</div>
              <p className="text-xs text-muted-foreground">
                Across 8 departments
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Total Funding</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$4.2M</div>
              <p className="text-xs text-muted-foreground">
                FY 2024-2025
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Publications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">78</div>
              <p className="text-xs text-muted-foreground">
                In the last 12 months
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Research Projects</CardTitle>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search projects..."
                    className="pl-8 w-[250px]"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <FileText className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Investigators</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Funding</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Progress</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {researchProjects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell className="font-medium">{project.title}</TableCell>
                    <TableCell>{project.investigators.join(", ")}</TableCell>
                    <TableCell>{project.department}</TableCell>
                    <TableCell>{project.funding}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        {project.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={project.progress} className="h-2" />
                        <span className="text-xs font-medium">{project.progress}%</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="mt-6">
          <BarChart
            title="Research Output by Department"
            data={performanceData}
            categories={[{ key: "research", name: "Publications", color: "hsl(var(--research))" }]}
          />
        </div>
      </div>
    </Layout>
  );
}
