"use client"

import { Mountain, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Mountain className="h-8 w-8 text-emerald-400" />
              <div>
                <div className="text-xl font-bold">TrekIt Maharashtra</div>
                <div className="text-sm text-slate-400">Adventure Awaits</div>
              </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Discover the beauty of Maharashtra's mountains with expert guides, safe routes, and unforgettable
              experiences.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Treks", "Gallery", "Reviews", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Treks */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Popular Treks</h3>
            <ul className="space-y-3">
              {["Rajgad Fort", "Harishchandragad", "Kalsubai Peak", "Sinhagad Fort", "Lohagad Fort", "Raigad Fort"].map(
                (trek) => (
                  <li key={trek}>
                    <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
                      {trek}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div className="text-slate-400">
                  <div>123 Adventure Street</div>
                  <div>Pune, Maharashtra 411001</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <a
                  href="mailto:info@trekitmaharashtra.com"
                  className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
                >
                  info@trekitmaharashtra.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">© {currentYear} TrekIt Maharashtra. All rights reserved.</div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
