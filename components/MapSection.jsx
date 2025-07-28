"use client"

import { MapPin, Navigation } from "lucide-react"

const trekLocations = [
  { name: "Kalsubai", region: "Ahmednagar", x: "45%", y: "35%", difficulty: "moderate" },
  { name: "Rajmachi", region: "Lonavala", x: "25%", y: "45%", difficulty: "easy" },
  { name: "Harishchandragad", region: "Ahmednagar", x: "50%", y: "40%", difficulty: "difficult" },
  { name: "Tung Fort", region: "Lonavala", x: "30%", y: "50%", difficulty: "easy" },
  { name: "Sinhagad", region: "Pune", x: "35%", y: "55%", difficulty: "easy" },
  { name: "Lohagad", region: "Lonavala", x: "28%", y: "48%", difficulty: "moderate" },
]

export default function MapSection() {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "text-green-500"
      case "moderate":
        return "text-yellow-500"
      case "difficult":
        return "text-red-500"
      default:
        return "text-emerald-600"
    }
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Navigation className="h-8 w-8 text-emerald-600" />
            <h2 className="text-3xl font-bold text-stone-800 dark:text-white">Explore Maharashtra</h2>
          </div>
          <p className="text-stone-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover trekking locations spread across the beautiful state of Maharashtra
          </p>
        </div>

        <div className="relative bg-stone-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-stone-200 dark:border-gray-700">
          {/* Map Background */}
          <img
            src="/placeholder.svg?height=500&width=800&text=Maharashtra+Map"
            alt="Maharashtra Map"
            className="w-full h-96 object-cover opacity-80 dark:opacity-60"
          />

          {/* Trek Location Markers */}
          {trekLocations.map((location, index) => (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              style={{ left: location.x, top: location.y }}
            >
              <div className="relative">
                <MapPin
                  className={`h-8 w-8 ${getDifficultyColor(location.difficulty)} drop-shadow-lg animate-bounce hover:animate-none transition-all duration-300 group-hover:scale-125`}
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-stone-800 dark:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
                    <div className="font-semibold">{location.name}</div>
                    <div className="text-stone-300 dark:text-gray-400 text-xs">{location.region}</div>
                    <div className={`text-xs capitalize ${getDifficultyColor(location.difficulty)}`}>
                      {location.difficulty}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-stone-200 dark:border-gray-600">
            <h4 className="font-semibold text-stone-800 dark:text-white mb-2">Trek Locations</h4>
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-green-500" />
                <span className="text-stone-600 dark:text-gray-400">Easy</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-yellow-500" />
                <span className="text-stone-600 dark:text-gray-400">Moderate</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-red-500" />
                <span className="text-stone-600 dark:text-gray-400">Difficult</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
