import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Users, 
  UserPlus, 
  BarChart3, 
  LogOut, 
  Plus, 
  Check, 
  X, 
  Wrench,
  ClipboardList,
  AlertTriangle,
  Calendar,
  Upload,
  Settings,
  Eye
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
  };

  // Mock data
  const tenants = [
    { id: 1, name: "John Smith", room: "A101", contact: "+1-555-0101", status: "Active" },
    { id: 2, name: "Sarah Johnson", room: "A102", contact: "+1-555-0102", status: "Active" },
    { id: 3, name: "Mike Wilson", room: "B201", contact: "+1-555-0201", status: "Pending" },
    { id: 4, name: "Emily Davis", room: "B202", contact: "+1-555-0202", status: "Active" },
  ];

  const visitorRequests = [
    { id: 1, tenant: "John Smith", visitor: "Jane Doe", date: "2024-01-15", time: "14:00", status: "Pending" },
    { id: 2, tenant: "Sarah Johnson", visitor: "Bob Wilson", date: "2024-01-15", time: "16:30", status: "Approved" },
    { id: 3, tenant: "Emily Davis", visitor: "Alice Brown", date: "2024-01-16", time: "10:00", status: "Pending" },
  ];

  const maintenanceRequests = [
    { id: 1, tenant: "John Smith", room: "A101", issue: "Leaky faucet", priority: "Medium", status: "Assigned", technician: "Tom Fix" },
    { id: 2, tenant: "Mike Wilson", room: "B201", issue: "AC not working", priority: "High", status: "In Progress", technician: "Bob Repair" },
    { id: 3, tenant: "Sarah Johnson", room: "A102", issue: "Light bulb replacement", priority: "Low", status: "Pending", technician: "" },
  ];

  const propertyTasks = [
    { id: 1, task: "Monthly HVAC inspection", assigned: "Tom Fix", dueDate: "2024-01-20", status: "Scheduled" },
    { id: 2, task: "Fire safety system check", assigned: "Safety Co.", dueDate: "2024-01-25", status: "Overdue" },
    { id: 3, task: "Elevator maintenance", assigned: "Elevator Inc.", dueDate: "2024-01-30", status: "In Progress" },
  ];

  return (
    <div className="min-h-screen bg-gradient-background">
      <header className="bg-card border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold">Property Management Admin</h1>
            </div>
            <Button
              variant="ghost"
              onClick={handleSignOut}
              className="flex items-center space-x-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground">Admin Dashboard</h2>
          <p className="text-muted-foreground mt-2">Comprehensive property and tenant management</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Tenant Management */}
          <Card className="bg-gradient-card border-0 shadow-card lg:col-span-2 xl:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Tenant Management</CardTitle>
                    <CardDescription>Manage all tenant accounts</CardDescription>
                  </div>
                </div>
                <Button variant="professional" size="sm">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add New Tenant
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Room</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tenants.map((tenant) => (
                    <TableRow key={tenant.id}>
                      <TableCell className="font-medium">{tenant.name}</TableCell>
                      <TableCell>{tenant.room}</TableCell>
                      <TableCell>{tenant.contact}</TableCell>
                      <TableCell>
                        <Badge variant={tenant.status === "Active" ? "default" : "secondary"}>
                          {tenant.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Utility Monitoring */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Utility Monitoring</CardTitle>
                  <CardDescription>Building-wide usage</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="h-32 bg-muted/20 rounded-lg flex items-center justify-center border-2 border-dashed border-muted">
                  <p className="text-sm text-muted-foreground">Electricity Usage Chart</p>
                </div>
                <div className="h-32 bg-muted/20 rounded-lg flex items-center justify-center border-2 border-dashed border-muted">
                  <p className="text-sm text-muted-foreground">Water Usage Chart</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-primary">1,240 kWh</p>
                    <p className="text-xs text-muted-foreground">This Month</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">850 gal</p>
                    <p className="text-xs text-muted-foreground">Water Usage</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Visitor Tracking */}
          <Card className="bg-gradient-card border-0 shadow-card lg:col-span-2">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <ClipboardList className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Visitor Tracking</CardTitle>
                  <CardDescription>Manage visitor requests and history</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tenant</TableHead>
                    <TableHead>Visitor</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {visitorRequests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell className="font-medium">{request.tenant}</TableCell>
                      <TableCell>{request.visitor}</TableCell>
                      <TableCell>{request.date} {request.time}</TableCell>
                      <TableCell>
                        <Badge variant={request.status === "Approved" ? "default" : "secondary"}>
                          {request.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {request.status === "Pending" && (
                          <div className="flex space-x-1">
                            <Button variant="ghost" size="sm" className="text-green-600">
                              <Check className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-600">
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Bulletin Board Management */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Bulletin Board</CardTitle>
                  <CardDescription>Create announcements & events</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="announcement-title">Announcement Title</Label>
                  <Input id="announcement-title" placeholder="Enter title..." />
                </div>
                <div>
                  <Label htmlFor="announcement-content">Content</Label>
                  <Textarea id="announcement-content" placeholder="Write your announcement..." />
                </div>
                <div>
                  <Label htmlFor="expiry-date">Expiry Date</Label>
                  <Input id="expiry-date" type="date" />
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Memo
                  </Button>
                  <Button variant="outline" size="sm">
                    Create Poll
                  </Button>
                </div>
                <Button variant="professional" className="w-full">
                  Publish Announcement
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Maintenance Requests */}
          <Card className="bg-gradient-card border-0 shadow-card lg:col-span-2">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Maintenance Requests</CardTitle>
                  <CardDescription>Manage tenant maintenance issues</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tenant</TableHead>
                    <TableHead>Room</TableHead>
                    <TableHead>Issue</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Technician</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {maintenanceRequests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell className="font-medium">{request.tenant}</TableCell>
                      <TableCell>{request.room}</TableCell>
                      <TableCell>{request.issue}</TableCell>
                      <TableCell>
                        <Badge variant={request.priority === "High" ? "destructive" : request.priority === "Medium" ? "default" : "secondary"}>
                          {request.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={request.status === "In Progress" ? "default" : "secondary"}>
                          {request.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{request.technician || "Unassigned"}</TableCell>
                      <TableCell>
                        <Select>
                          <SelectTrigger className="w-24">
                            <SelectValue placeholder="Assign" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tom">Tom Fix</SelectItem>
                            <SelectItem value="bob">Bob Repair</SelectItem>
                            <SelectItem value="jane">Jane Tech</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Property Maintenance Monitoring */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Settings className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Property Maintenance</CardTitle>
                  <CardDescription>Ongoing tasks & alerts</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {propertyTasks.map((task) => (
                  <div key={task.id} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{task.task}</p>
                      <p className="text-xs text-muted-foreground">Assigned: {task.assigned}</p>
                      <p className="text-xs text-muted-foreground">Due: {task.dueDate}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {task.status === "Overdue" && (
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                      )}
                      <Badge variant={
                        task.status === "Overdue" ? "destructive" : 
                        task.status === "In Progress" ? "default" : 
                        "secondary"
                      }>
                        {task.status}
                      </Badge>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Maintenance Task
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">24</p>
                <p className="text-sm text-muted-foreground">Total Properties</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">18</p>
                <p className="text-sm text-muted-foreground">Occupied Units</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">$45,200</p>
                <p className="text-sm text-muted-foreground">Monthly Revenue</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">75%</p>
                <p className="text-sm text-muted-foreground">Occupancy Rate</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;