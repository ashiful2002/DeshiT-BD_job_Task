import navLogo from "../../assets/Desh-IT BD logo white.png";
import heroBg from "../../assets/Vector 1.jpg";
import phone2 from "../../assets/mobile2 1.png";
import app from "../../assets/Frame.jpg";
import web from "../../assets/Frame-1.jpg";
import mobile from "../../assets/Group.jpg";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  // ✅ Close menu if click happens outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navs = (
    <>
      <li>
        <a href="#" onClick={() => setIsOpen(false)}>
          Home
        </a>
      </li>
      <li>
        <a href="#products" onClick={() => setIsOpen(false)}>
          Products
        </a>
      </li>
      <li>
        <a href="#projects" onClick={() => setIsOpen(false)}>
          Projects
        </a>
      </li>
      <li>
        <a href="#company" onClick={() => setIsOpen(false)}>
          Company
        </a>
      </li>
      <li>
        <a href="#contact" onClick={() => setIsOpen(false)}>
          Contact
        </a>
      </li>
      <li>
        <a href="#training" onClick={() => setIsOpen(false)}>
          Training
        </a>
      </li>
    </>
  );

  return (
    <section id="hero">
      <div
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Header */}
        <header className="fixed w-full bg-[var(--primary-color)] md:bg-none  transition-all top-0 z-20 flex items-center justify-between px-4 sm:px-8 md:px-10 py-4 md:py-6 text-white ">
          {/* Logo */}
          <div>
            <a href="#">
              <img width={150} src={navLogo} alt="logo" />
            </a>
          </div>

          {/* Mobile toggle button */}
          <div className="md:hidden">
            {isOpen ? (
              <FaX
                onClick={() => setIsOpen(false)}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <FaBars
                onClick={() => setIsOpen(true)}
                className="text-2xl cursor-pointer"
              />
            )}
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex">
            <ul className="flex gap-6 lg:gap-10 font-medium tracking-wide">
              {navs}
            </ul>
          </nav>

          {/* Mobile Menu */}
          <nav
            ref={menuRef}
            className={`absolute top-full left-0 w-full bg-[var(--primary-color)]/60 text-white md:hidden transition-all duration-300 ${
              isOpen ? "max-h-96 py-6" : "max-h-0 overflow-hidden"
            }`}
          >
            <ul className="flex flex-col ml-5 gap-6 font-medium ">{navs}</ul>
          </nav>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 md:px-32 mt-12 md:mt-20 top-10">
          {/* Text */}
          <div className="text-white max-w-xl container text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Outstanding Business
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold my-4">
              Needs Better Apps
            </h3>
            <p className="text-base sm:text-lg md:text-lg lg:text-lg text-gray-200">
              We build impactful apps that make a difference.
            </p>
            <button
              className="text-base sm:text-lg md:text-xl font-medium 
                text-white border border-white rounded-full px-5 sm:px-6 py-2 mt-6 sm:mt-8 md:mt-10
                hover:bg-white hover:text-[#fa7d70] transition-all duration-300 shadow-md"
            >
              Contact Us
            </button>
          </div>

          {/* Hero Image */}
          <div className="mt-8 md:mt-0">
            <img
              src={phone2}
              alt="Mobile app preview"
              className="w-full sm:w-[280px] md:w-[350px] lg:w-[400px] drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
