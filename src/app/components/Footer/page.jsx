"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock, FaArrowRight } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative text-white pt-16 pb-8 bg-cover bg-center bg-no-repeat">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/heroSlider/1.avif')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90 to-gray-900/80"></div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">

          {/* Company Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              VanLife
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-xs">
              Transforming vehicles into dream homes on wheels. Premium van conversions for your adventures.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                <FaFacebookF className="text-lg" />
              </a>
              <a href="#" className="bg-blue-400 hover:bg-blue-500 p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#" className="bg-blue-700 hover:bg-blue-800 p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                <FaLinkedinIn className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                    <FaArrowRight className="text-blue-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-500 mt-1 text-lg" />
                <span className="text-gray-300">123 Adventure Street, Denver, CO 80202, USA</span>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-blue-500 mt-1 text-lg" />
                <a href="mailto:info@vanlife.com" className="text-gray-300 hover:text-white transition-colors">info@vanlife.com</a>
              </li>
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-blue-500 mt-1 text-lg" />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-white transition-colors">+1 (555) 123-4567</a>
              </li>
            </ul>
          </div>

          {/* Business Hours & Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Business Hours
            </h3>
            <ul className="space-y-2 mb-6">
              <li className="flex justify-between text-gray-300">
                <span>Mon - Fri:</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-300">
                <span>Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-300">
                <span>Sunday:</span>
                <span className="text-red-400">Closed</span>
              </li>
            </ul>

            {/* Newsletter Signup */}
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <h4 className="font-medium mb-3 text-white">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} VanLife. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}