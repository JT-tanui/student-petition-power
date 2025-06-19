import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Users, Target, AlertCircle, Shield, UserCheck } from "lucide-react";

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

          {/* Privacy & Data Protection */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Shield className="w-6 h-6 text-blue-600" />
                Privacy & Data Protection
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-semibold text-blue-800 mb-3">How We Protect Your Information</h4>
                  <ul className="space-y-2 text-blue-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Your personal information is only used for petition verification and submission</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>No data is shared with third parties without explicit consent</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Only authorized student representatives have access to the petition data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>You can request removal of your signature at any time</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                  <h4 className="font-semibold text-green-800 mb-3">Data Collection Purpose</h4>
                  <p className="text-green-700 mb-3">We collect minimal information necessary to:</p>
                  <ul className="space-y-2 text-green-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Verify that signers are genuine DCPC students</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Prevent duplicate or fraudulent signatures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Provide contact information for petition updates (if email provided)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Submit a credible petition to school administration</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
                  <h4 className="font-semibold text-orange-800 mb-3">Your Rights</h4>
                  <ul className="space-y-2 text-orange-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Right to know what data we collect and why</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Right to request removal of your signature and data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Right to correct any inaccurate information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Right to know who has access to your information</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Safety Guidelines */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <UserCheck className="w-6 h-6 text-purple-600" />
                Safety & Authenticity Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                  <h4 className="font-semibold text-purple-800 mb-3">For Signers - Ensure Your Safety</h4>
                  <ul className="space-y-2 text-purple-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Only sign if you are a genuine DCPC student affected by this issue</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Never share your login credentials or allow others to sign on your behalf</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Verify the authenticity of this petition through your class representatives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Contact organizers if you have concerns about data usage</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                  <h4 className="font-semibold text-red-800 mb-3">What We DON'T Do</h4>
                  <ul className="space-y-2 text-red-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>We do not use any official school logos or branding without permission</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>We do not share petition data publicly or with unauthorized individuals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>We do not accept signatures from non-DCPC students</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>We do not guarantee specific outcomes from the administration</span>
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

          {/* Contact & Submission Information */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-xl">Questions, Concerns, or Feedback?</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-gray-700">
                  If you have any questions about this petition, concerns about your privacy, 
                  or would like to contribute to the cause in other ways, please contact 
                  the student representatives organizing this initiative through your class representatives.
                </p>
                
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                  <h4 className="font-semibold text-green-800 mb-2">Submission Process</h4>
                  <p className="text-green-700 text-sm">
                    Once we reach our target, this petition will be formally submitted to the 
                    school administration through proper channels, including student union 
                    representatives and class coordinators, ensuring a respectful and 
                    professional approach.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Course:</strong> Diploma in Computer Programming<br />
                    <strong>Department:</strong> DCPC<br />
                    <strong>Expected Graduation:</strong> 2023<br />
                    <strong>Current Status:</strong> Results Processing Delays<br />
                    <strong>Petition Type:</strong> Student-organized, non-official
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Info;
