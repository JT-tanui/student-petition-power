
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Eye, LogOut, Users, FileText, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const { toast } = useToast();

  // Mock data - in real app, this would come from backend
  const mockSignatures = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@student.edu",
      phone: "+1234567890",
      regNumber: "DCPC01/3675/2022",
      nationalId: "123456789",
      signedAt: "2024-01-15 10:30 AM"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@student.edu", 
      phone: "+1234567891",
      regNumber: "DCPC01/3676/2022",
      nationalId: "123456790",
      signedAt: "2024-01-15 11:45 AM"
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.j@student.edu",
      phone: "+1234567892", 
      regNumber: "DCPC01/3677/2022",
      nationalId: "",
      signedAt: "2024-01-15 02:15 PM"
    }
  ];

  const totalSignatures = mockSignatures.length;
  const targetSignatures = 200;
  const progressPercentage = (totalSignatures / targetSignatures) * 100;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);

    // Simulate login process
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (loginData.username === "DCPC" && loginData.password === "Cuk@2022") {
      setIsLoggedIn(true);
      toast({
        title: "Login successful",
        description: "Welcome to the admin dashboard",
      });
    } else {
      toast({
        title: "Login failed",
        description: "Invalid username or password",
        variant: "destructive"
      });
    }
    setIsLoggingIn(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ username: "", password: "" });
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
  };

  const downloadCSV = () => {
    const csvContent = [
      ["Name", "Email", "Phone", "Registration Number", "National ID", "Signed At"],
      ...mockSignatures.map(sig => [
        sig.name,
        sig.email,
        sig.phone,
        sig.regNumber,
        sig.nationalId || "N/A",
        sig.signedAt
      ])
    ].map(row => row.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "petition_signatures.csv";
    a.click();
    window.URL.revokeObjectURL(url);

    toast({
      title: "CSV Downloaded",
      description: "Signatures data has been exported to CSV",
    });
  };

  const downloadPDF = () => {
    // In a real app, this would generate a proper PDF
    toast({
      title: "PDF Generation",
      description: "PDF summary is being generated and will download shortly",
    });
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
        <Card className="w-full max-w-md shadow-xl border-0 bg-white/90 backdrop-blur">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
            <CardDescription className="text-blue-100 text-center">
              Access the petition dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  value={loginData.username}
                  onChange={(e) => setLoginData(prev => ({ ...prev, username: e.target.value }))}
                  required
                  placeholder="Enter username"
                  className="border-gray-300 focus:border-blue-500"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                  required
                  placeholder="Enter password"
                  className="border-gray-300 focus:border-blue-500"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isLoggingIn}
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
              >
                {isLoggingIn ? "Logging in..." : "Login"}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <Button 
                variant="outline" 
                onClick={() => window.location.href = "/"}
                className="text-sm"
              >
                Back to Petition
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-1">Petition Management System</p>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                onClick={() => window.location.href = "/"}
                className="hover:bg-blue-50"
              >
                <Eye className="w-4 h-4 mr-2" />
                View Petition
              </Button>
              <Button 
                variant="outline" 
                onClick={handleLogout}
                className="hover:bg-red-50 text-red-600 border-red-200"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Signatures</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{totalSignatures}</div>
              <p className="text-xs text-muted-foreground">
                {targetSignatures - totalSignatures} signatures remaining
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Progress</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{Math.round(progressPercentage)}%</div>
              <Progress value={progressPercentage} className="mt-2 h-2" />
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Target Goal</CardTitle>
              <FileText className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{targetSignatures}</div>
              <p className="text-xs text-muted-foreground">
                Signatures needed for submission
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Download Actions */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur mb-8">
          <CardHeader>
            <CardTitle>Export Data</CardTitle>
            <CardDescription>Download petition signatures in various formats</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Button 
                onClick={downloadCSV}
                className="bg-green-600 hover:bg-green-700"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CSV
              </Button>
              <Button 
                onClick={downloadPDF}
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF Summary
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Signatures Table */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle>Petition Signatures</CardTitle>
            <CardDescription>
              Complete list of all students who have signed the petition
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Registration #</TableHead>
                    <TableHead>National ID</TableHead>
                    <TableHead>Signed At</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockSignatures.map((signature) => (
                    <TableRow key={signature.id}>
                      <TableCell className="font-medium">{signature.name}</TableCell>
                      <TableCell>{signature.email}</TableCell>
                      <TableCell>{signature.phone}</TableCell>
                      <TableCell>{signature.regNumber}</TableCell>
                      <TableCell>{signature.nationalId || "N/A"}</TableCell>
                      <TableCell>{signature.signedAt}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
