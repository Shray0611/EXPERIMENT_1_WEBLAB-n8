"use client"

import { useState } from "react"
import { Search, MapPin, Clock, Users, Star, Calendar, ArrowRight } from "lucide-react"

export default function Treks() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [sortBy, setSortBy] = useState("popularity")

  const treks = [
    {
      id: 1,
      name: "Rajgad Fort",
      location: "Pune",
      difficulty: "Moderate",
      duration: "6-8 hours",
      rating: 4.8,
      price: "₹1,200",
      image: "/placeholder.svg?height=300&width=400",
      description: "Historic fort trek with panoramic valley views and ancient architecture",
      highlights: ["Ancient fort ruins", "Panoramic views", "Historical significance"],
      groupSize: "8-15 people",
      nextDate: "2024-02-15",
    },
    {
      id: 2,
      name: "Harishchandragad",
      location: "Ahmednagar",
      difficulty: "Difficult",
      duration: "2 days",
      rating: 4.9,
      price: "₹2,500",
      image: "/placeholder.svg?height=300&width=400",
      description: "Challenging trek with ancient caves, cliff views, and overnight camping",
      highlights: ["Konkan Kada cliff", "Ancient caves", "Sunrise views"],
      groupSize: "6-12 people",
      nextDate: "2024-02-20",
    },
    {
      id: 3,
      name: "Kalsubai Peak",
      location: "Nashik",
      difficulty: "Moderate",
      duration: "5-7 hours",
      rating: 4.7,
      price: "₹1,500",
      image: "/placeholder.svg?height=300&width=400",
      description: "Maharashtra's highest peak with stunning sunrise views and temple visit",
      highlights: ["Highest peak", "Temple visit", "Sunrise views"],
      groupSize: "10-20 people",
      nextDate: "2024-02-18",
    },
    {
      id: 4,
      name: "Sinhagad Fort",
      location: "Pune",
      difficulty: "Easy",
      duration: "4-5 hours",
      rating: 4.6,
      price: "₹800",
      image: "/placeholder.svg?height=300&width=400",
      description: "Easy trek perfect for beginners with historical fort and local cuisine",
      highlights: ["Beginner friendly", "Historical fort", "Local food"],
      groupSize: "15-25 people",
      nextDate: "2024-02-12",
    },
    {
      id: 5,
      name: "Lohagad Fort",
      location: "Pune",
      difficulty: "Easy",
      duration: "4-6 hours",
      rating: 4.5,
      price: "₹900",
      image: "/placeholder.svg?height=300&width=400",
      description: "Scenic trek through lush greenery with ancient fort exploration",
      highlights: ["Lush greenery", "Ancient architecture", "Easy trail"],
      groupSize: "12-20 people",
      nextDate: "2024-02-14",
    },
    {
      id: 6,
      name: "Raigad Fort",
      location: "Raigad",
      difficulty: "Moderate",
      duration: "6-8 hours",
      rating: 4.8,
      price: "₹1,800",
      image: "/placeholder.svg?height=300&width=400",
      description: "Historic capital of Maratha Empire with ropeway and trekking options",
      highlights: ["Maratha history", "Ropeway option", "Palace ruins"],
      groupSize: "8-15 people",
      nextDate: "2024-02-22",
    },
  ]

  const locations = ["all", "Pune", "Nashik", "Ahmednagar", "Raigad"]
  const difficulties = ["all", "Easy", "Moderate", "Difficult"]

  const filteredTreks = treks.filter((trek) => {
    const matchesSearch =
      trek.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trek.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDifficulty = selectedDifficulty === "all" || trek.difficulty === selectedDifficulty
    const matchesLocation = selectedLocation === "all" || trek.location === selectedLocation

    return matchesSearch && matchesDifficulty && matchesLocation
  })

  const sortedTreks = [...filteredTreks].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return (
          Number.parseInt(a.price.replace("₹", "").replace(",", "")) -
          Number.parseInt(b.price.replace("₹", "").replace(",", ""))
        )
      case "price-high":
        return (
          Number.parseInt(b.price.replace("₹", "").replace(",", "")) -
          Number.parseInt(a.price.replace("₹", "").replace(",", ""))
        )
      case "rating":
        return b.rating - a.rating
      case "difficulty":
        const difficultyOrder = { Easy: 1, Moderate: 2, Difficult: 3 }
        return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]
      default:
        return b.rating - a.rating
    }
  })

  return (
    <div className="pt-20 min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Explore Maharashtra's <span className="text-emerald-200">Best Treks</span>
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Discover breathtaking trails, ancient forts, and stunning landscapes across Maharashtra
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search treks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location === "all" ? "All Locations" : location}
                  </option>
                ))}
              </select>

              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
              >
                {difficulties.map((difficulty) => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty === "all" ? "All Difficulties" : difficulty}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
              >
                <option value="popularity">Sort by Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="difficulty">Difficulty Level</option>
              </select>
            </div>
          </div>

          <div className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            Showing {sortedTreks.length} of {treks.length} treks
          </div>
        </div>
      </section>

      {/* Trek Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedTreks.map((trek, index) => (
              <div
                key={trek.id}
                className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={trek.image || "/placeholder.svg"}
                    alt={trek.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm ${
                        trek.difficulty === "Easy"
                          ? "bg-green-100/90 text-green-800 dark:bg-green-900/50 dark:text-green-300"
                          : trek.difficulty === "Moderate"
                            ? "bg-yellow-100/90 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300"
                            : "bg-red-100/90 text-red-800 dark:bg-red-900/50 dark:text-red-300"
                      }`}
                    >
                      {trek.difficulty}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">{trek.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{trek.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">{trek.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1 text-slate-500 dark:text-slate-400">
                        <MapPin className="h-4 w-4" />
                        <span>{trek.location}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-slate-500 dark:text-slate-400">
                        <Clock className="h-4 w-4" />
                        <span>{trek.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1 text-slate-500 dark:text-slate-400">
                        <Users className="h-4 w-4" />
                        <span>{trek.groupSize}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-slate-500 dark:text-slate-400">
                        <Calendar className="h-4 w-4" />
                        <span>Next: {new Date(trek.nextDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {trek.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{trek.price}</div>
                    <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 group">
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4 inline transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {sortedTreks.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🏔️</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">No treks found</h3>
              <p className="text-slate-600 dark:text-slate-400">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
