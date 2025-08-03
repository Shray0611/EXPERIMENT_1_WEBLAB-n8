"use client"

import { useState, useEffect } from "react"
import { Menu, X, Mountain, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export default function Navbar({ currentPage, setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
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

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId)
    setIsOpen(false)
  }

  if (!mounted) return null

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 shadow-soft"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => handleNavClick("home")}>
              <div className="relative">
                <Mountain className="h-8 w-8 text-emerald-600 dark:text-emerald-400 transition-all duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-emerald-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                  TrekIt
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">Maharashtra</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    currentPage === item.id
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                  }`}
                >
                  {item.label}
                  {currentPage === item.id && (
                    <div className="absolute inset-0 bg-emerald-100 dark:bg-emerald-900/30 rounded-full -z-10 animate-fade-in" />
                  )}
                </button>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 text-amber-500" />
                ) : (
                  <Moon className="h-5 w-5 text-slate-700" />
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                ) : (
                  <Menu className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-700/50">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    currentPage === item.id
                      ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsOpen(false)} />
      )}
    </>
  )
}
