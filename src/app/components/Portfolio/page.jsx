"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import CustomButton from "../Common/Buttons/page";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const slides = [
  {
    id: 1,
    image: "/port1.jpg",
    title: "Amsterdam",
    desc: "Fully equipped for off-grid living with solar power and extended storage",
    category: "Adventure"
  },
  {
    id: 2,
    image: "/port2.webp",
    title: "Carlsbad",
    desc: "Premium interior with high-end finishes and modern amenities",
    category: "Luxury"
  },
  {
    id: 3,
    image: "/port3.webp",
    title: "Vermont Camper Van",
    desc: "Our Exclusive Flagship in Long Vans",
    category: "Compact"
  },
  {
    id: 4,
    image: "/port1.jpg",
    title: "Amsterdam",
    desc: "Fully equipped for off-grid living with solar power and extended storage",
    category: "Adventure"
  },
  {
    id: 5,
    image: "/port2.webp",
    title: "Carlsbad",
    desc: "Premium interior with high-end finishes and modern amenities",
    category: "Luxury"
  },
  {
    id: 6,
    image: "/port1.jpg",
    title: "Amsterdam",
    desc: "Fully equipped for off-grid living with solar power and extended storage",
    category: "Adventure"
  },
  {
    id: 7,
    image: "/port2.webp",
    title: "Carlsbad",
    desc: "Premium interior with high-end finishes and modern amenities",
    category: "Luxury"
  },
];

export default function Portfolio() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animate heading and description
    gsap.fromTo(headingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Animate button
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
    <section ref={sectionRef} className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-gray-100">
      {/* Heading + Desc */}
      <div ref={headingRef} className="max-w-4xl mx-auto text-center mb-16 px-4">
        <h2 className="text-h1 font-sans  font-bold text-gray-900 mb-6">
          From <span className="text-brand">Dream</span> to Your Driveway
        </h2>
        <p className="text-gray-600 text-body max-w-3xl mx-auto leading-relaxed">
          Explore our latest customized projects. Each van is crafted with passion,
          meticulous attention to detail, and premium materials for your ultimate adventure.
        </p>
      </div>

      {/* Swiper */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
            bulletClass: 'custom-bullet',
            bulletActiveClass: 'custom-bullet-active'
          }}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 25 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="pb-12"
        >
          {slides.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                <div className="relative h-72 md:h-80 lg:h-96 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-brand text-whito px-3 py-1 rounded-full text-xs font-medium z-10">
                    {item.category}
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition duration-500">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition duration-500 delay-200">
                      {item.desc}
                    </p>

                    {/* View Project Button */}
                    <button className="mt-3 bg-white text-brand px-4 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition duration-500 delay-300 transform translate-y-2 group-hover:translate-y-0">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        <div className="flex justify-center mt-8 space-x-3 custom-pagination"></div>

        <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 custom-prev hidden md:block">
          <button className="bg-white/90 text-gray-800 w-10 h-10 rounded-full shadow-lg hover:bg-brand hover:text-white transition-all duration-300 flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 custom-next hidden md:block">
          <button className="bg-white/90 text-gray-800 w-10 h-10 rounded-full shadow-lg hover:bg-brand hover:text-white transition-all duration-300 flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Button */}
      <div ref={buttonRef} className="flex justify-center mt-16 px-4">
        <CustomButton
          bgColor="bg-brand hover:bg-indigo-700 text-white"
          text="Explore Full Portfolio"
        />
      </div>

      {/* Custom CSS for pagination */}
      <style jsx>{`
        .custom-bullet {
          width: 12px;
          height: 12px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 50%;
          margin: 0 6px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .custom-bullet-active {
          background: #4f46e5;
          width: 30px;
          border-radius: 8px;
        }
        @media (max-width: 768px) {
          .custom-bullet {
            width: 10px;
            height: 10px;
            margin: 0 4px;
          }
          .custom-bullet-active {
            width: 20px;
          }
        }
      `}</style>
    </section>
  );
}