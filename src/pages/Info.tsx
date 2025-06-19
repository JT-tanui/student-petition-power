
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
              <p className="text-gray-600 mt-1">Understanding our graduation situation</p>
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
                Our Situation
              </CardTitle>
              <CardDescription className="text-blue-100">
                Why we need urgent action for graduation
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We are students of the Diploma in Computer Programming who were scheduled to graduate 
                in 2023. However, many of us are facing significant challenges with our results. Some 
                students have missing marks, while others have lost internal examination results, 
                causing our overall results to appear as failed despite having passed either internal 
                or external examinations (or both).
              </p>
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <p className="text-red-800 font-medium">
                  We have been academically stagnant since 2023 and desperately need recommendation 
                  letters and graduation certificates to proceed with our studies and secure employment opportunities.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Our Request */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Target className="w-6 h-6 text-green-600" />
                Our Request
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600 mb-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">We respectfully request that the administration:</h3>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Allow us to graduate if we have passed either internal OR external examinations (or both)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Provide graduation certificates based on available passing results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Issue recommendation letters to enable further studies and employment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>End the academic stagnation that has persisted since 2023</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Current Challenges */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-orange-600" />
                Current Challenges We Face
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
                  <h4 className="font-semibold text-orange-800 mb-2">Missing Marks</h4>
                  <p className="text-orange-700">
                    Several students have missing marks in their academic records, preventing 
                    accurate assessment of their overall performance and graduation eligibility.
                  </p>
                </div>
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                  <h4 className="font-semibold text-red-800 mb-2">Lost Internal Examination Results</h4>
                  <p className="text-red-700">
                    Some students' internal examination results have been lost, causing their 
                    overall results to incorrectly show as failed despite having passed other components.
                  </p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600">
                  <h4 className="font-semibold text-yellow-800 mb-2">Academic Stagnation Since 2023</h4>
                  <p className="text-yellow-700">
                    We have been unable to progress academically or professionally due to the 
                    delay in graduation, affecting our career prospects and further education opportunities.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                  <h4 className="font-semibold text-purple-800 mb-2">Lack of Essential Documents</h4>
                  <p className="text-purple-700">
                    Without graduation certificates and recommendation letters, we cannot apply 
                    for jobs or continue our education, leaving us in professional limbo.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Impact on Students */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Users className="w-6 h-6 text-blue-600" />
                Impact on Our Lives
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Career Impact</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Unable to apply for programming jobs without certificates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Missing opportunities in the tech industry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Cannot demonstrate completed qualifications to employers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Financial difficulties due to unemployment</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Educational Impact</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Cannot pursue further studies or degrees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Missing application deadlines for advanced programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Unable to obtain recommendation letters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Academic dreams put on indefinite hold</span>
                    </li>
                  </ul>
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
                    We aim to collect 200 student signatures to demonstrate that this graduation 
                    delay issue affects a significant number of Diploma in Computer Programming 
                    students. Our collective voice will show the administration the urgency of 
                    resolving this matter.
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
                  <strong>Course:</strong> Diploma in Computer Programming<br />
                  <strong>Department:</strong> DCPC<br />
                  <strong>Expected Graduation:</strong> 2023<br />
                  <strong>Current Status:</strong> Results Processing Delays
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
