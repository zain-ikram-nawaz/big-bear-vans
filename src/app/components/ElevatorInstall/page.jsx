"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomButton from "../Common/Buttons/page";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ElevatorBedInVan() {
  const [hovered, setHovered] = useState(false);
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animation for text content
    gsap.fromTo(textRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Animation for image
    gsap.fromTo(imageRef.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Animation for button
    gsap.fromTo(buttonRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.5,
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left: Text Content */}
        <div ref={textRef} className="space-y-6">
          <h2 className=" font-bold text-h2 text-gray-900 leading-tight">
            Comfort & Space — <span className="text-blue-600">Perfectly Fitted</span> in Your Van
          </h2>

          <div className="space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              Discover how our <span className="font-semibold text-blue-600">Elevator Bed</span> seamlessly integrates into your van.
              It's not just about saving space—it's about creating a peaceful and comfortable experience during your travels.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              By day, enjoy a functional workspace or lounge area. By night, transform it into a spacious bed—
              two solutions in one innovative design.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">Maximizes living space efficiently</span>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">Easy transformation between modes</span>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">Premium comfort for restful sleep</span>
            </div>
          </div>

          <div ref={buttonRef}>
            <CustomButton text={"Explore More Features"} bgColor={"bg-blue-600 text-white roun hover:bg-brand/700 transition-all"}/>
          </div>
        </div>

        {/* Right: Image with Hover Effect */}
        <div ref={imageRef} className="relative">
          <div
            className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Default Image */}
            <Image
              src="/elevator-bed1.jpg"
              alt="Elevator Bed inside Van - Day Mode"
              fill
              className={`object-cover transition-all duration-700 ${hovered ? "opacity-0 scale-110" : "opacity-100 scale-100"}`}
            />

            {/* Hover Image */}
            <Image
              src="/Santa-monica-v6-back-side.webp"
              alt="Elevator Bed inside Van - Night Mode"
              fill
              className={`object-cover transition-all duration-700 ${hovered ? "opacity-100 scale-100" : "opacity-0 scale-110"}`}
            />

            {/* Overlay Label */}
            <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm transition-opacity duration-300">
              <span className="text-sm font-medium">
                {hovered ? "Night Mode - Bed Configuration" : "Day Mode - Lounge Configuration"}
              </span>
            </div>

            {/* Hover Indicator */}
            <div className="absolute top-4 right-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Hover to see transformation
            </div>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            <div className={`w-3 h-3 rounded-full ${!hovered ? 'bg-blue-600' : 'bg-gray-300'} transition-colors duration-300`}></div>
            <div className={`w-3 h-3 rounded-full ${hovered ? 'bg-blue-600' : 'bg-gray-300'} transition-colors duration-300`}></div>
          </div>
        </div>

      </div>
    </section>
  );
}