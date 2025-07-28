"use client"

import { MapPin, Clock, Star, Eye } from "lucide-react"

const featuredTreks = [
  {
    id: 1,
    name: "Kalsubai Peak",
    location: "Ahmednagar",
    difficulty: "Moderate",
    duration: "1 Day",
    rating: 4.8,
    image: "/placeholder.svg?height=300&width=400&text=Kalsubai+Peak",
    description: "Maharashtra's highest peak offering breathtaking sunrise views",
    virtualAvailable: true,
  },
  {
    id: 2,
    name: "Rajmachi Fort",
    location: "Lonavala",
    difficulty: "Easy",
    duration: "2 Days",
    rating: 4.6,
    image: "/placeholder.svg?height=300&width=400&text=Rajmachi+Fort",
    description: "Historic twin forts perfect for monsoon trekking",
    virtualAvailable: true,
  },
  {
    id: 3,
    name: "Harishchandragad",
    location: "Ahmednagar",
    difficulty: "Difficult",
    duration: "2 Days",
    rating: 4.9,
    image: "/placeholder.svg?height=300&width=400&text=Harishchandragad",
    description: "Ancient fort with the famous Kokankada cliff",
    virtualAvailable: false,
  },
  {
    id: 4,
    name: "Tung Fort",
    location: "Lonavala",
    difficulty: "Easy",
    duration: "1 Day",
    rating: 4.4,
    image: "/placeholder.svg?height=300&width=400&text=Tung+Fort",
    description: "Perfect beginner trek with panoramic valley views",
    virtualAvailable: true,
  },
]

export default function FeaturedTreks({ onTrekSelect }) {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400"
      case "moderate":
        return "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400"
      case "difficult":
        return "text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400"
      default:
        return "text-stone-600 bg-stone-100 dark:bg-gray-700 dark:text-gray-400"
    }
  }

  return (
    <section className="py-16 bg-stone-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-800 dark:text-white mb-4">Featured Treks</h2>
          <p className="text-stone-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our most popular trekking destinations across Maharashtra
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredTreks.map((trek) => (
            <div
              key={trek.id}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group border border-stone-200 dark:border-gray-700"
              onClick={() => onTrekSelect(trek)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={trek.image || "/placeholder.svg"}
                  alt={trek.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(trek.difficulty)}`}
                  >
                    {trek.difficulty}
                  </span>
                </div>
                {trek.virtualAvailable && (
                  <div className="absolute top-4 left-4">
                    <div className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                      <Eye className="h-3 w-3" />
                      <span>Virtual</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-800 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {trek.name}
                </h3>
                <p className="text-stone-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">{trek.description}</p>

                <div className="flex items-center justify-between text-sm text-stone-500 dark:text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{trek.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{trek.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-stone-700 dark:text-gray-300">{trek.rating}</span>
                  </div>
                </div>

                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
