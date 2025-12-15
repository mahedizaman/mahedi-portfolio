"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileCircle() {
  return (
    <div className="relative w-56 h-56 flex items-center justify-center">
      <svg viewBox="0 0 240 240" className="absolute w-full h-full">
        <motion.circle
          cx="120"
          cy="120"
          r="110"
          fill="none"
          stroke="url(#grad)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="180 120" 
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
          style={{ transformOrigin: "50% 50%" }}
        />

        <defs>
          <linearGradient id="grad" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F54927" />
            <stop offset="50%" stopColor="#7928ca" />
            <stop offset="100%" stopColor="#00f2fe" />
          </linearGradient>
        </defs>
      </svg>

      {/* Image */}
      <div className="relative w-44 h-44 rounded-full overflow-hidden">
        <Image
          src="/myImages.jpg"
          alt="profile"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
