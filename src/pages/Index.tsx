
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Users, FileText, TrendingUp, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    nationalId: "",
    phoneNumber: "",
    email: "",
    registrationNumber: "",
    courseName: "Diploma in Computer Programming",
    year: "2023 Cohort",
    fullName: "",
    signatureImage: null as File | null
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Mock current signatures count (in real app, this would come from backend)
  const currentSignatures = 47;
  const targetSignatures = 200;
  const progressPercentage = (currentSignatures / targetSignatures) * 100;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size <= 2 * 1024 * 1024) { // 2MB limit
      setFormData(prev => ({ ...prev, signatureImage: file }));
    } else if (file) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 2MB",
        variant: "destructive"
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (!formData.phoneNumber || !formData.fullName) {
      toast({
        title: "Missing required fields",
        description: "Please fill in your phone number and full name",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Petition signed successfully!",
        description: "Thank you for your support. A confirmation email has been sent.",
      });
      
      // Reset form
      setFormData({
        nationalId: "",
        phoneNumber: "",
        email: "",
        registrationNumber: "",
        courseName: "Diploma in Computer Programming",
        year: "2023 Cohort",
        fullName: "",
        signatureImage: null
      });
    } catch (error) {
      toast({
        title: "Error submitting petition",
        description: "Please try again later",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Student Graduation Petition</h1>
              <p className="text-gray-600 mt-1">Request for Graduation Based on Available Results</p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => window.location.href = "/info"}
              className="hover:bg-blue-50"
            >
              <FileText className="w-4 h-4 mr-2" />
              Learn More
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl">Sign the Petition</CardTitle>
                <CardDescription className="text-blue-100">
                  Help us advocate for graduation based on our available examination results
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nationalId" className="text-gray-700">National ID (Optional)</Label>
                      <Input
                        id="nationalId"
                        name="nationalId"
                        value={formData.nationalId}
                        onChange={handleInputChange}
                        placeholder="Enter your national ID"
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phoneNumber" className="text-gray-700">Phone Number *</Label>
                      <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your phone number"
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">Email (School email preferred)</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="registrationNumber" className="text-gray-700">Internal Registration Number</Label>
                    <Input
                      id="registrationNumber"
                      name="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={handleInputChange}
                      placeholder="e.g., DCPC01/3675/2022"
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="courseName" className="text-gray-700">Course Name</Label>
                      <Input
                        id="courseName"
                        name="courseName"
                        value={formData.courseName}
                        onChange={handleInputChange}
                        readOnly
                        className="bg-gray-100 border-gray-300"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="year" className="text-gray-700">Expected Graduation</Label>
                      <Input
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleInputChange}
                        readOnly
                        className="bg-gray-100 border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-gray-700">Full Name (Digital Signature) *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full legal name"
                      className="border-gray-300 focus:border-blue-500"
                    />
                    <p className="text-sm text-gray-500">By entering your name, you are digitally signing this petition</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signatureImage" className="text-gray-700">Signature Image (Optional)</Label>
                    <Input
                      id="signatureImage"
                      name="signatureImage"
                      type="file"
                      accept="image/png,image/jpeg,image/jpg"
                      onChange={handleFileChange}
                      className="border-gray-300 focus:border-blue-500"
                    />
                    <p className="text-sm text-gray-500">Upload a PNG/JPG image of your signature (max 2MB)</p>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    {isSubmitting ? "Submitting..." : "Sign Petition"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Card */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-xl">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Petition Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-blue-600">{currentSignatures}</div>
                  <div className="text-gray-600">of {targetSignatures} signatures</div>
                </div>
                <Progress value={progressPercentage} className="h-3 mb-4" />
                <div className="text-center text-sm text-gray-600">
                  {Math.round(progressPercentage)}% complete
                </div>
              </CardContent>
            </Card>

            {/* Info Card */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Users className="w-5 h-5 text-blue-600" />
                  Why This Matters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Allow graduation with available results
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    End academic stagnation since 2023
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Enable career progression
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Provide needed recommendation letters
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Admin Access */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
              <CardContent className="p-4">
                <Button 
                  variant="outline" 
                  onClick={() => window.location.href = "/admin"}
                  className="w-full border-gray-300 hover:bg-gray-50"
                >
                  Admin Access
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
