"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      title: "Kalsubai Peak Sunrise",
      location: "Ahmednagar",
      description: "Breathtaking sunrise view from Maharashtra's highest peak",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      title: "Rajmachi Fort Monsoon",
      location: "Lonavala",
      description: "Lush green landscapes during monsoon season",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1464822759844-d150baec4ba5?w=800&h=600&fit=crop",
      title: "Harishchandragad Cliff",
      location: "Ahmednagar",
      description: "The famous Kokankada cliff edge experience",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      title: "Sinhagad Fort Sunset",
      location: "Pune",
      description: "Golden hour at the historic Maratha fort",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      title: "Western Ghats Valley",
      location: "Sahyadri Range",
      description: "Panoramic view of the Western Ghats",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1464822759844-d150baec4ba5?w=800&h=600&fit=crop",
      title: "Monsoon Waterfalls",
      location: "Lonavala",
      description: "Cascading waterfalls during peak monsoon",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      title: "Trekking Trail",
      location: "Various Locations",
      description: "Scenic trekking paths through dense forests",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      title: "Ancient Fort Ruins",
      location: "Raigad",
      description: "Historical architecture amidst natural beauty",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      title: "Cloud Kissed Peaks",
      location: "Ahmednagar",
      description: "Peaks emerging through morning clouds",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1464822759844-d150baec4ba5?w=800&h=600&fit=crop",
      title: "Valley Views",
      location: "Pune",
      description: "Expansive valley views from mountain tops",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      title: "Rock Formations",
      location: "Lonavala",
      description: "Unique rock formations and geological wonders",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      title: "Starry Night Sky",
      location: "Various Locations",
      description: "Clear night skies perfect for stargazing",
    },
  ]

  const openLightbox = (image, index) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length
    setSelectedImage(images[nextIndex])
    setCurrentIndex(nextIndex)
  }

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length
    setSelectedImage(images[prevIndex])
    setCurrentIndex(prevIndex)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Trek Gallery</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore the stunning landscapes and breathtaking views from our Maharashtra trekking adventures
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onClick={() => openLightbox(image, index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image */}
              <img
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-6 rounded-b-lg">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-lg mb-1">{selectedImage.location}</p>
                <p className="text-sm opacity-90">{selectedImage.description}</p>
              </div>

              {/* Image Counter */}
              <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
