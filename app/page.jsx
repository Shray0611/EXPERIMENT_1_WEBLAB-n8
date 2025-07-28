"use client"

import { useState } from "react"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import SearchFilter from "../components/SearchFilter"
import FeaturedTreks from "../components/FeaturedTreks"
import MapSection from "../components/MapSection"
import Footer from "../components/Footer"
import TrekListPage from "../components/TrekListPage"
import TrekDetailPage from "../components/TrekDetailPage"

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [selectedTrek, setSelectedTrek] = useState(null)
  const [searchFilters, setSearchFilters] = useState({
    difficulty: "",
    region: "",
    type: "",
    search: "",
  })

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
      default:
        return (
          <>
            <HeroSection />
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
    <div className="min-h-screen bg-stone-50">
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      {renderCurrentPage()}
      <Footer />
    </div>
  )
}
