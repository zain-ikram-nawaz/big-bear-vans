"use client";

import React, { Suspense, useRef, useState, useEffect, forwardRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, useGLTF, OrbitControls } from "@react-three/drei";
import { FaMouse, FaRedoAlt, FaExpand, FaCompress } from "react-icons/fa";
import { gsap } from "gsap";

// ElevatorBed 3D model
const ElevatorBedModel = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1} position={[0, -0.5, 0]} />;
};

// Button component supporting ref
const ButtonWithRef = forwardRef(({ children, className, onClick }, ref) => (
  <button ref={ref} className={`px-6 py-3 rounded-xl ${className}`} onClick={onClick}>
    {children}
  </button>
));

export default function ElevatorBed3D() {
  const [isRotating, setIsRotating] = useState(true);
  const [showHint, setShowHint] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const canvasContainerRef = useRef(null);
  const textContentRef = useRef(null);

  const askBtnRef = useRef(null);
  const exploreBtnRef = useRef(null);
  const tourBoxRef = useRef(null);

  const [step, setStep] = useState(0);

  // GSAP tour steps
  const steps = [
    { target: ".canvas-container", text: "👋 This is the 3D Elevator Bed. Drag to rotate, scroll to zoom." },
    { target: ".ask-btn", text: "❓ Click here if you have a question." },
    { target: ".explore-btn", text: "🛒 Explore our shop for more options." }
  ];

  useEffect(() => {
    // Animate text content
    if (textContentRef.current) {
      gsap.fromTo(
        textContentRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: "power2.out" }
      );
    }

    // Animate guider box
    if (tourBoxRef.current) {
      gsap.fromTo(
        tourBoxRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
      );
    }

    // Hide hint after 5 seconds
    const timer = setTimeout(() => setShowHint(false), 5000);
    return () => clearTimeout(timer);
  }, []);

 // Next step me guider box ko target element ke upar move karna
const nextStep = () => {
  if (step < steps.length - 1) {
    const next = step + 1;
    setStep(next);

    const target = document.querySelector(steps[next].target);
    if (target && tourBoxRef.current) {
      const rect = target.getBoundingClientRect();

      // Guider box ko element ke upar set karna
      gsap.to(tourBoxRef.current, {
        x: rect.left + rect.width / 2 - 130, // box ko center align karne ke liye
        y: rect.top - 80, // element ke upar space
        duration: 0.6,
        ease: "power2.out"
      });

      // Highlight animation
      gsap.fromTo(
        target,
        { scale: 1, boxShadow: "0 0 0px rgba(0,0,0,0)" },
        {
          scale: 1.05,
          boxShadow: "0 0 20px rgba(99,102,241,0.6)",
          duration: 0.6,
          yoyo: true,
          repeat: 1
        }
      );
    }
  } else {
    setStep(steps.length); // tour finished
  }
};


  const toggleFullscreen = () => {
    if (!document.fullscreenElement && canvasContainerRef.current) {
      canvasContainerRef.current.requestFullscreen().catch(err => console.error(err));
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-4 md:px-8">

        {/* 3D Model */}
        <div
          ref={canvasContainerRef}
          className="w-full lg:w-1/2 relative canvas-container"
        >
          <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative group">
            <Canvas camera={{ position: [0, 2, 0.2], fov: 50 }}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <pointLight position={[-5, 5, 5]} intensity={0.5} />
              <Suspense fallback={null}>
                <Center>
                  <ElevatorBedModel modelPath="/models/elevator-bed.glb" />
                </Center>
              </Suspense>
              <OrbitControls onStart={() => setIsRotating(false)} enablePan enableZoom />
            </Canvas>

            {/* Interaction hint */}
            {showHint && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full flex items-center gap-2">
                <FaMouse className="text-blue-300" />
                <span className="text-sm">Drag to rotate • Scroll to zoom</span>
              </div>
            )}

            {/* Control buttons */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={() => setIsRotating(!isRotating)}
                className={`p-2 rounded-full ${isRotating ? "bg-blue-500 text-white" : "bg-white/90 text-gray-700"}`}
              >
                <FaRedoAlt />
              </button>
              <button onClick={toggleFullscreen} className="p-2 rounded-full bg-white/90 text-gray-700">
                {isFullscreen ? <FaCompress /> : <FaExpand />}
              </button>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div ref={textContentRef} className="w-full lg:w-1/2 flex flex-col justify-start space-y-6">
          <h1 className="text-h2 font-bold text-gray-900 leading-tight">
            Transform Your Space with <span className="text-brand">Smart Design</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Experience the perfect blend of comfort, innovation, and space optimization.
            Our premium elevator beds give you back valuable floor space without compromising style.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <ButtonWithRef ref={askBtnRef} className="bg-brand hover:bg-brand/700 text-white ask-btn">
              Ask a Question
            </ButtonWithRef>
            <ButtonWithRef ref={exploreBtnRef} className="bg-brand hover:bg-brand/700 text-white explore-btn">
              Explore Shop
            </ButtonWithRef>
          </div>
        </div>
      </div>

      {/* GSAP Guider */}
    <div
  ref={tourBoxRef}
  style={{
    position: "absolute", // ab ye move hoga
    top: 0,
    left: 0,
    background: "#fff",
    padding: "16px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    maxWidth: "260px",
    zIndex: 9999,
    pointerEvents: "auto"
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
    </section>
  );
}
