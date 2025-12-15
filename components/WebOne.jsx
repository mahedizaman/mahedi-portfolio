"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";

const WebOne = () => {
  return (
    <Container>
      <div className="inline-block">
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
              href="https://www.google.com/maps?q=Dhaka,Bangladesh"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 rounded bg-purple-500 text-white cursor-pointer"
            >
              Live
            </Link>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default WebOne;
