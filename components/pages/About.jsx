"use client"

import { Users, Award, Shield, Heart, Mountain, Compass } from "lucide-react"

export default function About() {
  const teamMembers = [
    {
      id: 1,
      name: "Rajesh Patil",
      role: "Founder & Lead Guide",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "A passionate mountaineer with over 15 years of trekking experience across Maharashtra. Rajesh has summited every major peak in the Western Ghats and is certified in wilderness first aid.",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Senior Trek Leader",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "An expert in monsoon trekking and fort exploration. Priya specializes in historical treks and has extensive knowledge of Maratha history and architecture.",
    },
    {
      id: 3,
      name: "Amit Joshi",
      role: "Safety Coordinator",
      experience: "8+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Certified rescue specialist and safety expert. Amit ensures all our treks meet the highest safety standards and conducts regular safety training for our team.",
    },
    {
      id: 4,
      name: "Kavya Reddy",
      role: "Nature Guide",
      experience: "6+ years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Wildlife enthusiast and botanist. Kavya brings the flora and fauna of Maharashtra to life during treks, making each journey an educational experience.",
    },
  ]

  const stats = [
    { icon: Users, number: "10,000+", label: "Happy Trekkers" },
    { icon: Mountain, number: "50+", label: "Trek Routes" },
    { icon: Award, number: "5", label: "Years Experience" },
    { icon: Shield, number: "100%", label: "Safety Record" },
  ]

  const values = [
    {
      icon: Heart,
      title: "Passion for Adventure",
      description: "We live and breathe trekking. Our passion for Maharashtra's mountains drives everything we do.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Your safety is our top priority. We maintain the highest safety standards on every trek.",
    },
    {
      icon: Users,
      title: "Community Building",
      description: "We believe in building a community of like-minded adventurers who share our love for nature.",
    },
    {
      icon: Compass,
      title: "Expert Guidance",
      description: "Our experienced guides ensure you have the best possible trekking experience in Maharashtra.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About TrekIt Maharashtra</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We are passionate trekkers dedicated to showcasing the incredible beauty of Maharashtra's mountains, forts,
            and natural landscapes through safe and memorable trekking experiences.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              To make the stunning trekking destinations of Maharashtra accessible to everyone, regardless of their
              experience level. We strive to provide safe, educational, and transformative outdoor experiences that
              connect people with nature and Maharashtra's rich cultural heritage.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Our Vision</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              To become Maharashtra's leading trekking community, inspiring a new generation of nature lovers and
              adventure enthusiasts. We envision a future where sustainable trekking practices preserve our beautiful
              landscapes for generations to come, while fostering deep appreciation for Maharashtra's natural and
              cultural treasures.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-emerald-600 dark:bg-emerald-700 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center text-white">
                  <Icon className="h-8 w-8 mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-emerald-100 text-sm">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Meet Our Team</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our experienced team of guides and trek leaders are passionate about sharing Maharashtra's beauty with you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 text-center"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{member.name}</h3>
                <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{member.experience}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Our Values</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do at TrekIt Maharashtra
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 text-white rounded-full mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Why Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Local Expertise</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Born and raised in Maharashtra, we know every trail, every story, and every hidden gem.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Safety Standards</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Certified guides, proper equipment, and comprehensive safety protocols on every trek.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Personalized Experience</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Small groups, personalized attention, and treks tailored to your fitness level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
