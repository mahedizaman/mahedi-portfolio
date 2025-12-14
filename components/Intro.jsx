import React from "react";
import Container from "./Container";
import { MapIcon } from "lucide-react";
import Image from "next/image";

const Intro = () => {
  return (
    <Container>
      <div className="flex items-center justify-between mb-10">
        <h3 className="font-bold text-xl mb-3">{`<Md Mahedi Zaman />`}</h3>
        <div className="relative w-56 h-56 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 animate-spin-slow"></div>

          <div className="absolute inset-2 rounded-full bg-white"></div>

          <div className="relative w-48 h-48 rounded-full overflow-hidden">
            <Image
              src="/myImages.jpg"
              alt="myImage"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <p className="text-sm ">
        A CSE Graduate & Aspiring Full-Stack Web Developer. Currently focused on
        learning and building projects using HTML, CSS, Tailwind CSS, React.js,
        and Next.js. I have a basic understanding of Node.js and Express.js and
        am gradually exploring backend development concepts. Passionate about
        problem solving, improving JavaScript skills, and learning modern web
        technologies step by step. Actively working on personal projects to
        strengthen my foundation and grow as a professional developer.
      </p>
      <div className="flex items-center gap-1 text-gray-600 text-sm">
        <MapIcon size={16} />
        <a
          href="https://www.google.com/maps?q=Dhaka,Bangladesh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dhaka, Bangladesh
        </a>
      </div>
    </Container>
  );
};

export default Intro;
