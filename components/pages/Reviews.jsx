"use client"

import { Star } from "lucide-react"

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      date: "2 weeks ago",
      trek: "Kalsubai Peak",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      comment:
        "Amazing experience! The sunrise view from Kalsubai was absolutely breathtaking. Our guide was knowledgeable and ensured everyone's safety throughout the trek. The trail was challenging but well worth it. Highly recommend TrekIt Maharashtra for anyone looking to explore the Western Ghats!",
    },
    {
      id: 2,
      name: "Rahul Patil",
      location: "Pune",
      rating: 4,
      date: "1 month ago",
      trek: "Rajmachi Fort",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      comment:
        "Great trek during monsoon season! The twin forts of Rajmachi were stunning with all the greenery around. The weather was perfect and the waterfalls along the way were a bonus. The only reason I'm giving 4 stars instead of 5 is that the trail could be better marked in some sections.",
    },
    {
      id: 3,
      name: "Sneha Desai",
      location: "Nashik",
      rating: 5,
      date: "2 months ago",
      trek: "Harishchandragad",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      comment:
        "This was my first difficult trek and what an experience it was! The Kokankada cliff is absolutely thrilling. The team at TrekIt Maharashtra was very supportive and helped me push through the challenging sections. The night camping under the stars was magical. Will definitely book more treks with them!",
    },
    {
      id: 4,
      name: "Amit Joshi",
      location: "Aurangabad",
      rating: 5,
      date: "3 months ago",
      trek: "Sinhagad Fort",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      comment:
        "Perfect weekend getaway! Sinhagad Fort trek was ideal for beginners like me. The historical significance combined with beautiful views made it a memorable experience. The guide shared fascinating stories about Chhatrapati Shivaji Maharaj and the Maratha empire. Great organization and timing.",
    },
    {
      id: 5,
      name: "Kavya Reddy",
      location: "Solapur",
      rating: 4,
      date: "4 months ago",
      trek: "Lohagad Fort",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      comment:
        "Lovely monsoon trek! Lohagad was completely covered in clouds when we reached the top, creating a mystical atmosphere. The ancient caves and the fort structure were well-preserved. The trek was moderately challenging and perfect for a day trip. Would love to visit again in different weather.",
    },
    {
      id: 6,
      name: "Vikram Singh",
      location: "Kolhapur",
      rating: 5,
      date: "5 months ago",
      trek: "Torna Fort",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      comment:
        "Incredible trek with rich history! Being at the first fort conquered by Shivaji Maharaj was emotionally moving. The 360-degree views from the top are spectacular. The trek is challenging but manageable with proper preparation. TrekIt Maharashtra's team was professional and well-prepared.",
    },
    {
      id: 7,
      name: "Anita Kulkarni",
      location: "Satara",
      rating: 4,
      date: "6 months ago",
      trek: "Raigad Fort",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
      comment:
        "A must-visit for history enthusiasts! Raigad Fort, the capital of the Maratha Empire, is awe-inspiring. The ropeway option is convenient, but I chose to trek up for the full experience. The ruins and the museum provide great insights into Maratha history. Well-organized trip overall.",
    },
    {
      id: 8,
      name: "Rohan Bhosale",
      location: "Sangli",
      rating: 5,
      date: "7 months ago",
      trek: "Visapur Fort",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
      comment:
        "Perfect for families and beginners! Visapur Fort trek was easy and enjoyable. The monsoon waterfalls were spectacular, and the kids loved the adventure. The guide was patient and made sure everyone was comfortable. Great way to introduce children to trekking. Highly recommended for family outings!",
    },
  ]

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300 dark:text-gray-600"}`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Trekker Reviews</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Read what our fellow trekkers have to say about their Maharashtra trekking experiences
          </p>

          {/* Average Rating */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 max-w-md mx-auto">
            <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{averageRating.toFixed(1)}</div>
            <div className="flex justify-center mb-2">{renderStars(Math.round(averageRating))}</div>
            <div className="text-gray-600 dark:text-gray-400">Based on {reviews.length} reviews</div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Review Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={review.avatar || "/placeholder.svg"}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">{review.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{review.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 mb-1">{renderStars(review.rating)}</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{review.date}</p>
                </div>
              </div>

              {/* Trek Name */}
              <div className="mb-3">
                <span className="inline-block bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full text-sm font-medium">
                  {review.trek}
                </span>
              </div>

              {/* Review Content */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-emerald-600 dark:bg-emerald-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Share Your Experience</h2>
          <p className="mb-6 opacity-90">Have you trekked with us? We'd love to hear about your adventure!</p>
          <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300">
            Write a Review
          </button>
        </div>
      </div>
    </div>
  )
}
