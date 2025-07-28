"use client"

import { ChevronDown, Play, Compass, Users, Leaf } from "lucide-react"

export default function HeroSection({ onPageChange }) {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  const features = [
    { icon: Compass, label: "AI Route Planning", action: () => onPageChange("route-planner") },
    { icon: Play, label: "Virtual Trekking", action: () => onPageChange("virtual-trekking") },
    { icon: Users, label: "Group Planning", action: () => onPageChange("group-planning") },
    { icon: Leaf, label: "Eco-Friendly", action: () => onPageChange("sustainability") },
  ]

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/placeholder.svg?height=1080&width=1920&text=Maharashtra+Trekking+Landscape')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          Explore the Best
          <span className="block text-emerald-400">Treks Across Maharashtra</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 opacity-90 animate-fade-in-up animation-delay-300 max-w-3xl mx-auto">
          Discover majestic peaks, ancient forts, and hidden trails with AI-powered planning, real-time tracking, and
          sustainable trekking experiences
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-fade-in-up animation-delay-600">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <button
                key={index}
                onClick={feature.action}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
              >
                <Icon className="h-8 w-8 mx-auto mb-2 text-emerald-400 group-hover:text-emerald-300" />
                <span className="text-sm font-medium">{feature.label}</span>
              </button>
            )
          })}
        </div>

        <button
          onClick={scrollToContent}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-900"
        >
          Start Your Adventure
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white opacity-70" />
      </div>
    </section>
  )
}
