// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { FiDownload, FiMail, FiMapPin, FiPhone, FiCode, FiHeart, FiZap } from "react-icons/fi";

function AboutSection() {
  const highlights = [
    { icon: FiCode, text: "Full-Stack Developer", color: "text-blue-400" },
    { icon: FiHeart, text: "Problem Solver", color: "text-red-400" },
    { icon: FiZap, text: "Quick Learner", color: "text-yellow-400" },
  ];

  const stats = [
    { label: "Years Experience", value: "3+", color: "from-blue-500 to-cyan-500" },
    { label: "Projects Completed", value: "50+", color: "from-purple-500 to-pink-500" },
    { label: "Technologies", value: "20+", color: "from-green-500 to-teal-500" },
    { label: "Happy Clients", value: "25+", color: "from-orange-500 to-red-500" },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-4">
            <FiCode className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-400">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Get to know</span>
            <br />
            <span className="text-white">who I am</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about creating innovative solutions that make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Introduction */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Hi, I&apos;m <span className="gradient-text">{personalData.name.split(' ')[0]}</span>
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {personalData.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-4">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                  >
                    <highlight.icon className={`w-4 h-4 ${highlight.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-gray-300 text-sm font-medium">{highlight.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group"
                >
                  <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <FiMail className="w-5 h-5 text-blue-400" />
                <span className="text-sm">{personalData.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <FiPhone className="w-5 h-5 text-green-400" />
                <span className="text-sm">{personalData.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <FiMapPin className="w-5 h-5 text-red-400" />
                <span className="text-sm">{personalData.address}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-glow-primary hover:scale-105"
              >
                <FiMail className="w-4 h-4 mr-2" />
                Get In Touch
              </a>
              <a
                href={personalData.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-600 text-gray-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <FiDownload className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl transform rotate-6 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-3xl transform -rotate-6 animate-pulse delay-1000"></div>

                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 overflow-hidden group hover:border-blue-500/30 transition-all duration-500">
                  <div className="relative z-10">
                    <Image
                      src={personalData.profile}
                      width={300}
                      height={300}
                      alt="Harshil Barad"
                      className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-float opacity-60"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 border-2 border-blue-500/30 rounded-full animate-spin-slow"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 border border-purple-500/30 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;