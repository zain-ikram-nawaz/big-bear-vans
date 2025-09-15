"use client";

import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Center, useGLTF, Text } from "@react-three/drei";
import CustomButton from "../Common/Buttons/page";
import { FaQuestionCircle, FaCar, FaMouse, FaRedoAlt, FaExpand, FaCompress, FaSpaceShuttle, FaCogs, FaShieldAlt } from "react-icons/fa";
import { gsap } from "gsap";

const ElevatorBedModel = ({ modelPath, isRotating }) => {
  const ref = useRef();
  const { scene } = useGLTF(modelPath);

  // useFrame((state, delta) => {
  //   if (ref.current && isRotating) {
  //     ref.current.rotation.y += delta * 0.2; // Smooth rotation based on frame delta
  //   }
  // });

  return <primitive ref={ref} object={scene} scale={1} position={[0, -0.5, 0]} />;
};

export default function ElevatorBed3D() {
  const [isRotating, setIsRotating] = useState(true);
  const [showHint, setShowHint] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const canvasContainerRef = useRef(null);
  const textContentRef = useRef(null);

  // Handle fullscreen mode
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      canvasContainerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Animation for text content
  useEffect(() => {
    if (textContentRef.current) {
      gsap.fromTo(textContentRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out"
        }
      );
    }
  }, []);

  // Hide hint after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-4 md:px-8">

        {/* 3D Model Container */}
        <div className="w-full lg:w-1/2 relative" ref={canvasContainerRef}>
          <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative group">
            <Canvas
              camera={{ position: [0, 2, 0.2], fov: 50, near: 0.1, far: 1000 }}
              dpr={[1, 1.5]}
              gl={{ alpha: true }}
              shadows
              onPointerEnter={() => setShowHint(false)}
              onPointerLeave={() => setShowHint(true)}
            >
              <color attach="background" args={['#f8fafc']} />
              <ambientLight intensity={0.6} />
              <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
              <pointLight position={[-5, 5, 5]} intensity={0.5} />

              <Suspense fallback={null}>
                <Center>
                  <ElevatorBedModel modelPath="/models/elevator-bed.glb" isRotating={isRotating} />
                </Center>
              </Suspense>

              <OrbitControls
                enableZoom={true}
                enablePan={true}
                enableDamping={true}
                dampingFactor={0.05}
                onChange={() => setIsRotating(false)}
              />
            </Canvas>

            {/* Interaction Hint */}
            {showHint && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm transition-opacity duration-300">
                <FaMouse className="text-blue-300" />
                <span className="text-sm">Drag to rotate • Scroll to zoom</span>
              </div>
            )}

            {/* Control Buttons */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={() => setIsRotating(!isRotating)}
                className={`p-2 rounded-full ${isRotating ? 'bg-blue-500 text-white' : 'bg-white/90 text-gray-700'} transition-all shadow-md hover:scale-110`}
                aria-label="Toggle auto-rotation"
              >
                <FaRedoAlt />
              </button>
              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-full bg-white/90 text-gray-700 transition-all shadow-md hover:scale-110"
                aria-label="Toggle fullscreen"
              >
                {isFullscreen ? <FaCompress /> : <FaExpand />}
              </button>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-2">
                <FaSpaceShuttle className="text-2xl text-brand" />
              </div>
              <div className="text-brand font-bold text-md mb-1">Space Saving</div>
              <div className="text-xs text-gray-600">Maximizes your living area efficiently</div>
            </div>
            <div className="bg-white p-4 rounded-xl text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-2">
                <FaCogs className="text-2xl text-brand" />
              </div>
              <div className="text-brand font-bold text-md mb-1">Easy Operation</div>
              <div className="text-xs text-gray-600">Simple controls, smooth mechanism</div>
            </div>
            <div className="bg-white p-4 rounded-xl text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-2">
                <FaShieldAlt className="text-2xl text-brand" />
              </div>
              <div className="text-brand font-bold text-md mb-1">Durable Build</div>
              <div className="text-xs text-gray-600">Premium materials, built to last</div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div ref={textContentRef} className="w-full lg:w-1/2 flex flex-col justify-start space-y-6">
          <h1 className="text-h2 font-bold text-gray-900 leading-tight">
            Transform Your Space with <span className="text-brand">Smart Design</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Experience the perfect blend of comfort, innovation, and space optimization.
            Our premium elevator beds are engineered for modern homes, apartments, and vans,
            giving you back valuable floor space without compromising on style or functionality.
          </p>

          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">Customizable to fit any space</span>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">Easy to install and operate</span>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">Premium materials and craftsmanship</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <CustomButton
              text="Ask a Question"
              // icon={FaQuestionCircle}
              className="bg-brand hover:bg-brand/700"
            />
            <CustomButton
              text="Explore Shop"
              // icon={FaCar}
              className="bg-brand hover:bg-brand/700 text-whito py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 font-medium text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}