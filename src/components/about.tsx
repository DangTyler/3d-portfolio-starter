"use client";
import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 py-12 bg-gray-50">
      {/* Section title */}
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">About Me</h2>

      {/* Replace this paragraph with your personal story */}
      <p className="max-w-2xl text-center text-gray-600 leading-relaxed">
        Hello! I&apos;m <span className="font-semibold text-indigo-600">Your Name</span>, a passionate web developer
        who loves creating interactive and visually appealing websites using technologies like
        <span className="font-semibold"> Next.js, Three.js, and TypeScript</span>.
      </p>

      {/* Optional: Add an image, skill icons, or fun facts */}
    </section>
  );
};

export default About;