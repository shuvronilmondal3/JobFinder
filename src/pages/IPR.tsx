
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
import { PieChart } from "@/components/charts/PieChart";
import { 
  Search, 
  FileText, 
  Download, 
  Plus
} from "lucide-react";
import { iprApplications } from "@/data/mockData";

export default function IPR() {
  const iprTypeDistribution = [
    { name: "Patents", value: 65, color: "hsl(var(--ipr))" },
    { name: "Copyrights", value: 15, color: "#A78BFA" },
    { name: "Trademarks", value: 12, color: "#C4B5FD" },
    { name: "Industrial Designs", value: 8, color: "#DDD6FE" },
  ];

  return (
    <Layout>
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Intellectual Property</h1>
            <p className="text-muted-foreground">
              Manage patents, copyrights, and other intellectual property rights
            </p>
          </div>
          <Button className="bg-[hsl(var(--ipr))]">
            <Plus className="mr-2 h-4 w-4" />
            New Application
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Filed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">
                In the last 12 months
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Granted</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">11</div>
              <p className="text-xs text-muted-foreground">
                In the last 12 months
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$580K</div>
              <p className="text-xs text-muted-foreground">
                From licensing and royalties
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mt-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>IPR Applications</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search applications..."
                      className="pl-8 w-[250px]"
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
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
                    <TableHead>Inventors</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Filing Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Reference</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {iprApplications.map((application) => (
                    <TableRow key={application.id}>
                      <TableCell className="font-medium">{application.title}</TableCell>
                      <TableCell>{application.inventors.join(", ")}</TableCell>
                      <TableCell>{application.type}</TableCell>
                      <TableCell>{application.filingDate}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          application.status === "Granted" 
                            ? "bg-green-100 text-green-800" 
                            : application.status === "Filed"
                            ? "bg-blue-100 text-blue-800"
                            : application.status === "Registered"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {application.status}
                        </span>
                      </TableCell>
                      <TableCell>{application.reference}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>IPR Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <PieChart
                title=""
                data={iprTypeDistribution}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
