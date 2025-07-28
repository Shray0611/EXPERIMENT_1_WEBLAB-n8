"use client"

import { useState } from "react"
import { ArrowLeft, MapPin, Clock, Star, ChevronDown, ChevronUp, Calendar, Users, Phone } from "lucide-react"

const trekImages = [
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
]

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    date: "2 weeks ago",
    comment: "Amazing trek! The sunrise view from the top is absolutely breathtaking. Well organized and great guides.",
  },
  {
    id: 2,
    name: "Rahul Patil",
    rating: 4,
    date: "1 month ago",
    comment: "Challenging but rewarding trek. The trail is well marked and the weather was perfect. Highly recommend!",
  },
  {
    id: 3,
    name: "Sneha Desai",
    rating: 5,
    date: "2 months ago",
    comment: "First time trekking and this was perfect! The team was very supportive and the views were incredible.",
  },
]

const faqs = [
  {
    question: "What is the best time to visit Kalsubai?",
    answer:
      "The best time to trek Kalsubai is during the post-monsoon season (October to February) when the weather is pleasant and the views are clear.",
  },
  {
    question: "Is this trek suitable for beginners?",
    answer:
      "Kalsubai is rated as moderate difficulty. While beginners can attempt it, some basic fitness level is recommended. We provide support throughout the trek.",
  },
  {
    question: "What should I bring for the trek?",
    answer:
      "Essential items include comfortable trekking shoes, water bottles, snacks, rain gear (during monsoon), first aid kit, and a flashlight for early morning starts.",
  },
  {
    question: "Are there accommodation facilities?",
    answer:
      "We provide camping arrangements at the base. For overnight treks, we set up comfortable tents with basic amenities.",
  },
]

export default function TrekDetailPage({ trek, onBack }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [expandedFaq, setExpandedFaq] = useState(null)

  if (!trek) {
    return (
      <div className="min-h-screen bg-stone-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">Trek not found</h2>
          <button
            onClick={onBack}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    )
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "text-green-600 bg-green-100"
      case "moderate":
        return "text-yellow-600 bg-yellow-100"
      case "difficult":
        return "text-red-600 bg-red-100"
      default:
        return "text-stone-600 bg-stone-100"
    }
  }

  const scrollToBooking = () => {
    document.getElementById("booking-section").scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <div className="min-h-screen bg-stone-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Back to Treks</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative">
                <img
                  src={trekImages[currentImageIndex] || "/placeholder.svg"}
                  alt={trek.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {trekImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-stone-800 mb-2">{trek.name}</h1>
                    <div className="flex items-center space-x-4 text-stone-600">
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
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${getDifficultyColor(trek.difficulty)}`}
                  >
                    {trek.difficulty}
                  </span>
                </div>

                <p className="text-stone-600 leading-relaxed mb-6">
                  {trek.description} This magnificent trek offers an unforgettable experience through diverse
                  landscapes, from dense forests to rocky terrain, culminating in spectacular panoramic views that
                  stretch across the Western Ghats. The journey combines physical challenge with natural beauty, making
                  it a perfect adventure for nature enthusiasts and thrill-seekers alike.
                </p>

                <button
                  onClick={scrollToBooking}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Book This Trek
                </button>
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-stone-800 mb-6">Trek Itinerary</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800">Day 1: Base Village to Summit</h3>
                    <p className="text-stone-600 text-sm">
                      Early morning start from base village, trek through forest trails, reach summit for sunrise,
                      explore the temple, and return to base by evening.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800">Return Journey</h3>
                    <p className="text-stone-600 text-sm">
                      Descent through alternate route, visit local attractions, traditional lunch, and departure to
                      respective destinations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-stone-800 mb-6">Reviews</h2>
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-stone-200 pb-6 last:border-b-0">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-stone-800">{review.name}</h4>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? "text-yellow-400 fill-current" : "text-stone-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-stone-500">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-stone-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-stone-800 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-stone-200 rounded-lg">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-stone-50 transition-colors"
                    >
                      <span className="font-medium text-stone-800">{faq.question}</span>
                      {expandedFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-stone-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-stone-500" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="px-4 pb-4">
                        <p className="text-stone-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <div id="booking-section" className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
              <h3 className="text-xl font-bold text-stone-800 mb-4">Book Your Trek</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-stone-600">Price per person</span>
                  <span className="text-2xl font-bold text-emerald-600">₹1,500</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Select Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-stone-400" />
                      <input
                        type="date"
                        className="w-full pl-10 pr-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Number of People</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-stone-400" />
                      <select className="w-full pl-10 pr-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500">
                        <option>1 Person</option>
                        <option>2 People</option>
                        <option>3 People</option>
                        <option>4+ People</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 mb-4">
                Book Now
              </button>

              <div className="flex items-center justify-center space-x-2 text-sm text-stone-500">
                <Phone className="h-4 w-4" />
                <span>Call us: +91 98765 43210</span>
              </div>
            </div>

            {/* Trek Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-stone-800 mb-4">Trek Statistics</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-stone-600">Elevation</span>
                  <span className="font-semibold">1,646m</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-600">Distance</span>
                  <span className="font-semibold">6 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-600">Trek Grade</span>
                  <span className="font-semibold">Moderate</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-600">Best Season</span>
                  <span className="font-semibold">Oct - Feb</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
