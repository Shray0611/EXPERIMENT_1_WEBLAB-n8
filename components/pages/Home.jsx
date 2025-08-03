"use client"

import { useState, useEffect } from "react"
import { ArrowRight, MapPin, Users, Award, Star, Calendar, Clock, TrendingUp } from "lucide-react"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      title: "Discover Maharashtra's Hidden Peaks",
      subtitle: "Experience the thrill of conquering majestic mountains",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      title: "Adventure Awaits in the Sahyadris",
      subtitle: "Join thousands of trekkers on unforgettable journeys",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      title: "Create Memories That Last Forever",
      subtitle: "Professional guides, safe routes, incredible experiences",
      image: "/placeholder.svg?height=800&width=1200",
    },
  ]

  const featuredTreks = [
    {
      name: "Rajgad Fort",
      location: "Pune",
      difficulty: "Moderate",
      duration: "6-8 hours",
      rating: 4.8,
      price: "₹1,200",
      image: "/placeholder.svg?height=300&width=400",
      description: "Historic fort trek with panoramic valley views",
    },
    {
      name: "Harishchandragad",
      location: "Ahmednagar",
      difficulty: "Difficult",
      duration: "2 days",
      rating: 4.9,
      price: "₹2,500",
      image: "/placeholder.svg?height=300&width=400",
      description: "Challenging trek with ancient caves and cliff views",
    },
    {
      name: "Kalsubai Peak",
      location: "Nashik",
      difficulty: "Moderate",
      duration: "5-7 hours",
      rating: 4.7,
      price: "₹1,500",
      image: "/placeholder.svg?height=300&width=400",
      description: "Maharashtra's highest peak with stunning sunrise views",
    },
  ]

  const stats = [
    { icon: Users, value: "15,000+", label: "Happy Trekkers" },
    { icon: MapPin, value: "200+", label: "Trek Routes" },
    { icon: Award, value: "50+", label: "Expert Guides" },
    { icon: Star, value: "4.9", label: "Average Rating" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10" />
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
          </div>
        ))}

        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up animation-delay-200">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
                <button className="btn-primary group">
                  Start Your Adventure
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="btn-secondary">View All Treks</button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Treks */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 animate-fade-in-up">
              Featured <span className="gradient-text">Adventures</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Discover our most popular trekking destinations, carefully curated for unforgettable experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTreks.map((trek, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={trek.image || "/placeholder.svg"}
                    alt={trek.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        trek.difficulty === "Easy"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                          : trek.difficulty === "Moderate"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                            : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
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
                  <p className="text-slate-600 dark:text-slate-400 mb-4">{trek.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{trek.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{trek.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{trek.price}</div>
                    <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary">
              View All Treks
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 animate-fade-in-up">
              Why Choose <span className="gradient-text">TrekIt Maharashtra</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              We're committed to providing safe, memorable, and transformative trekking experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Expert Guides",
                description: "Certified and experienced local guides who know every trail intimately",
              },
              {
                icon: Users,
                title: "Small Groups",
                description: "Intimate group sizes for personalized attention and better experiences",
              },
              {
                icon: MapPin,
                title: "Best Routes",
                description: "Carefully selected trails showcasing Maharashtra's most stunning landscapes",
              },
              {
                icon: Calendar,
                title: "Flexible Booking",
                description: "Easy online booking with flexible cancellation policies",
              },
              {
                icon: Star,
                title: "Safety First",
                description: "Comprehensive safety measures and emergency protocols on every trek",
              },
              {
                icon: TrendingUp,
                title: "Growing Community",
                description: "Join a vibrant community of passionate trekkers and nature lovers",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
