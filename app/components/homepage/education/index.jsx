// @flow strict

import { educations } from "@/utils/data/educations";
import { FiBookOpen, FiCalendar, FiMapPin, FiAward } from "react-icons/fi";
import AnimationLottie from "../../helper/animation-lottie";
import lottieFile from '/public/lottie/study.json';

function Education() {
  return (
    <section id="education" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 backdrop-blur-sm mb-4">
            <FiBookOpen className="w-4 h-4 text-orange-400 mr-2" />
            <span className="text-sm font-medium text-orange-400">Education</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Learning</span>
            <br />
            <span className="text-white">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building a strong foundation through continuous learning and academic excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content - Animation */}
          <div className="order-2 lg:order-1">
            <div className="sticky top-24">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-3xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                  <AnimationLottie animationPath={lottieFile} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Timeline */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-yellow-500 to-red-500 opacity-30"></div>

              <div className="space-y-8">
                {educations.map((education, index) => (
                  <div
                    key={education.id}
                    className="relative pl-20 group animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full border-4 border-gray-900 group-hover:scale-125 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-ping opacity-75"></div>
                    </div>

                    {/* Education Card */}
                    <div className="card card-hover p-6 group-hover:border-orange-500/30 transition-all duration-500">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                            {education.title}
                          </h3>
                          <div className="flex items-center space-x-2 text-gray-400 mb-3">
                            <FiMapPin className="w-4 h-4 text-blue-400" />
                            <span className="text-sm font-medium">{education.institution}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                          <FiCalendar className="w-4 h-4" />
                          <span className="text-sm font-medium">{education.duration}</span>
                        </div>
                      </div>

                      {/* Additional Content */}
                      <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-700/50">
                        <div className="flex items-center space-x-2 text-gray-400">
                          <FiBookOpen className="w-4 h-4 text-green-400" />
                          <span className="text-sm">Degree Completed</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <FiAward className="w-4 h-4 text-purple-400" />
                          <span className="text-sm">Academic Achievement</span>
                        </div>
                      </div>

                      {/* Progress Bar for Completion */}
                      <div className="mt-4">
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                          <span>Completion</span>
                          <span>100%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-orange-500 to-yellow-500 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: '100%',
                              animation: `slideInRight 1.5s ease-out ${index * 0.2}s both`
                            }}
                          ></div>
                        </div>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Achievements */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50">
                <div className="text-2xl font-bold gradient-text mb-1">B.Tech</div>
                <div className="text-gray-400 text-sm">IT Engineering</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50">
                <div className="text-2xl font-bold gradient-text mb-1">HSC</div>
                <div className="text-gray-400 text-sm">Science Stream</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50">
                <div className="text-2xl font-bold gradient-text mb-1">SSC</div>
                <div className="text-gray-400 text-sm">High School</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;