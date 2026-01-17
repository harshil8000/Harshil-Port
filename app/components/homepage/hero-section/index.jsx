// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-8 lg:py-16 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/5 via-transparent to-transparent animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-16 gap-y-12">
          {/* Left Content */}
          <div className="order-2 lg:order-1 flex flex-col items-start justify-center space-y-8 animate-fade-in">
            {/* Greeting Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm">
              <span className="text-sm font-medium text-blue-400 mr-2">👋</span>
              <span className="text-sm font-medium text-gray-300">Welcome to my portfolio</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block text-gray-300">Hello, I&apos;m</span>
                <span className="block gradient-text animate-gradient bg-gradient-primary bg-clip-text text-transparent">
                  {personalData.name.split(' ')[0]}
                </span>
                <span className="block text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-400 mt-2">
                  {personalData.designation}
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
                {personalData.description}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { href: personalData.github, Icon: BsGithub, label: 'GitHub' },
                { href: personalData.linkedIn, Icon: BsLinkedin, label: 'LinkedIn' },
                { href: personalData.twitter, Icon: FaTwitterSquare, label: 'Twitter' },
                { href: personalData.leetcode, Icon: SiLeetcode, label: 'LeetCode' },
                { href: personalData.facebook, Icon: FaFacebook, label: 'Facebook' },
              ].map(({ href, Icon, label }, index) => (
                <Link
                  key={label}
                  href={href}
                  target='_blank'
                  className="group relative p-3 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-glow-primary hover:scale-110"
                  aria-label={label}
                >
                  <Icon size={20} className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-glow-primary transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-purple-700"
              >
                <RiContactsFill size={20} />
                <span>Contact Me</span>
                <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                  <span className="text-lg">→</span>
                </div>
              </Link>

              <Link
                href={personalData.resume}
                target="_blank"
                className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-600 rounded-xl font-semibold text-gray-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-105"
              >
                <MdDownload size={20} />
                <span>Download CV</span>
                <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                  <span className="text-lg">↓</span>
                </div>
              </Link>
            </div>
          </div>
          {/* Right Content - Modern Terminal */}
          <div className="order-1 lg:order-2 relative animate-slide-up">
            <div className="relative glass rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden group hover:border-blue-500/30 transition-all duration-500">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-gray-900/50 border-b border-gray-700/50">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
                  </div>
                  <div className="text-sm text-gray-400 font-mono">harshil@portfolio ~</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                  <span className="text-xs text-gray-500">online</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm bg-gradient-to-b from-gray-900/30 to-gray-900/10">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400">$</span>
                    <span className="text-blue-400">whoami</span>
                  </div>
                  <div className="text-purple-300 pl-4">harshil-barad</div>

                  <div className="flex items-center space-x-2 pt-2">
                    <span className="text-green-400">$</span>
                    <span className="text-blue-400">cat skills.json</span>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-4 ml-4 border border-gray-700/30">
                    <div className="text-gray-300">
                      <span className="text-cyan-400">{'{'}</span>
                    </div>
                    <div className="ml-4 space-y-1">
                      <div><span className="text-green-400">&quot;frontend&quot;:</span> <span className="text-yellow-300">[&quot;React&quot;, &quot;Next.js&quot;, &quot;Vue.js&quot;, &quot;TypeScript&quot;]</span>,</div>
                      <div><span className="text-green-400">&quot;backend&quot;:</span> <span className="text-yellow-300">[&quot;Node.js&quot;, &quot;Python&quot;, &quot;FastAPI&quot;, &quot;PostgreSQL&quot;]</span>,</div>
                      <div><span className="text-green-400">&quot;cloud&quot;:</span> <span className="text-yellow-300">[&quot;AWS&quot;, &quot;Docker&quot;, &quot;Kubernetes&quot;, &quot;CI/CD&quot;]</span>,</div>
                      <div><span className="text-green-400">&quot;ai_ml&quot;:</span> <span className="text-yellow-300">[&quot;TensorFlow&quot;, &quot;PyTorch&quot;, &quot;NLP&quot;, &quot;Computer Vision&quot;]</span>,</div>
                      <div><span className="text-green-400">&quot;specialties&quot;:</span> <span className="text-yellow-300">[&quot;Insurance Tech&quot;, &quot;CRM Systems&quot;, &quot;Policy Management&quot;]</span></div>
                    </div>
                    <div className="text-cyan-400">{'}'}</div>
                  </div>

                  <div className="flex items-center space-x-2 pt-2">
                    <span className="text-green-400">$</span>
                    <span className="text-blue-400 animate-typing">echo &quot;Always learning, always building 🚀&quot;</span>
                  </div>
                </div>
              </div>

              {/* Animated Cursor */}
              <div className="absolute bottom-6 left-6 w-2 h-5 bg-blue-400 animate-pulse"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-float opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;