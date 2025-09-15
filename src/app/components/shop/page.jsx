"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import CustomButton from "../Common/Buttons/page";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ShopSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const productsRef = useRef([]);
  const buttonRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "Luxury Camper Van",
      price: "$25,000",
      img: "/shop/Bubble Style Windows no 2.jpg",
    },
    {
      id: 2,
      name: "Adventure Van",
      price: "$18,000",
      img: "/shop/Ceiling kit no 4.JPG",
    },
    {
      id: 3,
      name: "Family Van",
      price: "$22,500",
      img: "/shop/Rear door panels no 5.jpg",
    },
    {
      id: 4,
      name: "Compact Travel Van",
      price: "$15,000",
      img: "/shop/Storage bench no 3.jpg",
    },
  ];

  useEffect(() => {
    // Animation for heading
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animation for products
    productsRef.current.forEach((product, index) => {
      if (product) {
        gsap.fromTo(
          product,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: product,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Animation for button
    gsap.fromTo(
      buttonRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.8,
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-16 bg-gray-50">
      {/* Heading */}
      <div ref={headingRef} className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h2 className="text-h2 font-bold text-gray-900 mb-4">
          Explore Our Shop
        </h2>
        <p className="text-gray-600 text-lg">
        Tired of wasting hours hunting for high-quality van accessories? Big Bear Vans is your one-stop shop. Need a rooftop hammock, awning windows for van conversion, or a rooftop tent for extra space? We’re here to help. Shop all of your campervan accessories from Big Bear Vans today
        </p>
      </div>

      {/* Products Grid - 2 columns centered */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {products.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (productsRef.current[index] = el)}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative w-full h-64">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-blackish">
                  {item.name}
                </h3>
                <span className="text-lg font-bold text-brand">
                  {item.price}
                </span>
              </div>
              <CustomButton
                bgColor="bg-brand hover:bg-brand/700 text-white"
                text="Buy Now"
                fullWidth={true}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Explore Shop Button */}
      <div ref={buttonRef} className="flex justify-center mt-12">
        <CustomButton
          bgColor="bg-transparent border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white"
          text="Explore Full Shop"
        />
      </div>
    </section>
  );
}