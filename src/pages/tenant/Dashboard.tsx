import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Building2, LogOut, Zap, DollarSign, Users, MessageSquare, Wrench, TrendingUp, Calendar, Download, Plus, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TenantDashboard = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
  };

  // Mock data
  const mockVisitors = [
    { id: 1, name: "John Smith", date: "2024-01-15", time: "2:30 PM", status: "approved" },
    { id: 2, name: "Sarah Johnson", date: "2024-01-12", time: "10:00 AM", status: "pending" },
    { id: 3, name: "Mike Wilson", date: "2024-01-10", time: "4:15 PM", status: "approved" },
  ];

  const mockAnnouncements = [
    { id: 1, title: "Pool Maintenance Schedule", date: "2024-01-15", type: "announcement", hasFile: true },
    { id: 2, title: "Parking Policy Update", date: "2024-01-14", type: "poll", votes: 12 },
    { id: 3, title: "Holiday Building Hours", date: "2024-01-12", type: "announcement", hasFile: false },
  ];

  const mockMaintenanceRequests = [
    { id: 1, title: "Kitchen Faucet Leak", date: "2024-01-14", status: "in-progress", priority: "medium" },
    { id: 2, title: "AC Unit Not Working", date: "2024-01-12", status: "completed", priority: "high" },
    { id: 3, title: "Light Bulb Replacement", date: "2024-01-10", status: "pending", priority: "low" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "in-progress": return <Clock className="w-4 h-4 text-blue-500" />;
      default: return <AlertCircle className="w-4 h-4 text-yellow-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "default";
      default: return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      <header className="bg-card border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Property Management</h1>
                <p className="text-xs text-muted-foreground">Tenant Portal</p>
              </div>
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
          <h2 className="text-3xl font-bold text-foreground">Tenant Dashboard</h2>
          <p className="text-muted-foreground mt-2">Welcome to your property management portal</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Utility Consumption Dashboard */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Utility Consumption</CardTitle>
                    <CardDescription>Track your monthly usage trends</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 rounded-lg p-8 text-center border-2 border-dashed border-muted-foreground/20">
                  <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground font-medium">Usage Chart Area</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Interactive chart showing electricity, water, and gas consumption
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">250 kWh</p>
                    <p className="text-sm text-muted-foreground">Electricity</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">1,200 gal</p>
                    <p className="text-sm text-muted-foreground">Water</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">45 CCF</p>
                    <p className="text-sm text-muted-foreground">Gas</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Visitor Access */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Visitor Access</CardTitle>
                      <CardDescription>Manage your guests and visitors</CardDescription>
                    </div>
                  </div>
                  <Button variant="professional" size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Submit Visitor Request
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockVisitors.map((visitor) => (
                    <div key={visitor.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div>
                        <p className="font-medium">{visitor.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {visitor.date} at {visitor.time}
                        </p>
                      </div>
                      <Badge variant={visitor.status === "approved" ? "default" : "secondary"}>
                        {visitor.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Maintenance Requests */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Wrench className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Maintenance Requests</CardTitle>
                      <CardDescription>Track your service requests</CardDescription>
                    </div>
                  </div>
                  <Button variant="professional" size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    New Request
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockMaintenanceRequests.map((request) => (
                    <div key={request.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(request.status)}
                        <div>
                          <p className="font-medium">{request.title}</p>
                          <p className="text-sm text-muted-foreground">{request.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={getPriorityColor(request.priority)}>
                          {request.priority}
                        </Badge>
                        <Badge variant="outline">
                          {request.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Bill Prediction */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Bill Prediction</CardTitle>
                    <CardDescription>January 2024</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-primary/5 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Current Usage</span>
                    <span className="font-semibold">$127.50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Projected Total</span>
                    <span className="text-lg font-bold text-primary">$185.00</span>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Electricity</span>
                    <span>$92.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Water</span>
                    <span>$45.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gas</span>
                    <span>$48.00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bulletin Board */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Bulletin Board</CardTitle>
                    <CardDescription>Latest announcements</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockAnnouncements.map((announcement) => (
                    <div key={announcement.id} className="p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant={announcement.type === "poll" ? "default" : "secondary"}>
                          {announcement.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{announcement.date}</span>
                      </div>
                      <h4 className="font-medium text-sm mb-2">{announcement.title}</h4>
                      <div className="flex items-center justify-between">
                        {announcement.type === "poll" && (
                          <span className="text-xs text-muted-foreground">
                            {announcement.votes} votes
                          </span>
                        )}
                        {announcement.hasFile && (
                          <Button variant="ghost" size="sm" className="h-6 px-2">
                            <Download className="w-3 h-3 mr-1" />
                            <span className="text-xs">Download</span>
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TenantDashboard;