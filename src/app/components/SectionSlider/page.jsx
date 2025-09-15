"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import CustomButton from '../Common/Buttons/page';

export default function SectioSlider() {
  const slidesData = [
    {
      title: "Santa Monica V6 Turbo",
      desc: "Versatile Comfort for Unforgettable Family Adventures.",
      btn1: "Learn More",
      btn2: "Contact Us",
      sold: true,
      img: "/santa-monika/1.jpeg",
    },
    {
      title: "Montreal 170 AWD Blue Gray",
      desc: "Second slide has more details.",
     btn1: "Learn More",
      btn2: "Contact Us",
      sold: true,
  img: "/montreal/1.png",
    },
    {
      title: "Santa Monica Gray Gas",
      desc: "ASanta Monica Gray Gas.",
      img: "/Santa Monica Gray Gas.png",
    },
  {
      title: "Santa Monica white",
      desc: "ASanta Monica white.",
      img: "/sold.webp",
    },
  ];

  return (
    <div className="h-[80vh]">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-full"
      >
        {slidesData.map((slide, i) => (
          <SwiperSlide
            key={i}
            className={`relative text-whito rounded-lg overflow-hidden ${i === 0 ? "mx-28" : ""}`}
          >
            {/* Background image */}
            <img
              src={slide.img}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-blackish/60 rounded-lg"></div>

            {/* SOLD Badge (agar sold true NA ho) */}
            {!slide.sold ? (
              <div className="absolute top-4 right-4 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-lg shadow">
                SOLD
              </div>
            ) : (
              <div className="absolute top-4 right-4 bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-lg shadow">
                Van For Sale
              </div>
            ) }

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between items-start w-full h-full p-6">
              {/* Title - top left */}
              <div className='w-[70%]'>
                <h3 className="text-h3 text-left font-semibold">{slide.title}</h3>
              </div>

              {/* Bottom left - desc + buttons */}
              <div>
                <p className="mb-4 font-body font-sans underline underline-offset-4">
                  {slide.desc}
                </p>
                <div className="flex gap-3">
                  <CustomButton
                    bgColor="bg-brand"
                    text={slide.btn2}
                  />
                  <CustomButton
                    bgColor="bg-brand"
                    text={slide.btn1}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
   {/* <div className='mt-20'>
  <CustomButton
    bgColor="bg-brand text-whito"
    text="Explore"
  />
</div> */}

    </div>
  );
}
