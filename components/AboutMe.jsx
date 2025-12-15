import React from 'react'
import Container from './Container'

const AboutMe = () => {
  return (
    <Container>
      <h3 className="font-bold text-gray-400 text-xl sm:text-2xl sm:text-left mb-4">
        About Me
      </h3>
      <span className="flex flex-col gap-4 px-4 sm:px-0 max-w-7xl mx-auto text-sm sm:text-base leading-relaxed sm:leading-7 text-gray-400 text-justify sm:text-left">
        <p>
          I am a frontend-focused web developer with a strong interest in
          building clean, responsive, and user-friendly interfaces. I work
          mainly with modern frontend technologies such as{" "}
          <strong>React, Next.js, and Tailwind CSS </strong> to create visually
          appealing and well-structured web applications.
        </p>
        <p>
          I have a basic understanding of backend technologies like{" "}
          <strong> Node.js, Express, and MongoDB,</strong> which helps me
          collaborate better with backend systems and integrate APIs
          effectively. My primary strength lies in{" "}
          <strong>
            {" "}
            UI design, component-based development, and responsive layouts
          </strong>
          .
        </p>
        <p>
          I enjoy learning new tools, improving my design sense, and building
          projects that focus on good user experience. I am continuously working
          to enhance my skills and grow as a professional frontend developer.
        </p>
      </span>
    </Container>
  );
}

export default AboutMe