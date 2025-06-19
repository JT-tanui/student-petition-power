import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, Users, AlertTriangle, CheckCircle, Shield, Clock } from "lucide-react";

const Info = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Petition Information</h1>
              <p className="text-gray-600 mt-1">Understanding the graduation request</p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => window.location.href = "/"}
              className="hover:bg-blue-50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Petition
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Current Situation */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
          <CardHeader className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <AlertTriangle className="w-6 h-6" />
              Current Situation
            </CardTitle>
            <CardDescription className="text-red-100">
              The challenges we face as Diploma in Computer Programming students
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-4 text-gray-700">
              <p className="text-lg font-medium text-gray-800">
                We are students of Diploma in Computer Programming who were scheduled to graduate in 2023.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <p>Some of us have missing marks that prevent graduation completion</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <p>Some students have lost internal examination results</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <p>Our results keep appearing as "failed" despite having passed either internal or external exams</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <p>We remain academically stagnant since 2023 without progression opportunities</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What We're Requesting */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
          <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <FileText className="w-6 h-6" />
              What We're Requesting
            </CardTitle>
            <CardDescription className="text-green-100">
              Our appeal to the school administration
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-4 text-gray-700">
              <p className="text-lg font-medium text-gray-800">
                We request the school administration to consider our graduation based on the results we have available, whether internal or external.
              </p>
              <ul className="space-y-3 ml-6 list-disc">
                <li>Allow students with passing grades in either internal or external exams to graduate</li>
                <li>Waive requirements for lost or missing internal examination results</li>
                <li>Provide recommendation letters to enable career progression</li>
                <li>Officially recognize our graduation status to end academic stagnation</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Why This Matters */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Users className="w-6 h-6" />
              Why This Matters
            </CardTitle>
            <CardDescription className="text-blue-100">
              The impact of this decision on our future
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-4 text-gray-700">
              <p className="text-lg font-medium text-gray-800">
                Allowing graduation based on available results will significantly impact our lives and careers.
              </p>
              <ul className="space-y-3 ml-6 list-disc">
                <li>Enable us to pursue further education and career opportunities</li>
                <li>Provide closure to our academic journey and recognize our achievements</li>
                <li>Alleviate the stress and uncertainty caused by missing results</li>
                <li>Set a precedent for fair and compassionate treatment of students facing similar challenges</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How You Can Help */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <CheckCircle className="w-6 h-6" />
              How You Can Help
            </CardTitle>
            <CardDescription className="text-purple-100">
              Support our cause and make a difference
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-4 text-gray-700">
              <p className="text-lg font-medium text-gray-800">
                You can help us by signing this petition and spreading the word to fellow students.
              </p>
              <ul className="space-y-3 ml-6 list-disc">
                <li>Sign the petition to show your support for our cause</li>
                <li>Share the petition link with other students and encourage them to sign</li>
                <li>Participate in discussions and raise awareness about the issue</li>
                <li>Contact student representatives and voice your concerns</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Safety */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
          <CardHeader className="bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Shield className="w-6 h-6" />
              Privacy & Safety
            </CardTitle>
            <CardDescription className="text-pink-100">
              Your information is safe with us
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-4 text-gray-700">
              <p className="text-lg font-medium text-gray-800">
                We are committed to protecting your privacy and ensuring the safety of your information.
              </p>
              <ul className="space-y-3 ml-6 list-disc">
                <li>Your information will only be used for this petition and will not be shared publicly</li>
                <li>Only authorized student representatives can access the full petition data</li>
                <li>Your data will be securely stored and used solely for verification and submission to school administration</li>
                <li>You can request removal of your signature by contacting the petition organizers</li>
                <li>No personal information will be shared with third parties without explicit consent</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Info;
