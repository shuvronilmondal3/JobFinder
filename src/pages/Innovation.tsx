
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
import { 
  Search, 
  FileText, 
  Calendar, 
  Users,
  Plus,
  ArrowRight,
  Download
} from "lucide-react";
import { innovations } from "@/data/mockData";

export default function Innovation() {
  return (
    <Layout>
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Innovation Initiatives</h1>
            <p className="text-muted-foreground">
              Manage innovation challenges, hackathons, and collaborative projects
            </p>
          </div>
          <Button className="bg-[hsl(var(--innovation))]">
            <Plus className="mr-2 h-4 w-4" />
            New Initiative
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="border-l-4 border-l-[hsl(var(--innovation))]">
            <CardHeader className="pb-2">
              <CardTitle>Active Initiatives</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">27</div>
              <p className="text-xs text-muted-foreground">
                Across 5 categories
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-[hsl(var(--innovation))]">
            <CardHeader className="pb-2">
              <CardTitle>Participants</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">480+</div>
              <p className="text-xs text-muted-foreground">
                From academia and industry
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-[hsl(var(--innovation))]">
            <CardHeader className="pb-2">
              <CardTitle>Prototypes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">42</div>
              <p className="text-xs text-muted-foreground">
                Developed in the last year
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Innovation Activities</CardTitle>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search initiatives..."
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
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Deadline</TableHead>
                  <TableHead>Participants</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {innovations.map((initiative) => (
                  <TableRow key={initiative.id}>
                    <TableCell className="font-medium">{initiative.title}</TableCell>
                    <TableCell>{initiative.category}</TableCell>
                    <TableCell>{initiative.deadline}</TableCell>
                    <TableCell>{initiative.participants}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        initiative.status === "Active" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-blue-100 text-blue-800"
                      }`}>
                        {initiative.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-start space-x-4 rounded-md border p-4">
                <Calendar className="h-10 w-10 text-[hsl(var(--innovation))]" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">AI for Good Hackathon</p>
                  <p className="text-sm text-muted-foreground">March 15-17, 2025</p>
                  <p className="text-xs text-muted-foreground">48 Participants</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 rounded-md border p-4">
                <Calendar className="h-10 w-10 text-[hsl(var(--innovation))]" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Biomedical Innovation Workshop</p>
                  <p className="text-sm text-muted-foreground">June 20-21, 2025</p>
                  <p className="text-xs text-muted-foreground">25 Participants</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Innovation Resources</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="flex items-center justify-between rounded-md border p-4">
                <div className="flex items-center space-x-4">
                  <FileText className="h-5 w-5 text-[hsl(var(--innovation))]" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Innovation Toolkit</p>
                    <p className="text-xs text-muted-foreground">PDF · 2.4MB</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between rounded-md border p-4">
                <div className="flex items-center space-x-4">
                  <FileText className="h-5 w-5 text-[hsl(var(--innovation))]" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Design Thinking Guide</p>
                    <p className="text-xs text-muted-foreground">PDF · 1.8MB</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between rounded-md border p-4">
                <div className="flex items-center space-x-4">
                  <FileText className="h-5 w-5 text-[hsl(var(--innovation))]" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Innovation Metrics Template</p>
                    <p className="text-xs text-muted-foreground">XLSX · 560KB</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
