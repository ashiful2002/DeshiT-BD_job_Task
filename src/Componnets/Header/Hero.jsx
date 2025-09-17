import navLogo from "../../assets/Desh-IT BD logo white.png";
import heroBg from "../../assets/Vector 1.jpg";
import phone2 from "../../assets/mobile2 1.png";
import app from "../../assets/Frame.jpg";
import web from "../../assets/Frame-1.jpg";
import mobile from "../../assets/group.jpg";

const Hero = () => {
  const navs = (
    <>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#products">Products</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#company">Company</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li>
        <a href="#training">Training</a>
      </li>
    </>
  );

  return (
    <section id="hero">
      <div
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0"></div>

        {/* Header */}
        <header className="relative z-10 flex items-center justify-between px-4 sm:px-8 md:px-10 py-4 md:py-6 text-white">
          <div>
            <a href="#">
              <img width={150} src={navLogo} alt="logo" />
            </a>
          </div>
          <nav>
            <ul className="hidden md:flex gap-6 lg:gap-10 font-medium tracking-wide">
              {navs}
            </ul>
          </nav>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 md:px-32 mt-12 md:mt-24">
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
              className="text-base hover:cursor-pointer sm:text-lg md:text-xl font-medium 
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

      {/* About + Stats Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 px-4 sm:px-6 md:px-12 py-12 container mx-auto">
        {/* About */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Desh-IT BD
          </h3>
          <p className="text-sm sm:text-base md:text-base lg:text-base text-gray-600 dark:text-[var(--text-color)] leading-relaxed">
            Started its journey with the determination of enabling organizations
            to leverage technology for betterment. Our priority is to deliver
            impactful solutions with superior user experience. We are highly
            design-focused and practice SCRUM to meet client requirements while
            delivering solutions on time and within budget.
          </p>
        </div>

        {/* Stats */}
        <div className="md:w-1/2 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          {/* Card 1 */}
          <div className="px-6 py-6 sm:py-8 bg-white dark:bg-gray-900  rounded-xl shadow-md text-center w-full sm:w-40 md:w-44 lg:w-48">
            <img
              src={app}
              className="w-12 sm:w-14 mx-auto mb-2 sm:mb-3"
              alt="app"
            />
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">7+</h3>
            <p className="text-sm sm:text-base text-gray-500">
              Years of Experience
            </p>
          </div>

          {/* Card 2 */}
          <div className="px-6 py-6 sm:py-8 bg-white dark:bg-gray-900  rounded-xl shadow-md text-center w-full sm:w-40 md:w-44 lg:w-48">
            <img
              src={mobile}
              className="w-12 sm:w-14 mx-auto mb-2 sm:mb-3"
              alt="mobile"
            />
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              30+
            </h3>
            <p className="text-sm sm:text-base text-gray-500">
              Mobile Apps Developed
            </p>
          </div>

          {/* Card 3 */}
          <div className="px-6 py-6 sm:py-8 bg-white dark:bg-gray-900  rounded-xl shadow-md text-center w-full sm:w-40 md:w-44 lg:w-48">
            <img
              src={web}
              className="w-12 sm:w-14 mx-auto mb-2 sm:mb-3"
              alt="web"
            />
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              25+
            </h3>
            <p className="text-sm sm:text-base text-gray-500">
              Websites Developed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
