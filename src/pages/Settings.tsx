
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
  Save
} from "lucide-react";

export default function Settings() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    weekly: true,
    marketing: false,
  });

  return (
    <Layout>
      <div className="flex flex-col space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account settings and preferences
          </p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="mt-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
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
                  <Label htmlFor="department">Department</Label>
                  <Input id="department" placeholder="Computer Science" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="Professor" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>
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
                  Manage how you receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between space-y-1">
                  <div className="space-y-1">
                    <p className="font-medium leading-none">Email notifications</p>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications via email
                    </p>
                  </div>
                  <Switch 
                    checked={notifications.email} 
                    onCheckedChange={(checked) => setNotifications({...notifications, email: checked})} 
                  />
                </div>
                <div className="flex items-center justify-between space-y-1">
                  <div className="space-y-1">
                    <p className="font-medium leading-none">Push notifications</p>
                    <p className="text-sm text-muted-foreground">
                      Receive push notifications in your browser
                    </p>
                  </div>
                  <Switch 
                    checked={notifications.push} 
                    onCheckedChange={(checked) => setNotifications({...notifications, push: checked})} 
                  />
                </div>
                <div className="flex items-center justify-between space-y-1">
                  <div className="space-y-1">
                    <p className="font-medium leading-none">Weekly digest</p>
                    <p className="text-sm text-muted-foreground">
                      Receive a summary of activities every week
                    </p>
                  </div>
                  <Switch 
                    checked={notifications.weekly} 
                    onCheckedChange={(checked) => setNotifications({...notifications, weekly: checked})} 
                  />
                </div>
                <div className="flex items-center justify-between space-y-1">
                  <div className="space-y-1">
                    <p className="font-medium leading-none">Marketing emails</p>
                    <p className="text-sm text-muted-foreground">
                      Receive emails about new features and opportunities
                    </p>
                  </div>
                  <Switch 
                    checked={notifications.marketing} 
                    onCheckedChange={(checked) => setNotifications({...notifications, marketing: checked})} 
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save preferences
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="security" className="mt-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>
                  Manage your password and security settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm">Confirm password</Label>
                  <Input id="confirm" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>
                  <Lock className="mr-2 h-4 w-4" />
                  Update password
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="advanced" className="mt-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Settings</CardTitle>
                <CardDescription>
                  Manage advanced settings for your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Data Export</Label>
                  <Button variant="outline" className="w-full">Export all data</Button>
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
