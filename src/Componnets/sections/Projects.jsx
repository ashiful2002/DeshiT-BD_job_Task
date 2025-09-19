import React from "react";
import Section from "../Section/Section";
import shoop from "../../assets/shoop.jpg";
import telefood from "../../assets/telefood.jpg";
import quran from "../../assets/quran.jpg";
import sleeptot from "../../assets/sleeptot.jpg";
import sbi from "../../assets/sbi.jpg";
import cinebaz from "../../assets/cinebaz.jpg";
import circle from "../../assets/circle4.jpg";
import { motion } from "framer-motion";
const products = [
  { id: 1, title: "shoop news", img: shoop },
  { id: 2, title: "Telefood", img: telefood },
  { id: 3, title: "সহজ কুরান শিক্ষা", img: quran },
  { id: 4, title: "Sleetat-Baby White Noise", img: sleeptot },
  { id: 5, title: "SBI Generel Secure", img: sbi },
  { id: 6, title: "Cinebuz", img: cinebaz },
];
const Projects = () => {
  return (
    <Section id="projects">
      <h1 className="section-title mt-22 ">
        Our <span>Developed</span> Projects
      </h1>
      <div className="absolute z-0">
        <img
          src={circle}
          width={900}
          className="mt-32 lg:ml-[800px] lg:-mt-32"
          alt=""
        />
      </div>
      <div className="grid grid-cols-1 mb-12 md:grid-cols-2 lg:grid-cols-3 gap-5 relative">
        {products.map((product, index) => (
          <motion.dev
            key={product.id}
            className="relative mt-8 rounded-2xl"
            initial={{ opacity: 0, y: 50 }} // start hidden & slightly below
            whileInView={{ opacity: 1, y: 0 }} // animate when visible
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          >
            <img
              className="rounded-2xl w-full"
              src={product.img}
              alt={product.title}
            />
            <h4 className="absolute shadow-xl -mt-7 capitalize z-10 text-center bg-white rounded-lg px-8 py-3 dark:text-[var(--text-color)] left-10 right-10 mx-auto">
              {product.title}
            </h4>
          </motion.dev>
        ))}
      </div>

      <div className=" flex items-center justify-center">
        <button className="btn primary-btn">More</button>
      </div>
    </Section>
  );
};

export default Projects;
