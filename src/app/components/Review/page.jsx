"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const reviews = [
  { id: 1, name: "John Doe", text: "Amazing service! My van looks incredible and works perfectly.", rating: 5, location: "New York, NY" },
  { id: 2, name: "Sarah Smith", text: "The customization process was smooth, and the quality is top-notch.", rating: 5, location: "Denver, CO" },
  { id: 3, name: "Mike Johnson", text: "I love my new van interior. Perfect for travel and camping!", rating: 4, location: "Seattle, WA" },
  { id: 4, name: "Emma Wilson", text: "Professional team and excellent craftsmanship.", rating: 5, location: "Austin, TX" },
  { id: 5, name: "Alex Chen", text: "Incredible work! The van conversion exceeded all my expectations.", rating: 5, location: "San Francisco, CA" },
  { id: 6, name: "Maria Garcia", text: "The perfect blend of functionality and style.", rating: 4, location: "Miami, FL" },
];

export default function ReviewSlider() {
  const sliderRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    // run only in browser
    if (typeof window === "undefined") return;

    // small delay so images/fonts can layout; increase if your images are large
    const id = setTimeout(() => {
      const track = trackRef.current;
      if (!track) return;

      // duplicate items (so loop is seamless)
      track.innerHTML = track.innerHTML + track.innerHTML;

      // measure width of one set (half of total scrollWidth)
      const fullWidth = track.scrollWidth;
      const oneSetWidth = fullWidth / 2;

      // reset any inline transform before animation starts
      gsap.set(track, { x: 0 });

      // animate leftwards continuously and wrap back using modifiers
      const tween = gsap.to(track, {
        x: -oneSetWidth,
        duration: 30,        // speed -> increase = slower, decrease = faster
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x) => {
            const num = parseFloat(x); // incoming value like "-123.45"
            const wrapped = gsap.utils.wrap(-oneSetWidth, 0, num);
            return wrapped + "px";
          },
        },
      });

      // cleanup on unmount
      return () => {
        tween.kill();
      };
    }, 100); // 100ms

    return () => clearTimeout(id);
  }, []);

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <svg key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));

  return (
    <section className="w-full py-16 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            What Our <span className="text-blue-600">Customers Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Read real reviews from people who customized their vans with us.</p>
        </div>

        {/* Slider */}
        <div ref={sliderRef} className="relative w-full overflow-hidden">
          <div ref={trackRef} className="flex items-stretch gap-6">
            {[...reviews].map((r, i) => (
              <article key={i} className="review-card flex-shrink-0 w-[300px] md:w-[350px] bg-white rounded-2xl shadow-lg p-6">
                <div className="flex gap-2 mb-3">{renderStars(r.rating)}</div>
                <p className="text-gray-700 mb-4 italic">"{r.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{r.name}</h4>
                    <p className="text-gray-500 text-sm">{r.location}</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">{r.name.charAt(0)}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow font-semibold">
            Share Your Experience
          </button>
        </div>
      </div>
    </section>
  );
}
