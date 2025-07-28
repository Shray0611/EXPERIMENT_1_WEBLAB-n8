"use client"

import { useState, useEffect } from "react"
import { Menu, X, Mountain, Compass, Users, Leaf, Bot, Map } from "lucide-react"

export default function Header({ currentPage, onPageChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Home", icon: Mountain },
    { id: "trek-list", label: "Treks", icon: Compass },
    { id: "route-planner", label: "Route Planner", icon: Map },
    { id: "ai-advisor", label: "AI Advisor", icon: Bot },
    { id: "group-planning", label: "Group Treks", icon: Users },
    { id: "sustainability", label: "Sustainability", icon: Leaf },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-stone-200 dark:border-gray-700"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => onPageChange("home")}>
            <Mountain className="h-8 w-8 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
            <span className="text-xl font-bold text-stone-800 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
              Maharashtra Treks
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentPage === item.id
                      ? "bg-emerald-600 text-white"
                      : isScrolled
                        ? "text-stone-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-800 hover:text-emerald-600 dark:hover:text-emerald-400"
                        : "text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </nav>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-stone-700 dark:text-gray-300" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-stone-700 dark:text-gray-300" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-lg border border-stone-200 dark:border-gray-700">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id)
                    setIsMenuOpen(false)
                  }}
                  className={`flex items-center space-x-3 w-full text-left py-3 px-4 rounded-lg transition-colors ${
                    currentPage === item.id
                      ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20"
                      : "text-stone-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-gray-800"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </div>
        )}
      </div>
    </header>
  )
}
