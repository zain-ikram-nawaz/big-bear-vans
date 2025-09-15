"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import CustomButton from "../Common/Buttons/page";

const CustomVanSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const vans = [
    {
      src: "/customize/cus1.webp",
      title: "Adventure Series",
      description: "Off-grid ready with solar power and extended storage"
    },
    {
      src: "/customize/cus2.webp",
      title: "Luxury Edition",
      description: "Premium interiors with high-end finishes and amenities"
    },
    {
      src: "/customize/cus3.webp",
      title: "Compact Explorer",
      description: "Efficient design maximizing space in a smaller footprint"
    },
  ];

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const openModal = (van) => {
    setSelectedImage(van);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 md:px-8">

        {/* Left - Text Content */}
        <div className="space-y-6">
          <h2 className="text-h2 font-bold text-gray-900 leading-tight">
            Explore Our <span className="text-brand">Customized Vans</span>
          </h2>
          <p className="text-blackish text-lg leading-relaxed">
            We build every van as a completely custom design, tailored to your lifestyle and travel needs.
            Using advanced technology and premium-quality materials, we ensure you get a durable, stylish,
            and comfortable campervan that's perfect for your adventures.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className=" p-2 rounded-full mr-4">
                <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">100% customized to your needs</span>
            </div>
            <div className="flex items-center">
              <div className=" p-2 rounded-full mr-4">
                <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">Premium materials & craftsmanship</span>
            </div>
            <div className="flex items-center">
              <div className=" p-2 rounded-full mr-4">
                <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">Advanced technology integration</span>
            </div>
          </div>
          <CustomButton bgColor="bg-brand text-whito" text={"Custom Build"}/>

        </div>

        {/* Right - Image Gallery */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {vans.map((van, idx) => (
            <div
              key={idx}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
              onClick={() => openModal(van)}
            >
              <div className="relative h-48 md:h-60 lg:h-72">
                <Image
                  src={van.src}
                  alt={van.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end">
                  <div className="p-4 transform translate-y-4 group-hover:translate-y-0 transition duration-500">
                    <h3 className="text-white font-semibold text-sm md:text-base">{van.title}</h3>
                    <p className="text-gray-200 text-xs opacity-0 group-hover:opacity-100 transition duration-500">{van.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Fourth grid item as CTA */}
          <div className=" rounded-2xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-indigo-100 transition-colors duration-300">
            <div className=" p-3 rounded-full mb-4 group-hover:scale-110 transition duration-300">
              <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="font-semibold text-blackish mb-2">Your Van Awaits</h3>
            <p className="text-blackish text-sm">Start designing your dream van today</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 text-white text-3xl font-bold hover:text-indigo-300 transition-colors z-10"
              onClick={closeModal}
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="bg-white rounded-xl overflow-hidden">
              <div className="relative h-[50vh] md:h-[70vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CustomVanSection;