import React from "react";
import Section from "./Section";

import node from "../../assets/node-js.jpg";
import react from "../../assets/react.jpg";
import figma from "../../assets/figma.jpg";
import vue from "../../assets/vue-js.jpg";
import flutter from "../../assets/flutter.jpg";
import laravel from "../../assets/laravel.jpg";

const technologies = [
  { id: 1, img: node },
  { id: 2, img: react },
  { id: 3, img: figma },
  { id: 4, img: vue },
  { id: 5, img: flutter },
  { id: 6, img: laravel },
];

const Technology = () => {
  return (
    <Section>
      <h2 className="section-title mb-10 text-center">
        <span>Technology</span> We Use
      </h2>

      <div className="relative flex items-center justify-center h-[500px]">
        {/* Center Circle */}
        <div className="w-40 h-40 flex items-center justify-center rounded-full bg-blue-100 shadow-md font-semibold text-center">
          Tech <br /> Stack
        </div>

        {/* Surrounding Icons */}
        {technologies.map((tech, index) => {
          const angle = (index / technologies.length) * 360; // distribute evenly
          return (
            <div
              key={tech.id}
              className="absolute"
              style={{
                transform: `rotate(${angle}deg) translate(200px) rotate(-${angle}deg)`,
              }}
            >
              <img
                src={tech.img}
                alt={`tech-${tech.id}`}
                className="w-16 h-16 object-contain rounded-full border shadow-md bg-white p-2"
              />
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Technology;
