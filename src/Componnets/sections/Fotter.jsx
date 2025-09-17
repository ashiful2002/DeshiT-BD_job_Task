import React from "react";
import fb from "../../assets/fb.jpg";
import In from "../../assets/in.jpg";
import Section from "../Section/Section";

const Footer = () => {
  return (
    <Section>
      <hr className="border-[#676f8c] mb-8" />

      {/* Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        {/* Links */}
        <div>
          <h5 className="font-semibold mb-3">Links</h5>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-[var(--text-color)] hover:text-[#fa8370]"
              >
                Company
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[var(--text-color)] hover:text-[#fa8370]"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[var(--text-color)] hover:text-[#fa8370]"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Training */}
        <div>
          <h5 className="font-semibold mb-3">Training</h5>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-[var(--text-color)]  hover:text-[#fa8370]"
              >
                Flutter
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[var(--text-color)]  hover:text-[#fa8370]"
              >
                Node JS
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[var(--text-color)]  hover:text-[#fa8370]"
              >
                Laravel
              </a>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h5 className="font-semibold mb-3">Our Address</h5>
          <p className="text-sm text-[var(--text-color)] ">D/36 Block-E Lalmatya, Dhaka</p>
          <p className="text-sm mb-3 text-[var(--text-color)] ">1207, Bangladesh</p>
          <div className="flex gap-3">
            <img
              src={fb}
              width={30}
              alt="facebook"
              className="cursor-pointer"
            />
            <img
              src={In}
              width={30}
              alt="linkedin"
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* Get In Touch */}
        <div>
          <h5 className="font-semibold mb-3">Get In Touch</h5>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 border-gray-200 border shadow-lg rounded w-full"
            />
            <button className="btn w-full rounded subscrive-btn">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <p className="text-center text-sm  pt-4">
        &copy; {new Date().getFullYear()} All rights reserved. Designed by{" "}
        <span className="text-[#fa8370] font-semibold">DeshiT-BD</span>
      </p>
    </Section>
  );
};

export default Footer;
