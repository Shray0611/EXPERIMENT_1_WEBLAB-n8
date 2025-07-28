"use client"

import { Mountain, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-stone-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-bold">Maharashtra Treks</span>
            </div>
            <p className="text-stone-300 leading-relaxed">
              Discover the beauty of Maharashtra's mountains, forts, and trails with expert guides and unforgettable
              experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-300 hover:text-emerald-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-stone-300 hover:text-emerald-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-stone-300 hover:text-emerald-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-stone-300 hover:text-emerald-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-300 hover:text-emerald-400 transition-colors">
                  All Treks
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-300 hover:text-emerald-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-300 hover:text-emerald-400 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-300 hover:text-emerald-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Treks */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Treks</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-stone-300 hover:text-emerald-400 transition-colors">
                  Kalsubai Peak
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-300 hover:text-emerald-400 transition-colors">
                  Rajmachi Fort
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-300 hover:text-emerald-400 transition-colors">
                  Harishchandragad
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-300 hover:text-emerald-400 transition-colors">
                  Sinhagad Fort
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-300 hover:text-emerald-400 transition-colors">
                  Lohagad Fort
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400 mt-0.5" />
                <span className="text-stone-300">123 Trek Street, Pune, Maharashtra 411001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span className="text-stone-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span className="text-stone-300">info@maharashtratreks.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-300 text-sm">© 2024 Maharashtra Treks. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-stone-300 hover:text-emerald-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-stone-300 hover:text-emerald-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-stone-300 hover:text-emerald-400 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
