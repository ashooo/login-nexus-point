import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, User, Lock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const SignIn = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !password) {
      toast({
        title: "Missing Information",
        description: "Please enter both name and password.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate authentication
    setTimeout(() => {
      // Mock role-based authentication
      const role = name.toLowerCase().includes("admin") ? "admin" : "tenant";
      
      toast({
        title: "Welcome!",
        description: `Successfully signed in as ${role}.`,
      });

      // Role-based redirection
      if (role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/tenant/dashboard");
      }
      
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="bg-gradient-card border-0 shadow-elegant backdrop-blur-sm">
          <CardHeader className="space-y-4 text-center">
            <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
              <Building2 className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="space-y-2">
              <CardTitle className="text-2xl font-bold tracking-tight">
                Sign In to Property Management System
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Enter your credentials to access your dashboard
              </CardDescription>
            </div>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSignIn} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10 h-11 border-border/50 focus:border-primary transition-all duration-300"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 h-11 border-border/50 focus:border-primary transition-all duration-300"
                    required
                  />
                </div>
              </div>
              
              <Button
                type="submit"
                variant="professional"
                className="w-full h-11 text-base"
                disabled={isLoading}
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground">
                Use "admin" in your name for admin access, or any other name for tenant access.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;