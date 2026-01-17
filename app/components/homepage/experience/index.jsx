// @flow strict

import { experiences } from "@/utils/data/experience";
import { FiBriefcase, FiCalendar, FiMapPin, FiTrendingUp } from "react-icons/fi";
import AnimationLottie from "../../helper/animation-lottie";
import experience from '/public/lottie/code.json';

function Experience() {
  return (
    <section id="experience" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 backdrop-blur-sm mb-4">
            <FiBriefcase className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-sm font-medium text-green-400">Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">My Professional</span>
            <br />
            <span className="text-white">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building innovative solutions and growing through challenging projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content - Animation */}
          <div className="order-2 lg:order-1">
            <div className="sticky top-24">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-3xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                  <AnimationLottie animationPath={experience} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Timeline */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 opacity-30"></div>

              <div className="space-y-8">
                {experiences.map((experience, index) => (
                  <div
                    key={experience.id}
                    className="relative pl-20 group animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full border-4 border-gray-900 group-hover:scale-125 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-ping opacity-75"></div>
                    </div>

                    {/* Experience Card */}
                    <div className="card card-hover p-6 group-hover:border-green-500/30 transition-all duration-500">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                            {experience.title}
                          </h3>
                          <div className="flex items-center space-x-2 text-gray-400 mb-3">
                            <FiMapPin className="w-4 h-4 text-blue-400" />
                            <span className="text-sm font-medium">{experience.company}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                          <FiCalendar className="w-4 h-4" />
                          <span className="text-sm font-medium">{experience.duration}</span>
                        </div>
                      </div>

                      {/* Additional Content */}
                      <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-700/50">
                        <div className="flex items-center space-x-2 text-gray-400">
                          <FiBriefcase className="w-4 h-4 text-purple-400" />
                          <span className="text-sm">Full-time</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <FiTrendingUp className="w-4 h-4 text-blue-400" />
                          <span className="text-sm">Growth</span>
                        </div>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50">
                <div className="text-2xl font-bold gradient-text mb-1">3+</div>
                <div className="text-gray-400 text-sm">Years Exp.</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50">
                <div className="text-2xl font-bold gradient-text mb-1">10+</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50">
                <div className="text-2xl font-bold gradient-text mb-1">5+</div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;