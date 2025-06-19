
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Users, Target, AlertCircle } from "lucide-react";

const Info = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => window.location.href = "/"}
              className="hover:bg-blue-50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Petition
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">About This Petition</h1>
              <p className="text-gray-600 mt-1">Understanding the need for internal examinations</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Introduction */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                Our Request
              </CardTitle>
              <CardDescription className="text-blue-100">
                Why we're advocating for internal examinations
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We, the students of BSc Computer Science Year 3, respectfully request the implementation 
                of internal examinations instead of external examinations for our academic assessments. 
                This petition represents our collective voice in seeking a more effective and practical 
                approach to academic evaluation.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <p className="text-blue-800 font-medium">
                  Internal examinations offer a more comprehensive and fair assessment of our practical 
                  skills and theoretical knowledge, better preparing us for our professional careers.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Target className="w-6 h-6 text-green-600" />
                Benefits of Internal Examinations
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Academic Advantages</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Better assessment of practical programming skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>More relevant questions tailored to course content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Opportunity for immediate feedback and improvement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Continuous assessment rather than one-time evaluation</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Student Benefits</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Reduced anxiety and stress levels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Familiar environment for better performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Flexible scheduling options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Direct interaction with course instructors</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Current Challenges */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-orange-600" />
                Current Challenges with External Exams
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
                  <h4 className="font-semibold text-orange-800 mb-2">Limited Practical Assessment</h4>
                  <p className="text-orange-700">
                    External exams often focus on theoretical knowledge without adequately testing 
                    practical programming and problem-solving skills that are crucial in our field.
                  </p>
                </div>
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                  <h4 className="font-semibold text-red-800 mb-2">High Stress Environment</h4>
                  <p className="text-red-700">
                    The pressure of external examinations can negatively impact student performance 
                    and doesn't reflect true academic capability or understanding.
                  </p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600">
                  <h4 className="font-semibold text-yellow-800 mb-2">Generic Question Patterns</h4>
                  <p className="text-yellow-700">
                    External exam questions may not align perfectly with the specific curriculum 
                    and teaching methods used in our course.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Our Goals */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Users className="w-6 h-6 text-purple-600" />
                Our Collective Goal
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Target: 200 Signatures</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    We aim to collect 200 student signatures to demonstrate strong support for 
                    internal examinations. This will show the administration that this change 
                    has significant backing from the student body.
                  </p>
                  <Button 
                    onClick={() => window.location.href = "/"}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg"
                  >
                    Join the Petition Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-xl">Questions or Concerns?</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700">
                If you have any questions about this petition or would like to contribute 
                to the cause in other ways, please contact the student representatives 
                organizing this initiative.
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Course:</strong> BSc Computer Science, Year 3<br />
                  <strong>Department:</strong> DCPC<br />
                  <strong>Academic Year:</strong> 2022
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Info;
