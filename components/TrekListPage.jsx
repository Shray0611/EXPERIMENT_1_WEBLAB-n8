"use client"

import { useState } from "react"
import { MapPin, Clock, TrendingUp, Filter, Grid, List, Star, Eye } from "lucide-react"

const allTreks = [
  {
    id: 1,
    name: "Kalsubai Peak",
    location: "Ahmednagar",
    difficulty: "moderate",
    duration: "1 Day",
    type: "mountain",
    region: "western-ghats",
    popularity: 95,
    rating: 4.8,
    image: "/placeholder.svg?height=300&width=400&text=Kalsubai+Peak",
    description:
      "Maharashtra's highest peak offering breathtaking sunrise views and challenging trails through dense forests.",
    virtualAvailable: true,
  },
  {
    id: 2,
    name: "Rajmachi Fort",
    location: "Lonavala",
    difficulty: "easy",
    duration: "2 Days",
    type: "fort",
    region: "sahyadri",
    popularity: 88,
    rating: 4.6,
    image: "/placeholder.svg?height=300&width=400&text=Rajmachi+Fort",
    description:
      "Historic twin forts perfect for monsoon trekking with lush green landscapes and ancient architecture.",
    virtualAvailable: true,
  },
  {
    id: 3,
    name: "Harishchandragad",
    location: "Ahmednagar",
    difficulty: "difficult",
    duration: "2 Days",
    type: "fort",
    region: "western-ghats",
    popularity: 92,
    rating: 4.9,
    image: "/placeholder.svg?height=300&width=400&text=Harishchandragad",
    description:
      "Ancient fort with the famous Kokankada cliff offering spectacular views and challenging rock patches.",
    virtualAvailable: false,
  },
  {
    id: 4,
    name: "Tung Fort",
    location: "Lonavala",
    difficulty: "easy",
    duration: "1 Day",
    type: "fort",
    region: "sahyadri",
    popularity: 75,
    rating: 4.4,
    image: "/placeholder.svg?height=300&width=400&text=Tung+Fort",
    description: "Perfect beginner trek with panoramic valley views and easy accessibility from Mumbai and Pune.",
    virtualAvailable: true,
  },
  {
    id: 5,
    name: "Sinhagad Fort",
    location: "Pune",
    difficulty: "easy",
    duration: "1 Day",
    type: "fort",
    region: "sahyadri",
    popularity: 85,
    rating: 4.5,
    image: "/placeholder.svg?height=300&width=400&text=Sinhagad+Fort",
    description: "Historical fort near Pune with rich Maratha history and beautiful sunset views.",
    virtualAvailable: false,
  },
  {
    id: 6,
    name: "Lohagad Fort",
    location: "Lonavala",
    difficulty: "moderate",
    duration: "1 Day",
    type: "fort",
    region: "sahyadri",
    popularity: 80,
    rating: 4.3,
    image: "/placeholder.svg?height=300&width=400&text=Lohagad+Fort",
    description: "Monsoon favorite with cloud-kissed ramparts and ancient caves to explore.",
    virtualAvailable: true,
  },
]

