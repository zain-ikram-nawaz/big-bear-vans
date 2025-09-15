"use client";
import { useState, useEffect, useRef } from "react";
import CustomButton from "../Common/Buttons/page";
import Image from "next/image";
import { gsap } from "gsap";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const megaMenuRef = useRef(null);
  const timeoutRef = useRef(null);

  // Toggle dark class on <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // GSAP animation for mega menu
  useEffect(() => {
    if (megaMenuRef.current) {
      if (activeMenu) {
        gsap.fromTo(
          megaMenuRef.current,
          { height: 0, opacity: 0 },
          { height: "80vh", opacity: 1, duration: 0.5, ease: "power3.out" }
        );
      } else {
        gsap.to(megaMenuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [activeMenu]);

  // Handle menu hover with delay for better UX
  const handleMenuHover = (menu) => {
    clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 300);
  };

  // Menu content data
  const menuContent = {
    vans: {
      title: "Vans Collection",
      sections: [
        {
          title: "Luxury Models",
          items: [
            "Premium Camper Vans",
            "Executive Travelers",
            "Family Adventure",
            "Business Class"
          ]
        },
        {
          title: "Adventure Series",
          items: [
            "Off-Road Warriors",
            "Weekend Explorers",
            "Mountain Series",
            "Beach Edition"
          ]
        }
      ]
    },
    portfolio: {
      title: "Our Portfolio",
      sections: [
        {
          title: "Completed Projects",
          items: [
            "Custom Builds",
            "Luxury Conversions",
            "Commercial Vans",
            "Special Editions"
          ]
        },
        {
          title: "Customer Stories",
          items: [
            "Family Adventures",
            "Travel Bloggers",
            "Business Use Cases",
            "Van Life Experiences"
          ]
        }
      ]
    },
    about: {
      title: "About Us",
      sections: [
        {
          title: "Our Company",
          items: [
            "Our Story",
            "Team Members",
            "Facilities",
            "Awards & Recognition"
          ]
        },
        {
          title: "Services",
          items: [
            "Custom Build Process",
            "Consultation",
            "Maintenance",
            "Financing Options"
          ]
        }
      ]
    }
  };

  return (
    <>
      <nav className="w-full px-6 py-4 bg-whito shadow-md relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left - Logo */}
          <div className="font-bold text-2xl">
            <Image src={"/logo BBV-02.svg"} width={50} height={50} alt="BBv logo"></Image>
          </div>

          {/* Center - Nav links */}
          <div className="hidden md:flex gap-8 text-blackish tracking-wide font-medium font-sans text-base">
            <a
              href="#"
              className=" transition-colors"
              onMouseEnter={() => handleMenuHover("home")}
              onMouseLeave={handleMenuLeave}
            >
              Home
            </a>
            <a
              href="#"
              className=" transition-colors"
              onMouseEnter={() => handleMenuHover("vans")}
              onMouseLeave={handleMenuLeave}
            >
              Vans
            </a>
            <a
              href="#"
              className=" transition-colors"
              onMouseEnter={() => handleMenuHover("portfolio")}
              onMouseLeave={handleMenuLeave}
            >
              Portfolio
            </a>
            <a
              href="#"
              className=" transition-colors"
              onMouseEnter={() => handleMenuHover("about")}
              onMouseLeave={handleMenuLeave}
            >
              About
            </a>
          </div>

          {/* Right - Contact button */}
          <CustomButton
            bgColor=""
            text="Contact Us"
          />

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mega Menu */}
      {activeMenu && menuContent[activeMenu] && (
        <div
          ref={megaMenuRef}
          className="fixed top-0 left-0 w-full bg-white shadow-xl z-40 overflow-hidden"
          style={{ top: "76px", height: "0" }}
          onMouseEnter={() => handleMenuHover(activeMenu)}
          onMouseLeave={handleMenuLeave}
        >
          <div className="max-w-7xl mx-auto px-6 py-8 h-full">
            <h2 className="text-3xl font-bold text-blackish mb-8">
              {menuContent[activeMenu].title}
            </h2>

            <div className="flex h-5/6">
              {/* Left Section */}
              <div className="w-1/2 pr-6 border-r border-gray-200">
                <h3 className="text-xl font-semibold text-indigo-600 mb-4">
                  {menuContent[activeMenu].sections[0].title}
                </h3>
                <ul className="space-y-3">
                  {menuContent[activeMenu].sections[0].items.map((item, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Section */}
              <div className="w-1/2 pl-6">
                <h3 className="text-xl font-semibold text-indigo-600 mb-4">
                  {menuContent[activeMenu].sections[1].title}
                </h3>
                <ul className="space-y-3">
                  {menuContent[activeMenu].sections[1].items.map((item, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}