import React from "react";
import Section from "../Section/Section";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="bg-[#fa8370] text-white ">
      <section className="mt-[80px] lg:container mx-auto px-10">
        <div className="flex py-12 flex-col items-center text-center gp-4">
          <h2 className="text-3xl font-semibold  mb-4">Say Hello</h2>

          <p className="flex items-center gap-2">
            <FaPhone /> +880 1700000000
          </p>
          <p className="flex items-center mt-2 gap-2">
            <FaEnvelope /> contact@DeshIT-bd.com
          </p>

          <button className="btn secondary-btn mt-4">Free Consultation</button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
