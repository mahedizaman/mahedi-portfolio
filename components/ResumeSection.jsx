"use client";

import Link from "next/link";
import Container from "./Container";

export default function ResumeSection() {
  return (
    <Container>
      <div className="py-16 bg-gray-900 text-white flex flex-col items-center justify-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Download My Resume
        </h2>
        <p className="text-center max-w-xl mb-8 text-gray-300">
          Click the button below to download my resume and learn more about my
          skills, experience, and projects.
        </p>
        <Link href="/resume/resume.pdf" target="_blank" download>
          <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg text-white font-medium transition">
            Download Resume
          </button>
        </Link>
      </div>
    </Container>
  );
}
