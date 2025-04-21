
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Bell, 
  Lock, 
  LogOut,
  Save,
  Globe,
  Eye,
  Share,
  Briefcase,
  Sun,
  Moon
} from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export default function Settings() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    weekly: true,
    marketing: false,
  });

  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showEmail: false,
    showPhone: false,
    allowRecruiters: true,
  });

  const { theme, toggleTheme } = useTheme();

  return (
    <Layout>
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
            <p className="text-muted-foreground">
              Manage your account settings and preferences
            </p>
          </div>
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={toggleTheme}
            aria-label="Toggle light/dark mode"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
            <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
          </Button>
        </div>

        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="preferences">Job Preferences</TabsTrigger>
          </TabsList>
          
          <TabsContent value="account" className="mt-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>
                  Update your personal information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="San Francisco, CA" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Save className="mr-2 h-4 w-4" />
                  Save changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="mt-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>
                  Manage how you receive notifications about jobs and opportunities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between space-y-1">
                  <div className="space-y-1">
                    <p className="font-medium leading-none">Job alerts</p>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications about new job opportunities matching your preferences
                    </p>
                  </div>
                  <Switch 
                    checked={notifications.email} 
                    onCheckedChange={(checked) => setNotifications({...notifications, email: checked})} 
                  />
                </div>
                <div className="flex items-center justify-between space-y-1">
                  <div className="space-y-1">
                    <p className="font-medium leading-none">Application updates</p>
                    <p className="text-sm text-muted-foreground">
                      Receive updates about your job applications and interviews
                    </p>
                  </div>
                  <Switch 
                    checked={notifications.push} 
                    onCheckedChange={(checked) => setNotifications({...notifications, push: checked})} 
                  />
                </div>
                <div className="flex items-center justify-between space-y-1">
                  <div className="space-y-1">
                    <p className="font-medium leading-none">Weekly job digest</p>
                    <p className="text-sm text-muted-foreground">
                      Receive a weekly summary of jobs matching your profile
                    </p>
                  </div>
                  <Switch 
                    checked={notifications.weekly} 
                    onCheckedChange={(checked) => setNotifications({...notifications, weekly: checked})} 
                  />
                </div>
                <div className="flex items-center justify-between space-y-1">
                  <div className="space-y-1">
                    <p className="font-medium leading-none">Career tips and resources</p>
                    <p className="text-sm text-muted-foreground">
                      Receive emails about career development and industry insights
                    </p>
                  </div>
                  <Switch 
                    checked={notifications.marketing} 
                    onCheckedChange={(checked) => setNotifications({...notifications, marketing: checked})} 
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Save className="mr-2 h-4 w-4" />
                  Save preferences
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="privacy" className="mt-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>
                  Control who can see your profile and contact information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between space-y-1">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      <p className="font-medium leading-none">Profile visibility</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Make your profile visible to employers and recruiters
                    </p>
                  </div>
                  <Switch 
                    checked={privacy.profileVisible} 
                    onCheckedChange={(checked) => setPrivacy({...privacy, profileVisible: checked})} 
                  />
                </div>
                <div className="flex items-center justify-between space-y-1">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      <p className="font-medium leading-none">Show email address</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Allow employers to see your email address
                    </p>
                  </div>
                  <Switch 
                    checked={privacy.showEmail} 
                    onCheckedChange={(checked) => setPrivacy({...privacy, showEmail: checked})} 
                  />
                </div>
                <div className="flex items-center justify-between space-y-1">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      <p className="font-medium leading-none">Show phone number</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Allow employers to see your phone number
                    </p>
                  </div>
                  <Switch 
                    checked={privacy.showPhone} 
                    onCheckedChange={(checked) => setPrivacy({...privacy, showPhone: checked})} 
                  />
                </div>
                <div className="flex items-center justify-between space-y-1">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Share className="h-4 w-4" />
                      <p className="font-medium leading-none">Recruiter messages</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Allow recruiters to contact you about job opportunities
                    </p>
                  </div>
                  <Switch 
                    checked={privacy.allowRecruiters} 
                    onCheckedChange={(checked) => setPrivacy({...privacy, allowRecruiters: checked})} 
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Save className="mr-2 h-4 w-4" />
                  Save privacy settings
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Security</CardTitle>
                <CardDescription>
                  Manage your password and security settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Lock className="mr-2 h-4 w-4" />
                  Update password
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="preferences" className="mt-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Job Preferences</CardTitle>
                <CardDescription>
                  Set your preferences to receive better job matches
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="job-title">Desired job title</Label>
                  <Input id="job-title" placeholder="Software Engineer" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="job-type">Job type</Label>
                  <select id="job-type" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Freelance</option>
                    <option>Internship</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location-preference">Preferred location</Label>
                  <Input id="location-preference" placeholder="San Francisco, CA" />
                </div>
                
                <div className="flex items-center justify-between space-y-1">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      <p className="font-medium leading-none">Remote work</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Show remote job opportunities
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="salary">Minimum salary expectation</Label>
                  <select id="salary" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option>No preference</option>
                    <option>$40,000+</option>
                    <option>$60,000+</option>
                    <option>$80,000+</option>
                    <option>$100,000+</option>
                    <option>$120,000+</option>
                    <option>$150,000+</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="industries">Preferred industries</Label>
                  <Input id="industries" placeholder="Technology, Healthcare, Finance" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Save className="mr-2 h-4 w-4" />
                  Save job preferences
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Advanced Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Data Export</Label>
                  <Button variant="outline" className="w-full">Export profile data</Button>
                </div>
                <div className="space-y-2">
                  <Label>Account Actions</Label>
                  <Button variant="destructive" className="w-full">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign out of all devices
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