export default function TrekListPage({ searchFilters, onTrekSelect }) {
  const [viewMode, setViewMode] = useState("grid")
  const [sortBy, setSortBy] = useState("popularity")
  const [localFilters, setLocalFilters] = useState({
    difficulty: "",
    region: "",
    type: "",
    virtualOnly: false,
  })

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

  const filteredTreks = allTreks
    .filter((trek) => {
      const matchesSearch =
        !searchFilters.search ||
        trek.name.toLowerCase().includes(searchFilters.search.toLowerCase()) ||
        trek.location.toLowerCase().includes(searchFilters.search.toLowerCase())

      const matchesDifficulty = !searchFilters.difficulty || trek.difficulty === searchFilters.difficulty
      const matchesRegion = !searchFilters.region || trek.region === searchFilters.region
      const matchesLocalDifficulty = !localFilters.difficulty || trek.difficulty === localFilters.difficulty
      const matchesLocalRegion = !localFilters.region || trek.region === localFilters.region
      const matchesType = !localFilters.type || trek.type === localFilters.type
      const matchesVirtual = !localFilters.virtualOnly || trek.virtualAvailable

      return (
        matchesSearch &&
        matchesDifficulty &&
        matchesRegion &&
        matchesLocalDifficulty &&
        matchesLocalRegion &&
        matchesType &&
        matchesVirtual
      )
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "popularity":
          return b.popularity - a.popularity
        case "rating":
          return b.rating - a.rating
        case "duration":
          return a.duration.localeCompare(b.duration)
        case "difficulty":
          const difficultyOrder = { easy: 1, moderate: 2, difficult: 3 }
          return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]
        default:
          return 0
      }
    })

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg sticky top-24 border border-stone-200 dark:border-gray-700">
              <div className="flex items-center space-x-2 mb-6">
                <Filter className="h-5 w-5 text-emerald-600" />
                <h3 className="text-lg font-semibold text-stone-800 dark:text-white">Filters</h3>
              </div>

              <div className="space-y-6">
                {/* Difficulty Filter */}
                <div>
                  <label className="block text-sm font-medium text-stone-700 dark:text-gray-300 mb-2">Difficulty</label>
                  <select
                    value={localFilters.difficulty}
                    onChange={(e) => setLocalFilters((prev) => ({ ...prev, difficulty: e.target.value }))}
                    className="w-full px-3 py-2 border border-stone-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-700 text-stone-900 dark:text-white"
                  >
                    <option value="">All Difficulties</option>
                    <option value="easy">Easy</option>
                    <option value="moderate">Moderate</option>
                    <option value="difficult">Difficult</option>
                  </select>
                </div>

                {/* Region Filter */}
                <div>
                  <label className="block text-sm font-medium text-stone-700 dark:text-gray-300 mb-2">Region</label>
                  <select
                    value={localFilters.region}
                    onChange={(e) => setLocalFilters((prev) => ({ ...prev, region: e.target.value }))}
                    className="w-full px-3 py-2 border border-stone-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-700 text-stone-900 dark:text-white"
                  >
                    <option value="">All Regions</option>
                    <option value="western-ghats">Western Ghats</option>
                    <option value="sahyadri">Sahyadri</option>
                    <option value="konkan">Konkan</option>
                  </select>
                </div>

                {/* Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-stone-700 dark:text-gray-300 mb-2">Trek Type</label>
                  <select
                    value={localFilters.type}
                    onChange={(e) => setLocalFilters((prev) => ({ ...prev, type: e.target.value }))}
                    className="w-full px-3 py-2 border border-stone-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-700 text-stone-900 dark:text-white"
                  >
                    <option value="">All Types</option>
                    <option value="mountain">Mountain</option>
                    <option value="fort">Fort</option>
                    <option value="forest">Forest</option>
                  </select>
                </div>

                {/* Virtual Trek Filter */}
                <div>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={localFilters.virtualOnly}
                      onChange={(e) => setLocalFilters((prev) => ({ ...prev, virtualOnly: e.target.checked }))}
                      className="rounded border-stone-300 dark:border-gray-600 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-sm font-medium text-stone-700 dark:text-gray-300">Virtual Treks Only</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-stone-800 dark:text-white mb-2">All Treks</h1>
                <p className="text-stone-600 dark:text-gray-400">
                  Found {filteredTreks.length} trek{filteredTreks.length !== 1 ? "s" : ""}
                </p>
              </div>

              <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-stone-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-700 text-stone-900 dark:text-white"
                >
                  <option value="popularity">Sort by Popularity</option>
                  <option value="rating">Sort by Rating</option>
                  <option value="duration">Sort by Duration</option>
                  <option value="difficulty">Sort by Difficulty</option>
                </select>

                {/* View Mode */}
                <div className="flex border border-stone-200 dark:border-gray-600 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 ${viewMode === "grid" ? "bg-emerald-600 text-white" : "text-stone-600 dark:text-gray-400 hover:bg-stone-100 dark:hover:bg-gray-700"}`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 ${viewMode === "list" ? "bg-emerald-600 text-white" : "text-stone-600 dark:text-gray-400 hover:bg-stone-100 dark:hover:bg-gray-700"}`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Trek Grid/List */}
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-6"}>
              {filteredTreks.map((trek) => (
                <div
                  key={trek.id}
                  className={`bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 cursor-pointer group border border-stone-200 dark:border-gray-700 ${
                    viewMode === "list" ? "flex" : ""
                  }`}
                  onClick={() => onTrekSelect(trek)}
                >
                  <div className={`relative overflow-hidden ${viewMode === "list" ? "w-1/3" : ""}`}>
                    <img
                      src={trek.image || "/placeholder.svg"}
                      alt={trek.name}
                      className={`object-cover transition-transform duration-500 group-hover:scale-110 ${
                        viewMode === "list" ? "w-full h-full" : "w-full h-48"
                      }`}
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

                  <div className={`p-6 ${viewMode === "list" ? "w-2/3 flex flex-col justify-between" : ""}`}>
                    <div>
                      <h3 className="text-xl font-bold text-stone-800 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {trek.name}
                      </h3>
                      <p className="text-stone-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                        {trek.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-stone-500 dark:text-gray-500">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{trek.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{trek.duration}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1 text-sm text-stone-500 dark:text-gray-500">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span>{trek.rating}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-sm text-stone-500 dark:text-gray-500">
                            <TrendingUp className="h-4 w-4" />
                            <span>{trek.popularity}%</span>
                          </div>
                        </div>
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform group-hover:scale-105">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredTreks.length === 0 && (
              <div className="text-center py-12">
                <div className="text-stone-400 dark:text-gray-600 mb-4">
                  <Filter className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-stone-600 dark:text-gray-400 mb-2">No treks found</h3>
                <p className="text-stone-500 dark:text-gray-500">Try adjusting your filters to see more results</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
