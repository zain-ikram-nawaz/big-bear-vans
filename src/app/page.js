"use client"
import { useEffect, useRef, useState } from "react";
import Hero from "./components/Hero/page";
import SectioSlider from "./components/SectionSlider/page";
import StickyBottomBar from "./components/StickyBottomBar/page";
import ElevatorBedModel from "./components/ElevatorBedModel/page";
import ElevatorBedInVan from "./components/ElevatorInstall/page";
import VanCustomizer from "./components/Customize/page";
import CustomVanSection from "./components/CustomVanSection/page";
import Portfolio from "./components/Portfolio/page";
import ReviewSlider from "./components/Review/page";
import ShopSection from "./components/shop/page";
import IntroJs from "intro.js";
import "intro.js/introjs.css";

// Van Mascot SVG Component
const VanMascot = ({ className }) => (
  <svg className={className} width="120" height="120" viewBox="0 0 200 200">
    {/* Van Body */}
    <rect x="30" y="80" width="140" height="60" rx="10" fill="#4A90E2" />
    <rect x="100" y="60" width="50" height="40" rx="5" fill="#357ABD" />

    {/* Windows */}
    <rect x="40" y="90" width="50" height="30" rx="5" fill="#A5D0F7" />
    <rect x="105" y="70" width="40" height="20" rx="3" fill="#A5D0F7" />

    {/* Wheels */}
    <circle cx="60" cy="150" r="12" fill="#333" />
    <circle cx="60" cy="150" r="6" fill="#CCC" />
    <circle cx="140" cy="150" r="12" fill="#333" />
    <circle cx="140" cy="150" r="6" fill="#CCC" />

    {/* Headlights */}
    <circle cx="40" cy="100" r="5" fill="#FFD700" />

    {/* Smiley Face */}
    <circle cx="170" cy="95" r="5" fill="#333" />
    <path d="M165 110 Q170 115 175 110" stroke="#333" strokeWidth="2" fill="none" />

    {/* Decorative Stripe */}
    <rect x="35" y="115" width="130" height="5" fill="#FFD700" />
  </svg>
);

export default function Home() {
  // Refs for each component section
  const vanRef = useRef(null);
  const portfolioRef = useRef(null);
  const sliderRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const intro = IntroJs();
    intro.setOptions({
      steps: [
        {
          element: "#intro-step",
          intro: `
            <div class="text-center">
              <div class="flex justify-center mb-4">
                ${document.getElementById('van-mascot')?.outerHTML || ''}
              </div>
              <h2 class="text-xl font-bold mb-2">Welcome to Van Customizer!</h2>
              <p class="mb-4">Hi there! I'm Vanny, your van customization guide.<br>What would you like to explore first?</p>
              <div class="flex flex-col gap-3 mt-4">
                <button id="btn-van" class="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">Van Customizer</button>
                <button id="btn-portfolio" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">Portfolio</button>
                <button id="btn-slider" class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">Section Slider</button>
              </div>
            </div>
          `,
        },
      ],
      showBullets: false,
      showStepNumbers: false,
      exitOnOverlayClick: true,
      exitOnEsc: true,
      overlayOpacity: 0.7,
      tooltipClass: 'introTooltipCustom',
      highlightClass: 'introHighlightCustom'
    });

    // Add custom styles for the intro.js tooltip
    const style = document.createElement('style');
    style.textContent = `
      .introTooltipCustom {
        border-radius: 12px;
        padding: 20px;
        max-width: 400px;
      }
      .introHighlightCustom {
        border-radius: 8px;
      }
      .introjs-tooltip-title {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
      }
    `;
    document.head.appendChild(style);

    // Function to handle scrolling
    const scrollToRef = (ref) => {
      if (ref && ref.current) {
        ref.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        intro.exit();
      }
    };

  
    intro.start();


    intro.onafterchange(() => {
      setTimeout(() => {
        document.getElementById("btn-van")?.addEventListener("click", () => scrollToRef(vanRef));
        document.getElementById("btn-portfolio")?.addEventListener("click", () => scrollToRef(portfolioRef));
        document.getElementById("btn-slider")?.addEventListener("click", () => scrollToRef(sliderRef));
      }, 100);
    });

    // Clean up
    return () => {
      intro.exit();
      document.head.removeChild(style);
    };
  }, [isMounted]);

  return (
    <div className="space-y-20 relative">
      {/* Hidden mascot for Intro.js to use */}
      <div id="van-mascot" style={{ display: 'none' }}>
        <VanMascot />
      </div>

      {/* Intro.js anchor - positioned more appropriately */}
      <div id="intro-step" className="absolute top-20 left-0 w-full h-0"></div>

      <Hero />
      <div ref={sliderRef}><SectioSlider /></div>
      <div ref={vanRef}><VanCustomizer /></div>
      <div ref={portfolioRef}><Portfolio /></div>

      <CustomVanSection />
      <ElevatorBedModel />
      <ElevatorBedInVan />
      <ShopSection />
      <ReviewSlider />

      {/* Sticky Bottom Bar */}
      <StickyBottomBar />
    </div>
  );
}