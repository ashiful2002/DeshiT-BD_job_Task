import React from "react";
import { motion } from "framer-motion";
import web from "../../assets/web.jpg";
import dm from "../../assets/dm.jpg";
import ui_ux from "../../assets/ui_ux.jpg";
import software from "../../assets/software.jpg";
import quality from "../../assets/quality.jpg";
import mobile_app from "../../assets/mobile_app.jpg";
import Section from "../Section/Section";

const services = [
  { img: mobile_app, title: "Mobile App" },
  { img: ui_ux, title: "UI/UX Design" },
  { img: software, title: "Software Development" },
  { img: dm, title: "Digital Marketing" },
  { img: web, title: "Web Development" },
  { img: quality, title: "Quality Assurance" },
];

const Services = () => {
  return (
    <Section id="">
      <h1 className="section-title mb-6 text-center mt-22">
        <span>Our</span> Services
      </h1>
      <p className="section-sub-title mb-12 text-center max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        necessitatibus amet voluptatum aliquid saepe aut, iste nisi molestias
        quidem quisquam?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }} 
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
          >
            <img src={service.img} alt={service.title} />
            <h4 className="text-[28px] bg-[#020F40] py-[10px] px-[34px] text-center text-white">
              {service.title}
            </h4>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
