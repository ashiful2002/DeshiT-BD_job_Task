import React from "react";
import Section from "../Section/Section";
import gym from "../../assets/gym.jpg";
import tracker from "../../assets/tracker.jpg";
import parcel from "../../assets/parcel.jpg";
import school from "../../assets/school.jpg";
import inventory from "../../assets/inventory.jpg";
import logistics from "../../assets/logistics.jpg";
import { motion } from "framer-motion"; // <-- import Framer Motion

const products = [
  { id: 1, title: "gym management system", img: gym },
  { id: 2, title: "Transpiration Tracker", img: tracker },
  { id: 3, title: "Parcel delivery app", img: parcel },
  { id: 4, title: "school management system", img: school },
  { id: 5, title: "inventory management system", img: inventory },
  { id: 6, title: "logistics management system", img: logistics },
];
const Products = () => {
  return (
    <Section id="products">
      <h1 className="section-title mt-22">
        Our <span>Products</span>
      </h1>

      <div className=" grid grid-cols-1 mb-16 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="relative mt-8 "
            initial={{ opacity: 0, y: 50 }} // start hidden & slightly below
            whileInView={{ opacity: 1, y: 0 }} // animate when visible
            viewport={{ once: false, amount: 0.3  }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          >
            <img
              className="rounded-3xl w-full"
              src={product.img}
              alt={product.title}
            />
            <h4 className="absolute shadow-xl -mt-7 capitalize z-30 text-center bg-white rounded-lg px-8 py-3 dark:text-[var(--text-color)] left-10 right-10 mx-auto">
              {product.title}
            </h4>
          </motion.div>
        ))}
      </div>
      <div className=" flex items-center justify-center">
        <button className="btn primary-btn">More</button>
      </div>
    </Section>
  );
};

export default Products;
