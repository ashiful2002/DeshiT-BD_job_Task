import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const MobileSidebar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#" },
    { name: "Products", link: "#products" },
    { name: "Projects", link: "#projects" },
    { name: "Company", link: "#company" },
    { name: "Contact", link: "#contact" },
    { name: "Training", link: "#training" },
  ];

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button onClick={() => setOpen(true)} className="text-white">
        <FaBars size={26} />
      </button>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-6 transform transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-700"
          onClick={() => setOpen(false)}
        >
          <FaX size={26} />
        </button>

        <nav className="mt-10 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="block text-lg font-medium text-gray-800 hover:text-blue-600 transition"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileSidebar;
