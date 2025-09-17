import React from "react";
import Section from "../Section/Section";

import node from "../../assets/node-js.jpg";
import react from "../../assets/react.jpg";
import figma from "../../assets/figma.jpg";
import vue from "../../assets/vue-js.jpg";
import flutter from "../../assets/flutter.jpg";
import laravel from "../../assets/laravel.jpg";

const technologies = [
  {
    index: 1,
    img: node,
  },
  {
    index: 2,
    img: react,
  },
  {
    index: 3,
    img: figma,
  },
  {
    index: 4,
    img: vue,
  },
  {
    index: 5,
    img: flutter,
  },
  {
    index: 6,
    img: laravel,
  },
];

const Technology = () => {
  return (
    <Section>
      <h2 className="section-title mb-12">
        <span>Technology </span>We Use
      </h2>
      <div className="flex flex-wrap justify-around">
        {technologies.map((tech, index) => {
          return (
            <img
              key={tech.index}
              src={tech.img}
              className=""
              alt={tech.index}
            />
          );
        })}{" "}
      </div>
    </Section>
  );
};

export default Technology;
