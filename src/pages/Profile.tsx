
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  User, Edit, FilePlus, Briefcase, GraduationCap, Award, 
  BookOpen, Languages, Check, Clock, ArrowUpRight
} from "lucide-react";

export default function Profile() {
  // Mock user data
  const user = {
    name: "Alex Johnson",
    title: "Software Engineer",
    location: "San Francisco, CA",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    about: "Passionate software engineer with 3+ years of experience in full-stack development. Skilled in React, Node.js, and cloud technologies. Looking for new opportunities in innovative tech companies.",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "AWS", level: 70 },
    ],
    education: [
      {
        degree: "Master of Computer Science",
        institution: "Stanford University",
        year: "2020-2022",
      },
      {
        degree: "Bachelor of Science in Software Engineering",
        institution: "University of California, Berkeley",
        year: "2016-2020",
      }
    ],
    experience: [
      {
        position: "Software Engineer",
        company: "Tech Innovations Inc.",
        duration: "Jan 2022 - Present",
        description: "Developing and maintaining web applications using React and Node.js. Implementing CI/CD pipelines and cloud infrastructure.",
      },
      {
        position: "Junior Developer",
        company: "Digital Solutions",
        duration: "Jun 2020 - Dec 2021",
        description: "Worked on front-end development using React and collaborated with the design team to implement responsive UI components.",
      }
    ],
    certifications: [
      {
        name: "AWS Certified Developer",
        issuer: "Amazon Web Services",
        date: "2022",
      },
      {
        name: "Full Stack Web Development",
        issuer: "Udacity",
        date: "2021",
      }
    ],
    languages: [
      { name: "English", proficiency: "Native" },
      { name: "Spanish", proficiency: "Intermediate" },
      { name: "French", proficiency: "Basic" },
    ],
    profileCompletion: 85,
  };

  // Mock job applications
  const applications = [
    {
      id: 1,
      position: "Senior React Developer",
      company: "TechCorp Global",
      date: "April 10, 2025",
      status: "Interview Scheduled",
      color: "text-green-600 bg-green-100",
    },
    {
      id: 2,
      position: "Full Stack Engineer",
      company: "Innovate Solutions",
      date: "April 5, 2025",
      status: "Application Submitted",
      color: "text-blue-600 bg-blue-100",
    },
    {
      id: 3,
      position: "Frontend Developer",
      company: "WebTech Inc.",
      date: "April 2, 2025",
      status: "Resume Reviewed",
      color: "text-amber-600 bg-amber-100",
    },
  ];

  // Mock saved jobs
  const savedJobs = [
    {
      id: 1,
      position: "React Native Developer",
      company: "Mobile Innovations",
      location: "Remote",
      posted: "3 days ago",
    },
    {
      id: 2,
      position: "Software Architect",
      company: "Enterprise Solutions",
      location: "New York, NY",
      posted: "1 week ago",
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col space-y-6">
        <Tabs defaultValue="profile" className="w-full">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
              <p className="text-muted-foreground">
                Manage your profile, applications, and saved jobs
              </p>
            </div>
            <TabsList>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="saved">Saved Jobs</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="profile" className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Profile info card */}
              <div className="md:w-1/3 space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative">
                        <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center">
                          <User className="h-12 w-12 text-blue-600" />
                        </div>
                        <button className="absolute bottom-0 right-0 rounded-full bg-blue-600 p-2">
                          <Edit className="h-4 w-4 text-white" />
                        </button>
                      </div>
                      <h2 className="mt-4 text-xl font-bold">{user.name}</h2>
                      <p className="text-blue-600">{user.title}</p>
                      <p className="text-sm text-muted-foreground">{user.location}</p>
                      
                      <div className="mt-6 w-full">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm">Profile Completion</span>
                          <span className="text-sm font-medium">{user.profileCompletion}%</span>
                        </div>
                        <Progress value={user.profileCompletion} className="h-2" />
                      </div>
                      
                      <div className="mt-6 w-full">
                        <Button className="w-full">
                          <FilePlus className="mr-2 h-4 w-4" />
                          Update Resume
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="text-sm">{user.email}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Phone</p>
                      <p className="text-sm">{user.phone}</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-sm font-medium">
                      <Languages className="h-4 w-4" />
                      Languages
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {user.languages.map((language, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-sm">{language.name}</span>
                        <span className="text-sm text-muted-foreground">{language.proficiency}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
              
              {/* Main profile content */}
              <div className="md:w-2/3 space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between">
                      <CardTitle>About</CardTitle>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{user.about}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5" />
                        Experience
                      </CardTitle>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {user.experience.map((exp, index) => (
                      <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                        <div className="flex justify-between mb-1">
                          <h3 className="font-medium">{exp.position}</h3>
                          <span className="text-sm text-muted-foreground">{exp.duration}</span>
                        </div>
                        <p className="text-sm text-blue-600 mb-2">{exp.company}</p>
                        <p className="text-sm">{exp.description}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <GraduationCap className="h-5 w-5" />
                        Education
                      </CardTitle>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {user.education.map((edu, index) => (
                      <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                        <div className="flex justify-between mb-1">
                          <h3 className="font-medium">{edu.degree}</h3>
                          <span className="text-sm text-muted-foreground">{edu.year}</span>
                        </div>
                        <p className="text-sm text-blue-600">{edu.institution}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <Award className="h-5 w-5" />
                          Skills
                        </CardTitle>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {user.skills.map((skill, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between">
                            <span className="text-sm">{skill.name}</span>
                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-1" />
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <BookOpen className="h-5 w-5" />
                          Certifications
                        </CardTitle>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {user.certifications.map((cert, index) => (
                        <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                          <h3 className="font-medium">{cert.name}</h3>
                          <div className="flex justify-between mt-1">
                            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                            <p className="text-sm text-muted-foreground">{cert.date}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="applications">
            <Card>
              <CardHeader>
                <CardTitle>Job Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applications.map((app) => (
                    <div 
                      key={app.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between rounded-lg border p-4"
                    >
                      <div className="space-y-1">
                        <h3 className="font-medium">{app.position}</h3>
                        <p className="text-sm text-muted-foreground">{app.company}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-3 sm:mt-0">
                        <div className="text-sm text-muted-foreground">
                          Applied: {app.date}
                        </div>
                        <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${app.color}`}>
                          {app.status}
                        </div>
                        <Button variant="outline" size="sm">View</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="saved">
            <Card>
              <CardHeader>
                <CardTitle>Saved Jobs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {savedJobs.map((job) => (
                    <div 
                      key={job.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between rounded-lg border p-4"
                    >
                      <div className="space-y-1">
                        <h3 className="font-medium">{job.position}</h3>
                        <p className="text-sm text-muted-foreground">
                          {job.company} • {job.location}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 mt-3 sm:mt-0">
                        <div className="text-xs text-muted-foreground">
                          Posted: {job.posted}
                        </div>
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          View Job
                          <ArrowUpRight className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
