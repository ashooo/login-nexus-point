import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, Home, BarChart3, Settings, LogOut, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
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
          <p className="text-muted-foreground mt-2">Manage your property portfolio and tenants</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Properties</CardTitle>
                  <CardDescription>Manage your portfolio</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                View, add, and manage all properties in your portfolio.
              </p>
              <div className="flex space-x-2">
                <Button variant="professional" className="flex-1">
                  View All
                </Button>
                <Button variant="outline" size="icon">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Tenants</CardTitle>
                  <CardDescription>Manage tenant accounts</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                View tenant information, lease agreements, and communication history.
              </p>
              <div className="flex space-x-2">
                <Button variant="outline" className="flex-1">
                  View All
                </Button>
                <Button variant="outline" size="icon">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Analytics</CardTitle>
                  <CardDescription>View performance metrics</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Track rental income, occupancy rates, and property performance.
              </p>
              <Button variant="professional" className="w-full">
                View Reports
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Settings className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">System Settings</CardTitle>
                  <CardDescription>Configure the system</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Manage system configurations, user roles, and permissions.
              </p>
              <Button variant="outline" className="w-full">
                Manage Settings
              </Button>
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