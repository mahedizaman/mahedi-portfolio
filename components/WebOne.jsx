"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";

const WebOne = () => {
  return (
    <Container>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-block border-2 rounded-lg p-4 "
        >
          <div className="w-full sm:w-120">
            <Image
              src="/wesitesImage/webOne.png"
              alt="webOne"
              width={700}
              height={700}
              className="rounded-lg"
            />
          </div>

          <div className="border-t-2 pt-3 mt-6">
            <Link
              href="https://berryclone.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className=" px-4 py-2 rounded bg-purple-500 text-white cursor-pointer"
            >
              Live
            </Link>
          </div>
        </motion.div>
        <div>
          <h2 className="font-bold text-gray-400 text-xl sm:text-2xl sm:text-left mb-4">
            Berry Clone
          </h2>
          <p>
            BerryClone is a modern e-commerce website clone built with{" "}
            <strong>Next.js </strong> 
            and <strong>Tailwind CSS</strong> . It features a clean, responsive
            design where users can browse products, view details, and add items
            to a dynamic cart that updates instantly. While it does not include
            authentication, backend, or real payments, the project highlights
            interactive UI, component-based architecture, and responsive
            layouts. BerryClone demonstrates my frontend development skills and
            can be extended into a fully functional e-commerce platform in the
            future.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default WebOne;
