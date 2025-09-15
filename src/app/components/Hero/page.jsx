"use client";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import CustomButton from "../Common/Buttons/page";
import { gsap } from "gsap";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    image: "/heroSlider/slider1.png",
    title: "Premium Van Conversions",
    desc: "Transform your vehicle into a luxurious home on wheels with our expert customization services.",
    buttons: [
      { label: "Van For Sale", style: "bg-brand hover:bg-indigo-700 text-white" },
      { label: "Custom Build", style: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600" },
    ],
  },
  {
    id: 2,
    image: "/heroSlider/slider2.png",
    title: "Adventure Ready Interiors",
    desc: "Designed for comfort and functionality on the road, our interiors make every journey memorable.",
    buttons: [
      { label: "Van For Sale", style: "bg-brand hover:bg-emerald-600 text-white" },
      { label: "Custom Build", style: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-600" },
    ],
  },
];

export default function Hero() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const heroContentRef = useRef(null);

  // GSAP animations for slide content
  useEffect(() => {
    const animateIn = () => {
      if (heroContentRef.current) {
        const elements = heroContentRef.current.children;
        gsap.set(elements, { opacity: 0, y: 20 });

        gsap.to(elements, {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out"
        });
      }
    };

    // Initial animation
    animateIn();

    // Listen for slide change event
    const swiperContainer = document.querySelector('.swiper');
    if (swiperContainer) {
      swiperContainer.addEventListener('slideChange', animateIn);
    }

    return () => {
      if (swiperContainer) {
        swiperContainer.removeEventListener('slideChange', animateIn);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
          bulletClass: 'custom-bullet',
          bulletActiveClass: 'custom-bullet-active'
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blackish to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-blackish via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-8 lg:px-16 xl:px-24 font-sans">
                <div ref={heroContentRef} className="max-w-3xl text-left space-y-6 text-white">
                  <h1 className="text-h1 font-bold leading-tight ">
                    {slide.title}
                  </h1>
                  <p className=" md:text-lg text-left font-light max-w-2xl">
                    {slide.desc}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    {slide.buttons.map((btn, idx) => (
                      <CustomButton
                        key={idx}
                        bgColor={btn.style}
                        text={btn.label}
                        size="lg"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2 custom-pagination font-sans"></div>

      <div className="absolute left-4 md:left-6 top-1/2 z-10 -translate-y-1/2">
        <button
          ref={prevRef}
          className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-all duration-300 shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <div className="absolute right-4 md:right-6 top-1/2 z-10 -translate-y-1/2">
        <button
          ref={nextRef}
          className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-all duration-300 shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <div className="animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Custom CSS for pagination */}
      <style jsx>{`
        .custom-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          margin: 0 6px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .custom-bullet-active {
          background: white;
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
    </div>
  );
}