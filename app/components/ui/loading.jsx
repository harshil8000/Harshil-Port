// @flow strict
import { FiLoader } from "react-icons/fi";

export function LoadingSpinner({ size = "md", className = "" }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <FiLoader className={`${sizeClasses[size]} animate-spin text-blue-500`} />
    </div>
  );
}

export function LoadingDots({ className = "" }) {
  return (
    <div className={`flex space-x-1 ${className}`}>
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
      <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
    </div>
  );
}

export function SkeletonCard({ className = "" }) {
  return (
    <div className={`card animate-pulse ${className}`}>
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gray-700 rounded-lg"></div>
          <div className="flex-1 space-y-3">
            <div className="h-4 bg-gray-700 rounded w-3/4"></div>
            <div className="h-3 bg-gray-700 rounded w-1/2"></div>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="h-3 bg-gray-700 rounded"></div>
          <div className="h-3 bg-gray-700 rounded w-5/6"></div>
        </div>
        <div className="mt-4 flex space-x-2">
          <div className="h-6 bg-gray-700 rounded-full w-16"></div>
          <div className="h-6 bg-gray-700 rounded-full w-20"></div>
          <div className="h-6 bg-gray-700 rounded-full w-14"></div>
        </div>
      </div>
    </div>
  );
}

export function SkeletonText({ lines = 3, className = "" }) {
  return (
    <div className={`space-y-2 animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-3 bg-gray-700 rounded ${
            i === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        ></div>
      ))}
    </div>
  );
}

export function PageLoading({ message = "Loading..." }) {
  return (
    <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-700 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-purple-500 rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
        </div>
        <p className="text-white text-lg font-medium">{message}</p>
      </div>
    </div>
  );
}

export function ProjectSkeleton() {
  return (
    <div className="card animate-pulse">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-700 rounded-lg"></div>
            <div>
              <div className="h-5 bg-gray-700 rounded w-32 mb-2"></div>
              <div className="h-4 bg-gray-700 rounded w-24"></div>
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-gray-700 rounded"></div>
            <div className="w-8 h-8 bg-gray-700 rounded"></div>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="h-3 bg-gray-700 rounded"></div>
          <div className="h-3 bg-gray-700 rounded w-5/6"></div>
          <div className="h-3 bg-gray-700 rounded w-4/6"></div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-6 bg-gray-700 rounded-full w-16"></div>
          ))}
        </div>

        <div className="flex space-x-3">
          <div className="h-10 bg-gray-700 rounded-lg flex-1"></div>
          <div className="h-10 bg-gray-700 rounded-lg flex-1"></div>
        </div>
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <section className="py-16 lg:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content Skeleton */}
          <div className="space-y-8 animate-pulse">
            <div className="space-y-4">
              <div className="h-4 bg-gray-700 rounded w-48"></div>
              <div className="space-y-2">
                <div className="h-12 bg-gray-700 rounded w-3/4"></div>
                <div className="h-12 bg-gray-700 rounded w-2/3"></div>
                <div className="h-8 bg-gray-700 rounded w-1/2"></div>
              </div>
              <div className="h-4 bg-gray-700 rounded w-full max-w-md"></div>
            </div>

            <div className="flex space-x-2">
              <div className="h-8 bg-gray-700 rounded-full w-20"></div>
              <div className="h-8 bg-gray-700 rounded-full w-24"></div>
              <div className="h-8 bg-gray-700 rounded-full w-16"></div>
            </div>

            <div className="flex space-x-4">
              <div className="h-12 bg-gray-700 rounded-lg w-32"></div>
              <div className="h-12 bg-gray-700 rounded-lg w-36"></div>
            </div>
          </div>

          {/* Right Content Skeleton */}
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gray-700 rounded-2xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}