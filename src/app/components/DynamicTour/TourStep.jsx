"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Robo from "../models/robo";

export default function TourStep({ text, stepNumber, totalSteps }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "8px 0"
    }}>
      {/* Step indicator */}
      <div style={{
        fontSize: 13,
        fontWeight: 600,
        color: "#6366f1",
        marginBottom: 16,
        letterSpacing: "0.5px",
        textTransform: "uppercase"
      }}>
        Step {stepNumber} of {totalSteps}
      </div>

      {/* Robo model */}
      <div style={{
        width: 180,
        height: 180,
        margin: "8px 0 16px",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.2)",
        backgroundColor: "#f8fafc"
      }}>
        <Canvas style={{ width: "100%", height: "100%" }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Robo />
        </Canvas>
      </div>

      {/* Text content */}
      {text && (
        <p style={{
          fontSize: 15,
          lineHeight: 1.6,
          color: "#374151",
          textAlign: "center",
          margin: 0,
          fontWeight: 500
        }}>
          {text}
        </p>
      )}
    </div>
  );
}