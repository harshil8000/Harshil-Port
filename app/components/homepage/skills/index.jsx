// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import { FiCode, FiDatabase, FiCloud, FiTool, FiLayers } from "react-icons/fi";

// Categorize skills
const skillCategories = {
  frontend: {
    title: "Frontend Development",
    icon: FiCode,
    color: "from-blue-500 to-cyan-500",
    skills: ["HTML", "CSS", "Javascript", "Typescript", "React", "Next JS", "Tailwind", "Bootstrap", "MaterialUI"]
  },
  backend: {
    title: "Backend Development",
    icon: FiLayers,
    color: "from-green-500 to-teal-500",
    skills: ["Node JS", "Go", "Strapi", "Graphql", "Fastify"]
  },
  database: {
    title: "Database & Storage",
    icon: FiDatabase,
    color: "from-purple-500 to-pink-500",
    skills: ["MongoDB", "MySQL", "PostgreSQL"]
  },
  tools: {
    title: "Tools & DevOps",
    icon: FiTool,
    color: "from-orange-500 to-red-500",
    skills: ["Git", "AWS", "Docker", "Nginx", "Firebase"]
  },
  design: {
    title: "Design & Prototyping",
    icon: FiCloud,
    color: "from-pink-500 to-rose-500",
    skills: ["Figma"]
  }
};

function Skills() {
  return (
    <section id="skills" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm mb-4">
            <FiCode className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-sm font-medium text-purple-400">Skills & Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Technologies I</span>
            <br />
            <span className="text-white">Master</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([key, category], index) => (
            <div
              key={key}
              className="card card-hover group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="p-6 border-b border-gray-700/50">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{category.skills.length} skills</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: '100%',
                      animation: `slideInRight 1.5s ease-out ${index * 0.2}s both`
                    }}
                  ></div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="group/skill relative flex flex-col items-center space-y-2 p-3 rounded-lg hover:bg-gray-700/30 transition-all duration-300 cursor-pointer"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      <div className="relative">
                        <div className="w-10 h-10 flex items-center justify-center bg-gray-800/50 rounded-lg group-hover/skill:bg-gray-700/50 transition-all duration-300 group-hover/skill:scale-110">
                          <Image
                            src={skillsImage(skill)?.src}
                            alt={skill}
                            width={24}
                            height={24}
                            className="rounded"
                          />
                        </div>
                        <div className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-lg opacity-0 group-hover/skill:opacity-20 transition-opacity duration-300`}></div>
                      </div>
                      <span className="text-xs text-gray-400 text-center font-medium group-hover/skill:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`}></div>
            </div>
          ))}
        </div>

        {/* Skill Proficiency Levels */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50">
            <div className="text-3xl font-bold gradient-text mb-2">Expert</div>
            <div className="text-gray-400 mb-4">Advanced Technologies</div>
            <div className="flex justify-center space-x-2">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              ))}
            </div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50">
            <div className="text-3xl font-bold gradient-text mb-2">Proficient</div>
            <div className="text-gray-400 mb-4">Core Technologies</div>
            <div className="flex justify-center space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-2 h-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
              ))}
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50">
            <div className="text-3xl font-bold gradient-text mb-2">Learning</div>
            <div className="text-gray-400 mb-4">Emerging Technologies</div>
            <div className="flex justify-center space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              ))}
              {[1, 2].map(i => (
                <div key={i} className="w-2 h-2 bg-gray-600 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;