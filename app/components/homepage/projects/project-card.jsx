// @flow strict

import * as React from 'react';
import { FiExternalLink, FiCode, FiUser } from 'react-icons/fi';

function ProjectCard({ project }) {
  return (
    <div className="group relative w-full">
      {/* Card Container */}
      <div className="card card-hover transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden">
        {/* Gradient Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Card Content */}
        <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-gray-700/50">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                  <FiCode className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <FiUser className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">{project.role}</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-300"
                    aria-label="View demo"
                  >
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all duration-300"
                    aria-label="View code"
                  >
                    <FiCode className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tools.slice(0, 4).map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-300 text-xs font-medium rounded-full border border-blue-500/20 hover:border-blue-400/40 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
              {project.tools.length > 4 && (
                <span className="px-3 py-1 bg-gray-700/50 text-gray-400 text-xs font-medium rounded-full">
                  +{project.tools.length - 4} more
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-glow-primary"
                >
                  <FiExternalLink className="w-4 h-4 mr-2" />
                  View Demo
                </a>
              )}
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 border-2 border-gray-600 text-gray-300 text-sm font-medium rounded-lg hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300"
                >
                  <FiCode className="w-4 h-4 mr-2" />
                  View Code
                </a>
              )}
            </div>
          </div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500"></div>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
    </div>
  );
};

export default ProjectCard;