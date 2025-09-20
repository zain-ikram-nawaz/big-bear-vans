"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

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
import Robo from "./components/models/robo";

gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  const guideRef = useRef(null);

  const steps = [
    { target: ".tour-hero", label: "Hero Section" },
    { target: ".tour-section-slider", label: "Van Tours" },
    { target: ".tour-customizer", label: "Van Customizer" },
    { target: ".tour-portfolio", label: "Portfolio" },
    { target: ".tour-custom-van", label: "Custom Vans" },
    { target: ".tour-elevator-bed", label: "Elevator Bed" },
    { target: ".tour-installation", label: "Installation" },
    { target: ".tour-shop", label: "Shop" },
    { target: ".tour-reviews", label: "Reviews" },
  ];

  useEffect(() => {
    gsap.fromTo(
      guideRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
    );
  }, []);

  const goToSection = (target) => {
    const element = document.querySelector(target);
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: element,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <>
      {/* GSAP Floating Guide */}
      <div
        ref={guideRef}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#fff",
          padding: "16px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          maxWidth: "300px",
          zIndex: 9999,
        }}
      >
        <p style={{ marginBottom: "10px", fontWeight: "500" }}>
          🚀 Where do you want to go?
        </p>

        {/* 3D Robo Model */}
        <div
          style={{
            width: "180px",
            height: "180px",
            margin: "8px auto 12px",
            borderRadius: "12px",
            overflow: "hidden",
            backgroundColor: "#f8fafc",
          }}
        >
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Robo />
          </Canvas>
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {steps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => goToSection(s.target)}
              style={{
                background: "#6366f1",
                color: "#fff",
                padding: "6px 10px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                flex: "1 1 45%",
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Page Sections */}
      <div className="tour-hero"><Hero /></div>
      <div className="tour-section-slider"><SectioSlider /></div>
      <div className="tour-customizer"><VanCustomizer /></div>
      <div className="tour-portfolio"><Portfolio /></div>
      <div className="tour-custom-van"><CustomVanSection /></div>
      <div className="tour-elevator-bed"><ElevatorBedModel /></div>
      <div className="tour-installation"><ElevatorBedInVan /></div>
      <div className="tour-shop"><ShopSection /></div>
      <div className="tour-reviews"><ReviewSlider /></div>

      <StickyBottomBar />
    </>
  );
}
