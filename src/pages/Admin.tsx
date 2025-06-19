
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Eye, LogOut, Users, FileText, TrendingUp, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [signatures, setSignatures] = useState<any[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    if (isLoggedIn) {
      loadSignatures();
    }
  }, [isLoggedIn]);

  const loadSignatures = () => {
    const storedSignatures = JSON.parse(localStorage.getItem('petitionSignatures') || '[]');
    setSignatures(storedSignatures);
  };

  const deleteSignature = (id: number) => {
    const updatedSignatures = signatures.filter(sig => sig.id !== id);
    setSignatures(updatedSignatures);
    localStorage.setItem('petitionSignatures', JSON.stringify(updatedSignatures));
    toast({
      title: "Signature deleted",
      description: "The signature has been removed from the petition",
    });
  };

  const totalSignatures = signatures.length;
  const targetSignatures = 200;
  const progressPercentage = Math.min((totalSignatures / targetSignatures) * 100, 100);

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
    if (signatures.length === 0) {
      toast({
        title: "No data to export",
        description: "There are no signatures to download",
        variant: "destructive"
      });
      return;
    }

    const csvContent = [
      ["First Name", "Phone", "Email", "Registration Number", "National ID", "Signed At"],
      ...signatures.map(sig => [
        sig.fullName.split(' ')[0], // Only first name
        sig.phoneNumber,
        sig.email || "N/A",
        sig.registrationNumber || "N/A",
        sig.nationalId || "N/A",
        new Date(sig.timestamp).toLocaleString()
      ])
    ].map(row => row.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `petition_signatures_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);

    toast({
      title: "CSV Downloaded",
      description: "Signatures data has been exported to CSV",
    });
  };

  const downloadPDF = () => {
    // Create a simple text-based summary for PDF
    const summary = `
STUDENT GRADUATION PETITION SUMMARY
Date: ${new Date().toLocaleDateString()}

Total Signatures: ${totalSignatures}
Target: ${targetSignatures}
Progress: ${Math.round(progressPercentage)}%

SIGNERS (First Names Only):
${signatures.map((sig, index) => `${index + 1}. ${sig.fullName.split(' ')[0]}`).join('\n')}

This petition requests the school administration to allow graduation for Diploma in Computer Programming students based on their available examination results (internal or external).
    `;

    const blob = new Blob([summary], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `petition_summary_${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    window.URL.revokeObjectURL(url);

    toast({
      title: "Summary Downloaded",
      description: "Petition summary has been downloaded",
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
                Download Summary
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Signatures Table */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle>Petition Signatures</CardTitle>
            <CardDescription>
              Complete list of all students who have signed the petition (showing first names only for privacy)
            </CardDescription>
          </CardHeader>
          <CardContent>
            {signatures.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Users className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No signatures yet. Share the petition to start collecting signatures!</p>
              </div>
            ) : (
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>First Name</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Registration #</TableHead>
                      <TableHead>Signed At</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {signatures.map((signature) => (
                      <TableRow key={signature.id}>
                        <TableCell className="font-medium">
                          {signature.fullName.split(' ')[0]}
                        </TableCell>
                        <TableCell>{signature.phoneNumber}</TableCell>
                        <TableCell>{signature.email || "N/A"}</TableCell>
                        <TableCell>{signature.registrationNumber || "N/A"}</TableCell>
                        <TableCell>{new Date(signature.timestamp).toLocaleString()}</TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => deleteSignature(signature.id)}
                            className="text-red-600 border-red-200 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
