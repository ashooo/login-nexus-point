import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Home, CreditCard, MessageSquare, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TenantDashboard = () => {
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
              <h1 className="text-xl font-bold">Property Management</h1>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">My Property</CardTitle>
                  <CardDescription>View property details</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Access information about your rental property, lease details, and property amenities.
              </p>
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Rent Payments</CardTitle>
                  <CardDescription>Manage your payments</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                View payment history, make payments, and download receipts.
              </p>
              <Button variant="professional" className="w-full">
                Make Payment
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Maintenance</CardTitle>
                  <CardDescription>Submit requests</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Submit maintenance requests and track their progress.
              </p>
              <Button variant="outline" className="w-full">
                Submit Request
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
                  <CardTitle className="text-lg">Account Settings</CardTitle>
                  <CardDescription>Manage your profile</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Update your personal information and account preferences.
              </p>
              <Button variant="outline" className="w-full">
                Manage Account
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default TenantDashboard;