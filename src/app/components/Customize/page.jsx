"use client";
import React, { useRef, Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center, useGLTF, Environment ,Html} from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomButton from "../Common/Buttons/page";
import Loader from "../Loader/page";


gsap.registerPlugin(ScrollTrigger);

const VanPart = ({
  modelPath,
  assembledPos = [0, 0, 0],
  initialPos = [0, 0, 0],
  triggerRef,
  rotation = [0, 0, 0],
  initialRotation = [0, 0, 0],
  index
}) => {
  const ref = useRef();
  const { scene } = useGLTF(modelPath);

  useEffect(() => {
    if (ref.current && triggerRef?.current) {
      // Set initial position (disassembled)
      gsap.set(ref.current.position, {
        x: initialPos[0],
        y: initialPos[1],
        z: initialPos[2]
      });

      // Set initial rotation
      gsap.set(ref.current.rotation, {
        x: initialRotation[0],
        y: initialRotation[1],
        z: initialRotation[2]
      });

      // Animate to assembled position on scroll with staggered delay
      gsap.to(ref.current.position, {
        x: assembledPos[0],
        y: assembledPos[1],
        z: assembledPos[2],
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        delay: index * 0.1, // Stagger animation based on index
        ease: "back.out(1.7)",
      });

      // Animate rotation
      gsap.to(ref.current.rotation, {
        x: rotation[0],
        y: rotation[1],
        z: rotation[2],
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        delay: index * 0.1,
        ease: "power2.out",
      });
    }
  }, [triggerRef, assembledPos, initialPos, rotation, initialRotation, index]);

  return <primitive ref={ref} object={scene} scale={1} />;
};



export default function VanCustomizer() {
  const sectionRef = useRef();
  const canvasWrapperRef = useRef();
  const textContentRef = useRef();


  const parts = [
    {
      name: "Wall Panels",
      modelPath: "/models/wall-panels.glb",
      assembledPos: [0, 0, 0],
      initialPos: [8, 0, 0],
      description: "Premium insulated wall panels for temperature control and noise reduction."
    },
    {
      name: "Fridge",
      modelPath: "/models/TallFridge.glb",
      assembledPos: [0, 0, 0],
      initialPos: [-8, 0, 0],
      description: "Energy-efficient refrigerator with adjustable compartments."
    },
    {
      name: "Swivel Table",
      modelPath: "/models/swivel-table.glb",
      assembledPos: [0, 0, 0],
      initialPos: [0, 8, 0],
      initialRotation: [0, 0, Math.PI/4],
      description: "360° swivel table for dining and workspace flexibility."
    },
    {
      name: "Awning",
      modelPath: "/models/awning.glb",
      assembledPos: [0, 0, 0],
      initialPos: [0, -8, 0],
      description: "Retractable awning for outdoor living space in any weather."
    },
    {
      name: "Roof Rack",
      modelPath: "/models/roof-rack.glb",
      assembledPos: [0, 0, 0],
      initialPos: [0, 10, 0],
      description: "Durable roof rack for additional storage of adventure gear."
    },
    {
      name: "Solar Panel",
      modelPath: "/models/solar.glb",
      assembledPos: [.5, 0, 0],
      initialPos: [0, -10, 0],
      description: "High-efficiency solar panels for off-grid power independence."
    }
  ];

  useEffect(() => {
    if (sectionRef.current && canvasWrapperRef.current) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        pin: sectionRef.current,
        anticipatePin: 1,
      });
    }

    // Animate text content
    if (textContentRef.current) {
      gsap.fromTo(textContentRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          scrollTrigger: {
            trigger: textContentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);


  return (

    <section
      ref={sectionRef}
      className="w-full h-screen"
    >

      <div className="max-w-7xl mx-auto px-4">

        {/* Bottom Layout: Canvas + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: 3D Canvas */}
          <div
            ref={canvasWrapperRef}
            className="h-[400px] lg:h-[500px] bg-whit0 rounded-xl shadow-xl overflow-hidden relative"
          >
            <Canvas className="h-full" camera={{ position: [0, 5, 7], fov: 40 }}>
              <ambientLight intensity={0.6} />
              {/* <directionalLight position={[10, 10, 5]} intensity={1} /> */}
              <Environment files="./textures/zwartkops_straight_afternoon_1k.hdr" />

              <Suspense  fallback={
                        <Html fullscreen>
                          <Loader/>
                        </Html>
                      }>
                <Center position={[0, 0.5, 0]}>
                  {/* Van Body - stays in place */}
                  <VanPart
                    modelPath="/models/Van_Pebble.glb"
                    assembledPos={[0, 0, 0]}
                    initialPos={[0, 0, 0]}
                    triggerRef={sectionRef}
                    index={0}
                  />

                  {/* Other parts */}
                  {parts.map((part, index) => (
                    <VanPart
                      key={index}
                      modelPath={part.modelPath}
                      assembledPos={part.assembledPos}
                      initialPos={part.initialPos}
                      rotation={part.rotation || [0, 0, 0]}
                      initialRotation={part.initialRotation || [0, 0, 0]}
                      triggerRef={sectionRef}
                      index={index + 1}
                    />
                  ))}
                </Center>
              </Suspense>

              <OrbitControls
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={Math.PI / 2}
                minDistance={4}
                maxDistance={10}
              />
            </Canvas>

            {/* Canvas controls info */}
            <div className="absolute bottom-4 left-4 bg-blackish/70 text-whit0 text-xs text-whito px-3 py-2 rounded-lg">
              Drag to rotate • Scroll to zoom
            </div>
          </div>

          {/* Right: Customization Text */}
          <div ref={textContentRef} className="space-y-6  top-24">
               <h2 className="text-h3 font-bold text-blackish mb-4">
            Customize Your Adventure Van
          </h2>
          <p className="text-blackish mx-auto text-lg">
            At Big Bear Vans, we don't do one-size-fits-all custom van conversions.
            We build every campervan according to your lifestyle, habits, and travel plans.
          </p>
            <h3 className="text-h3 font-bold text-gray-900">
              Build Your Van, Your Way
            </h3>
            <p className="text-blackish text-lg">
              We specialize in custom van builds designed for comfort, durability, and style.
              Every part you see assembling is crafted with advanced technology and premium materials.
            </p>

            {/* Features List */}
            {/* <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-3 text-lg">Premium Features</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">High-quality parts & smart design</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Fully customizable interiors</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Advanced features for modern travel</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Energy-efficient systems</span>
                </li>
              </ul>
            </div> */}

            {/* Parts List with Hover Effects
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-lg">Van Components</h4>
              <div className="grid grid-cols-2 gap-3">
                {parts.slice(0, 4).map((part, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer"
                    onMouseEnter={() => setActivePart(part.name)}
                    onMouseLeave={() => setActivePart(null)}
                  >
                    <h5 className="font-medium text-gray-900 text-sm">{part.name}</h5>
                  </div>
                ))}
              </div>
            </div> */}

            {/* CTA Button */}
            <CustomButton text={" Start Your Custom Build"} bgColor="bg-brand hover:bg-brand/700 text-whito"/>


          </div>
        </div>
      </div>

    </section>
  );
}