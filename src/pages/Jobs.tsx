
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, BriefcaseBusiness, Filter, MapPin, Clock, DollarSign } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Jobs() {
  // Mock job listings
  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp Global",
      location: "San Francisco, CA",
      salary: "$130,000 - $160,000",
      description: "We're looking for a talented Senior Software Engineer to join our growing team. In this role, you'll develop innovative solutions and lead technical initiatives.",
      posted: "2 days ago",
      type: "Full-time",
      requirements: ["5+ years of experience", "React expertise", "Backend knowledge", "Team leadership"],
      tags: ["Remote friendly", "Healthcare", "401k", "Flexible hours"],
    },
    {
      id: 2,
      title: "Data Scientist",
      company: "Analytics Pro",
      location: "Boston, MA",
      salary: "$110,000 - $140,000",
      description: "Join our data science team to build machine learning models that drive business decisions and create value from complex datasets.",
      posted: "1 week ago",
      type: "Full-time",
      requirements: ["3+ years of ML experience", "Python proficiency", "Statistical analysis", "Data visualization"],
      tags: ["Hybrid work", "Growth opportunity", "International team"],
    },
    {
      id: 3,
      title: "Product Manager",
      company: "InnovateTech",
      location: "Austin, TX",
      salary: "$120,000 - $150,000",
      description: "Lead product development from concept to launch, working closely with engineering, design, and marketing teams to deliver exceptional user experiences.",
      posted: "3 days ago",
      type: "Full-time",
      requirements: ["4+ years product experience", "Technical background", "Agile methodologies"],
      tags: ["Remote optional", "Equity", "Unlimited PTO"],
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "CloudSystems",
      location: "Seattle, WA",
      salary: "$125,000 - $155,000",
      description: "Design and implement CI/CD pipelines, infrastructure as code, and cloud-native solutions to support our growing platform.",
      posted: "5 days ago",
      type: "Full-time",
      requirements: ["AWS certification", "Kubernetes experience", "Terraform", "Linux administration"],
      tags: ["Fully remote", "Professional development fund"],
    },
    {
      id: 5,
      title: "Full Stack Developer",
      company: "WebSolutions",
      location: "Chicago, IL",
      salary: "$90,000 - $120,000",
      description: "Build modern web applications using the latest technologies and frameworks to deliver exceptional user experiences.",
      posted: "1 day ago",
      type: "Full-time",
      requirements: ["JavaScript proficiency", "React experience", "Node.js", "Database design"],
      tags: ["Flexible schedule", "Health benefits", "Growth potential"],
    }
  ];

  return (
    <Layout>
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Job Opportunities</h1>
          <p className="text-muted-foreground">
            Explore job opportunities matched to your skills and career goals
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input 
              className="pl-10 py-6" 
              placeholder="Job titles, keywords, or companies"
            />
          </div>
          <div className="relative flex-grow">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input 
              className="pl-10 py-6" 
              placeholder="Location or remote"
            />
          </div>
          <Button className="h-12 bg-blue-600 hover:bg-blue-700">
            Search
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters sidebar */}
          <Card className="md:w-64 shrink-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-4 w-4" /> Filters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Job Type</h3>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="full-time" className="rounded border-gray-300" />
                    <label htmlFor="full-time" className="text-sm">Full-time</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="part-time" className="rounded border-gray-300" />
                    <label htmlFor="part-time" className="text-sm">Part-time</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="contract" className="rounded border-gray-300" />
                    <label htmlFor="contract" className="text-sm">Contract</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="remote" className="rounded border-gray-300" />
                    <label htmlFor="remote" className="text-sm">Remote</label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Experience Level</h3>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="entry" className="rounded border-gray-300" />
                    <label htmlFor="entry" className="text-sm">Entry Level</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="mid" className="rounded border-gray-300" />
                    <label htmlFor="mid" className="text-sm">Mid Level</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="senior" className="rounded border-gray-300" />
                    <label htmlFor="senior" className="text-sm">Senior Level</label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Salary Range</h3>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="range1" className="rounded border-gray-300" />
                    <label htmlFor="range1" className="text-sm">$50k - $80k</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="range2" className="rounded border-gray-300" />
                    <label htmlFor="range2" className="text-sm">$80k - $120k</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="range3" className="rounded border-gray-300" />
                    <label htmlFor="range3" className="text-sm">$120k+</label>
                  </div>
                </div>
              </div>

              <Button className="w-full" variant="outline">Apply Filters</Button>
            </CardContent>
          </Card>

          {/* Job listings */}
          <div className="flex-grow space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Showing {jobs.length} job listings</p>
              <Tabs defaultValue="relevance">
                <TabsList>
                  <TabsTrigger value="relevance">Relevance</TabsTrigger>
                  <TabsTrigger value="recent">Most Recent</TabsTrigger>
                  <TabsTrigger value="salary">Salary</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            {jobs.map(job => (
              <Card key={job.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{job.title}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <BriefcaseBusiness className="h-4 w-4" />
                          <span>{job.company}</span>
                          <span>•</span>
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700">Apply</Button>
                    </div>
                    
                    <p className="text-sm">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, index) => (
                        <span key={index} className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">
                          {req}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag, index) => (
                        <span key={index} className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{job.posted}</span>
                        </div>
                        <span>•</span>
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <div className="flex justify-center mt-6">
              <Button variant="outline" className="mr-2">Previous</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
