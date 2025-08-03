"use client"

import { useState, useEffect } from "react"
import { Menu, X, Mountain } from "lucide-react"

export default function Header({ currentPage, onPageChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Home" },
    { id: "treks", label: "Treks" },
    { id: "gallery", label: "Gallery" },
    { id: "reviews", label: "Reviews" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl shadow-sm border-b border-slate-200/20 dark:border-slate-800/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => onPageChange("home")}>
            <div className="relative">
              <Mountain className="h-8 w-8 text-emerald-600 group-hover:text-emerald-500 transition-colors duration-300" />
              <div className="absolute -inset-2 bg-emerald-600/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              TrekIt Maharashtra
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  currentPage === item.id
                    ? "text-emerald-600 dark:text-emerald-400"
                    : isScrolled
                      ? "text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                      : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <div className="absolute inset-0 bg-emerald-50 dark:bg-emerald-950/30 rounded-full -z-10" />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-slate-700 dark:text-slate-300" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-slate-700 dark:text-slate-300" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200/20 dark:border-slate-800/20">
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id)
                    setIsMenuOpen(false)
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    currentPage === item.id
                      ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30"
                      : "text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-900/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
