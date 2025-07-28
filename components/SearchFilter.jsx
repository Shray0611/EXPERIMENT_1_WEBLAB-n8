"use client"

import { Search, Filter, Sparkles } from "lucide-react"

export default function SearchFilter({ searchFilters, setSearchFilters, onSearch }) {
  const handleFilterChange = (key, value) => {
    setSearchFilters((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-8 w-8 text-emerald-600" />
            <h2 className="text-3xl font-bold text-stone-800 dark:text-white">Find Your Perfect Trek</h2>
          </div>
          <p className="text-stone-600 dark:text-gray-400 max-w-2xl mx-auto">
            Search and filter through our collection of Maharashtra's most beautiful trekking destinations
          </p>
        </div>

        <div className="bg-stone-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-stone-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search Input */}
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Search treks..."
                value={searchFilters.search}
                onChange={(e) => handleFilterChange("search", e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-stone-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-gray-700 text-stone-900 dark:text-white placeholder-stone-500 dark:placeholder-gray-400"
              />
            </div>

            {/* Difficulty Filter */}
            <select
              value={searchFilters.difficulty}
              onChange={(e) => handleFilterChange("difficulty", e.target.value)}
              className="px-4 py-3 border border-stone-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-gray-700 text-stone-900 dark:text-white"
            >
              <option value="">All Difficulties</option>
              <option value="easy">Easy</option>
              <option value="moderate">Moderate</option>
              <option value="difficult">Difficult</option>
            </select>

            {/* Region Filter */}
            <select
              value={searchFilters.region}
              onChange={(e) => handleFilterChange("region", e.target.value)}
              className="px-4 py-3 border border-stone-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-gray-700 text-stone-900 dark:text-white"
            >
              <option value="">All Regions</option>
              <option value="western-ghats">Western Ghats</option>
              <option value="sahyadri">Sahyadri</option>
              <option value="konkan">Konkan</option>
              <option value="vidarbha">Vidarbha</option>
            </select>

            {/* Search Button */}
            <button
              onClick={onSearch}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Filter className="h-5 w-5" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
