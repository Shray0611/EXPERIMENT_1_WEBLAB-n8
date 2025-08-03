"use client"

import { useState } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar"
import Home from "@/components/pages/Home"
import Treks from "@/components/pages/Treks"
import Gallery from "@/components/pages/Gallery"
import Reviews from "@/components/pages/Reviews"
import About from "@/components/pages/About"
import Contact from "@/components/pages/Contact"
import Footer from "@/components/Footer"

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />
      case "treks":
        return <Treks />
      case "gallery":
        return <Gallery />
      case "reviews":
        return <Reviews />
      case "about":
        return <About />
      case "contact":
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 transition-all duration-500">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="relative">{renderPage()}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
