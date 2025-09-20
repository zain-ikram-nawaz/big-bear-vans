"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function GsapTour() {
  const [step, setStep] = useState(0);
  const guideRef = useRef(null);

  const steps = [
    { target: ".tour-hero", text: "👋 Welcome! This is the Hero Section." },
    { target: ".tour-customizer", text: "🛠️ Here you can customize your Van." },
    { target: ".tour-elevator-bed", text: "🛏️ This is the Elevator Bed system." },
    { target: ".tour-shop", text: "🛒 Check out our Shop for van accessories." },
  ];

  useEffect(() => {
    // Animate guide popup on mount
    gsap.fromTo(
      guideRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
    );
  }, []);

  const nextStep = () => {
    if (step < steps.length) {
      const target = document.querySelector(steps[step].target);
      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: target,
          ease: "power2.inOut"
        });
      }
      setStep((prev) => prev + 1);
    }
  };

  return (
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
        maxWidth: "260px",
        zIndex: 9999
      }}
    >
      {step < steps.length ? (
        <>
          <p style={{ marginBottom: "10px" }}>{steps[step].text}</p>
          <button
            onClick={nextStep}
            style={{
              background: "#6366f1",
              color: "#fff",
              padding: "8px 12px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer"
            }}
          >
            Next
          </button>
        </>
      ) : (
        <p>🎉 Tour Finished! Enjoy exploring 🚐</p>
      )}
    </div>
  );
}
