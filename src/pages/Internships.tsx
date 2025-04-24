
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Filter, MapPin, Clock, GraduationCap, Building } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Internships() {
  // Mock internship listings
  const internships = [
    {
      id: 1,
      title: "Software Development Intern",
      company: "Tech Innovations",
      location: "San Francisco, CA (Hybrid)",
      duration: "3 months",
      stipend: "$25 - $30/hr",
      description: "Join our engineering team to build features for our flagship product using React, Node.js and AWS.",
      posted: "3 days ago",
      requirements: ["Computer Science student", "React knowledge", "JavaScript proficiency"],
      tags: ["Summer 2025", "Tech", "Engineering"]
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "Analytics Pro",
      location: "Remote",
      duration: "6 months",
      stipend: "$28/hr",
      description: "Work on machine learning models to improve our recommendation engine and analyze user behavior patterns.",
      posted: "1 week ago",
      requirements: ["Statistics background", "Python", "Machine learning basics"],
      tags: ["Fall 2025", "Data", "AI/ML"]
    },
    {
      id: 3,
      title: "UX/UI Design Intern",
      company: "Creative Digital",
      location: "New York, NY (On-site)",
      duration: "4 months",
      stipend: "$22/hr",
      description: "Create wireframes, prototypes, and visual designs for our client projects across various industries.",
      posted: "2 days ago",
      requirements: ["Design portfolio", "Figma proficiency", "User research experience"],
      tags: ["Summer 2025", "Design", "Creative"]
    },
    {
      id: 4,
      title: "Marketing Intern",
      company: "Brand Forward",
      location: "Chicago, IL (Hybrid)",
      duration: "3 months",
      stipend: "$20/hr",
      description: "Assist with social media campaigns, content creation, and marketing analytics for our clients.",
      posted: "5 days ago",
      requirements: ["Marketing student", "Social media knowledge", "Content creation skills"],
      tags: ["Fall 2025", "Marketing", "Content"]
    },
    {
      id: 5,
      title: "Product Management Intern",
      company: "ProductLaunch",
      location: "Austin, TX (On-site)",
      duration: "6 months",
      stipend: "$26/hr",
      description: "Work with cross-functional teams to define product requirements and improve the user experience.",
      posted: "1 day ago",
      requirements: ["Product thinking", "Technical aptitude", "Communication skills"],
      tags: ["Spring 2025", "Product", "Business"]
    }
  ];

  return (
    <Layout>
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Internship Opportunities</h1>
          <p className="text-muted-foreground">
            Find the perfect internship to kickstart your career
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input 
              className="pl-10 py-6" 
              placeholder="Internship titles, keywords, or companies"
            />
          </div>
          <div className="relative flex-grow">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input 
              className="pl-10 py-6" 
              placeholder="Location or remote"
            />
          </div>
          <Button className="h-12 bg-purple-600 hover:bg-purple-700">
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
                <h3 className="text-sm font-medium">Duration</h3>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="short" className="rounded border-gray-300" />
                    <label htmlFor="short" className="text-sm">1-3 months</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="medium" className="rounded border-gray-300" />
                    <label htmlFor="medium" className="text-sm">3-6 months</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="long" className="rounded border-gray-300" />
                    <label htmlFor="long" className="text-sm">6+ months</label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Work Type</h3>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="remote" className="rounded border-gray-300" />
                    <label htmlFor="remote" className="text-sm">Remote</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="hybrid" className="rounded border-gray-300" />
                    <label htmlFor="hybrid" className="text-sm">Hybrid</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="onsite" className="rounded border-gray-300" />
                    <label htmlFor="onsite" className="text-sm">On-site</label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Season</h3>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="summer" className="rounded border-gray-300" />
                    <label htmlFor="summer" className="text-sm">Summer 2025</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="fall" className="rounded border-gray-300" />
                    <label htmlFor="fall" className="text-sm">Fall 2025</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="spring" className="rounded border-gray-300" />
                    <label htmlFor="spring" className="text-sm">Spring 2025</label>
                  </div>
                </div>
              </div>

              <Button className="w-full" variant="outline">Apply Filters</Button>
            </CardContent>
          </Card>

          {/* Internship listings */}
          <div className="flex-grow space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Showing {internships.length} internship listings</p>
              <Tabs defaultValue="relevance">
                <TabsList>
                  <TabsTrigger value="relevance">Relevance</TabsTrigger>
                  <TabsTrigger value="recent">Most Recent</TabsTrigger>
                  <TabsTrigger value="stipend">Highest Stipend</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            {internships.map(internship => (
              <Card key={internship.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{internship.title}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Building className="h-4 w-4" />
                          <span>{internship.company}</span>
                          <span>•</span>
                          <MapPin className="h-4 w-4" />
                          <span>{internship.location}</span>
                        </div>
                      </div>
                      <Button
  className="bg-purple-600 hover:bg-purple-700"
  onClick={() =>
    window.open(internship.link, "_blank", "noopener,noreferrer")
  }
>
  Apply
</Button>

                    </div>
                    
                    <p className="text-sm">{internship.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {internship.requirements.map((req, index) => (
                        <span key={index} className="rounded-full bg-purple-100 px-2 py-1 text-xs text-purple-800">
                          {req}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {internship.tags.map((tag, index) => (
                        <span key={index} className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{internship.posted}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <GraduationCap className="h-4 w-4" />
                          <span>{internship.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>Stipend: {internship.stipend}</span>
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
