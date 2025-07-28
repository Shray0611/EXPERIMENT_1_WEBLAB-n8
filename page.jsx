"use client"

import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import SearchFilter from "./components/SearchFilter"
import FeaturedTreks from "./components/FeaturedTreks"
import MapSection from "./components/MapSection"
import TrekListPage from "./components/TrekListPage"
import TrekDetailPage from "./components/TrekDetailPage"
import VirtualTrekking from "./components/VirtualTrekking"
import DynamicRoutePlanner from "./components/DynamicRoutePlanner"
import RealTimeTracker from "./components/RealTimeTracker"
import AITrekAdvisor from "./components/AITrekAdvisor"
import SustainabilityDashboard from "./components/SustainabilityDashboard"
import GroupTrekPlanning from "./components/GroupTrekPlanning"
import LocalCommunity from "./components/LocalCommunity"
import ARPreview from "./components/ARPreview"
import Footer from "./components/Footer"

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [selectedTrek, setSelectedTrek] = useState(null)
  const [darkMode, setDarkMode] = useState(false)
  const [searchFilters, setSearchFilters] = useState({
    difficulty: "",
    region: "",
    type: "",
    search: "",
  })

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setDarkMode(savedTheme === "dark")
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light")
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleTrekSelect = (trek) => {
    setSelectedTrek(trek)
    setCurrentPage("trek-detail")
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "trek-list":
        return <TrekListPage searchFilters={searchFilters} onTrekSelect={handleTrekSelect} />
      case "trek-detail":
        return <TrekDetailPage trek={selectedTrek} onBack={() => setCurrentPage("trek-list")} />
      case "virtual-trekking":
        return <VirtualTrekking onBack={() => setCurrentPage("home")} />
      case "route-planner":
        return <DynamicRoutePlanner onBack={() => setCurrentPage("home")} />
      case "tracker":
        return <RealTimeTracker onBack={() => setCurrentPage("home")} />
      case "ai-advisor":
        return <AITrekAdvisor onBack={() => setCurrentPage("home")} />
      case "sustainability":
        return <SustainabilityDashboard onBack={() => setCurrentPage("home")} />
      case "group-planning":
        return <GroupTrekPlanning onBack={() => setCurrentPage("home")} />
      case "community":
        return <LocalCommunity onBack={() => setCurrentPage("home")} />
      case "ar-preview":
        return <ARPreview trek={selectedTrek} onBack={() => setCurrentPage("trek-detail")} />
      default:
        return (
          <>
            <HeroSection onPageChange={handlePageChange} />
            <SearchFilter
              searchFilters={searchFilters}
              setSearchFilters={setSearchFilters}
              onSearch={() => setCurrentPage("trek-list")}
            />
            <FeaturedTreks onTrekSelect={handleTrekSelect} />
            <MapSection />
          </>
        )
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-stone-50 dark:bg-gray-900 text-stone-900 dark:text-white">
        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-20 right-4 z-50 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-200 dark:border-gray-700"
        >
          {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-stone-600" />}
        </button>

        <Header currentPage={currentPage} onPageChange={handlePageChange} />
        {renderCurrentPage()}
        <Footer />
      </div>
    </div>
  )
}
