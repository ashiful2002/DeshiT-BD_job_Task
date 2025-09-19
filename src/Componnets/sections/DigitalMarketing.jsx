("use client");
import React from "react";
import { motion } from "framer-motion";
import group10 from "../../assets/Group10.jpg";
import group11 from "../../assets/Group11.jpg";
import group12 from "../../assets/Group12.jpg";
import group13 from "../../assets/Group13.jpg";
import group14 from "../../assets/Group14.jpg";
import group15 from "../../assets/Group15.jpg";
import group16 from "../../assets/Group16.jpg";
import group17 from "../../assets/Group17.jpg";

const DigitalMarketing = () => {
  const fadeZoomUp = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="grid lg:grid-cols-3 gap-4 mt-22 pb-52 mx-auto overflow-hidden">
      {/* Left side */}
      <div className="space-y-12 text-sm relative hidden lg:block">
        <div className="absolute top-1/4 left-2/5">
          <p className="border border-black p-2 max-w-[349px]">
            Researching and writing relevant, semantically tagged articles that
            readers will find interesting, useful and share, hence bettering
            your company’s position on the internet.
          </p>
        </div>
        <div className="relative">
          <div className="absolute top-86 left-[410px]"></div>
          <div className="absolute top-89 left-4/6 w-52 h-0.5 bg-black"></div>
          <div className="absolute top-89 left-full w-0.5 h-6 bg-black"></div>
        </div>
        <div className="absolute top-96 left-1/5">
          <p className="border border-black p-2 max-w-[349px]">
            Researching and writing relevant, semantically tagged articles that
            readers will find interesting, useful and share, hence bettering
            your company’s position on the internet.
          </p>
        </div>
        <div className="relative top-32 -left-17">
          <div className="absolute top-86 left-[410px]"></div>
          <div className="absolute top-89 left-4/6 w-52 h-0.5 bg-blck"></div>
          {/* <div className="absolute top-89 left-full w-0.5 h-6 bg-black"></div> */}
        </div>
        <div className="absolute top-9/12 left-1/5">
          <p className="border border-black p-2 max-w-[349px]">
            Researching and writing relevant, semantically tagged articles that
            readers will find interesting, useful and share, hence bettering
            your company’s position on the internet.
          </p>
        </div>
        <div className="relative top-60 -left-17">
          <div className="absolute top-89 left-[410px]">
            <img src="/images/Arrow.png" alt="" className="rotate-90" />
          </div>
          <div className="absolute top-89 left-4/6 w-82 h-0.5 bg-black"></div>
          <div className="absolute top-89 left-[742px] w-0.5 h-6 bg-black"></div>
        </div>
        <div className="absolute top-11/12 left-5/12">
          <p className="border border-black p-2 max-w-[349px]">
            Researching and writing relevant, semantically tagged articles that
            readers will find interesting, useful and share, hence bettering
            your company’s position on the internet.
          </p>
        </div>
        <div className="relative top-[590px] left-28">
          <div className="absolute top-78 left-[412px]">
            <img src="/images/Arrow 1.png" alt="" className="" />
          </div>
          <div className="absolute top-89 left-4/6 w-96 h-0.5 bg-black"></div>
          <div className="absolute top-65 left-[798px] w-0.5 h-24 bg-black"></div>
        </div>
      </div>

      {/* MIddle side */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeZoomUp}
        className="min-h-screen "
      >
        <div className="space-y-4">
          <h1 className="section-title">
            <span>Digital</span> Marketing
          </h1>
          <p className="section-sub-title">
            Lorem ipsum dolor sit amet consectetur. Fringilla mauris vel felis
            vitae. Id quisque urna sed eget facilisi. Nulla pretium odio
            dictumst aliquet.
          </p>
        </div>

        {/* Circle Container */}
        <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] mx-auto border-4 border-black rounded-full mt-32 transition-all">
          {/* Center Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] rounded-full flex items-center justify-center text-center font-bold text-black">
            <h2 className="text-2xl lg:text-4xl transition-all">
              Digital Marketing
            </h2>
          </div>

          {/* Google Ads */}
          <div className="absolute w-[120px] h-[120px] rounded-full  flex items-center justify-center top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className=" rounded-full  text-white text-2xl flex items-center justify-center shadow-md">
              <img src={group10} alt="google adds" />
            </div>
          </div>
          <div className="absolute text-sm font-medium text-gray-800 whitespace-nowrap top-[-18%] left-1/2 -translate-x-1/2">
            Google Ads
          </div>

          {/* Facebook */}
          <div className="absolute w-[120px] h-[120px] rounded-full  flex items-center justify-center top-[15%] left-[85%] -translate-x-1/2 -translate-y-1/2">
            <div className=" rounded-full  flex items-center justify-center shadow-md">
              <img src={group11} alt="Facebook" />
            </div>
          </div>
          <div className="absolute text-sm font-medium text-gray-800 top-[15%] left-[100%]">
            Facebook
          </div>

          {/* Video */}
          <div className="absolute w-[120px] h-[120px] rounded-full flex items-center justify-center top-1/2 left-full -translate-x-1/2 -translate-y-1/2">
            <div className=" rounded-full text-2xl flex items-center justify-center shadow-md">
              <img src={group12} alt="video" />
            </div>
          </div>
          <div className="absolute text-sm font-medium text-gray-800 top-1/2 left-[115%]">
            Video
          </div>

          {/* Content Writing */}
          <div className="absolute w-[120px] h-[120px] rounded-full  flex items-center justify-center top-[85%] left-[85%] -translate-x-1/2 -translate-y-1/2">
            <div className="rounded-full   text-2xl flex items-center justify-center shadow-md">
              <img src={group13} alt="asdf" />
            </div>
          </div>
          <div className="absolute text-sm font-medium text-gray-800 top-[80%] left-[100%]">
            Content Writing
          </div>

          {/* Graphic Design */}
          <div className="absolute w-[120px] h-[120px] rounded-full flex items-center justify-center top-full left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="rounded-full  text-2xl flex items-center justify-center shadow-md">
              <img src={group14} alt="graphic design" />
            </div>
          </div>
          <div className="absolute text-sm font-medium text-gray-800 top-[115%] left-1/2 -translate-x-1/2">
            Graphic Design
          </div>

          {/* SEO */}
          <div className="absolute w-[120px] h-[120px] rounded-full  flex items-center justify-center top-[80%] left-[12%] -translate-x-1/2 -translate-y-1/2">
            <div className="rounded-full text-2xl flex items-center justify-center shadow-md">
              <img src={group15} alt="SEO" />
            </div>
          </div>
          <div className="absolute text-sm font-medium text-gray-800 top-[80%] -left-[8%]">
            SEO
          </div>

          {/* TikTok */}
          <div className="absolute w-[120px] h-[120px] rounded-full  flex items-center justify-center top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
            <div className=" rounded-full  text-2xl flex items-center justify-center shadow-md">
              <img src={group16} alt="Tik tok" />
            </div>
          </div>
          <div className="absolute text-sm font-medium text-gray-800 top-1/2 left-[-23%]">
            TikTok
          </div>

          {/* LinkedIn */}
          <div className="absolute w-[120px] h-[120px] rounded-full  flex items-center justify-center top-[15%] left-[15%] -translate-x-1/2 -translate-y-1/2">
            <div className="rounded-full  text-2xl flex items-center justify-center shadow-md">
              <img src={group17} alt="Linked in" />
            </div>
          </div>
          <div className="absolute text-sm font-medium text-gray-800 top-[20%] left-[-10%]">
            LinkedIn
          </div>
        </div>
      </motion.div>

      {/* Right Side */}
      <div className="space-y-12 text-sm relative hidden lg:block">
        <div className="relative -top-29 right-96">
          <div className="absolute top-69 left-[408px]">
            <img src="/images/Arrow.png" alt="" className="rotate-90" />
          </div>
          <div className="absolute top-69 left-1/12 w-91 h-0.5 bg-black"></div>
          <div className="absolute top-69 left-13 w-0.5 h-6 bg-black"></div>
        </div>
        <div className="absolute top-44 -left-32">
          <p className="border border-black p-2 max-w-[349px]">
            Researching and writing relevant, semantically tagged articles that
            readers will find interesting, useful and share, hence bettering
            your company’s position on the internet.
          </p>
        </div>

        <div className="relative -top-6 right-26">
          <div className="absolute top-69 left-[408px]">
            <img src="/images/Arrow.png" alt="" className="rotate-90" />
          </div>
          <div className="absolute top-69 left-1/12 w-91 h-0.5 bg-black"></div>
          <div className="absolute top-69 left-13 w-0.5 h-6 bg-black"></div>
        </div>
        <div className="absolute top-80 left-1/5">
          <p className="border border-black p-2 max-w-[349px]">
            Researching and writing relevant, semantically tagged articles that
            readers will find interesting, useful and share, hence bettering
            your company’s position on the internet.
          </p>
        </div>

        <div className="relative top-48 right-8">
          <div className="absolute top-69 left-[408px]">
            <img src="/images/Arrow.png" alt="" className="rotate-90" />
          </div>
          <div className="absolute top-69 left-1/12 w-91 h-0.5 bg-black"></div>
          {/* <div className="absolute top-69 left-13 w-0.5 h-6 bg-black"></div> */}
        </div>
        <div className="absolute top-7/12 left-[208px]">
          <p className="border border-black p-2 max-w-[349px]">
            Researching and writing relevant, semantically tagged articles that
            readers will find interesting, useful and share, hence bettering
            your company’s position on the internet.
          </p>
        </div>

        <div className="relative top-[545px] right-32">
          <div className="absolute top-66 left-[408px]">
            <img src="/images/Arrow.png" alt="" className="-rotate-90" />
          </div>
          <div className="absolute top-69 left-1/12 w-91 h-0.5 bg-black"></div>
          <div className="absolute top-37 left-13 w-0.5 h-32 bg-black"></div>
        </div>
        <div className="absolute top-10/12 left-2/12">
          <p className="border border-black p-2 max-w-[349px]">
            Researching and writing relevant, semantically tagged articles that
            readers will find interesting, useful and share, hence bettering
            your company’s position on the internet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;

// import React from "react";
// import { motion } from "framer-motion";

// const DigitalMarketing = () => {
//   const fadeZoomUp = {
//     hidden: { opacity: 0, y: 50, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };
// /

//   return (
//     <div className="grid lg:grid-cols-3 gap-4 py-24">
//       {/* Left Column */}
//       <div className="space-y-12 text-sm relative">
//         <div className="absolute top-1/4 left-2/5">
//           <p className="border border-black p-2 max-w-[349px] hidden lg:block">
//             Researching and writing relevant, semantically tagged articles that
//             readers will find interesting, useful and share, hence bettering
//             your company’s position on the internet.
//           </p>
//         </div>
//         <div className="relative">
//           <div className="absolute top-86 left-[410px] hidden lg:block">
//             <img src="/images/Arrow.png" alt="" className="-rotate-90" />
//           </div>
//           <div className="absolute top-89 left-4/6 w-52 h-0.5 bg-black"></div>
//           <div className="absolute top-89 left-full w-0.5 h-6 bg-black"></div>
//         </div>
//         <div className="absolute top-96 left-1/5">
//           <p className="border border-black p-2 max-w-[349px] hidden lg:block">
//             Researching and writing relevant, semantically tagged articles that
//             readers will find interesting, useful and share, hence bettering
//             your company’s position on the internet.
//           </p>
//         </div>
//         <div className="relative top-32 -left-17">
//           <div className="absolute top-86 left-[410px] hidden lg:block">
//             <img src="/images/Arrow.png" alt="" className="-rotate-90" />
//           </div>
//           <div className="absolute top-89 left-4/6 w-52 h-0.5 bg-black"></div>
//         </div>
//         <div className="absolute top-9/12 left-1/5">
//           <p className="border border-black p-2 max-w-[349px] hidden lg:block">
//             Researching and writing relevant, semantically tagged articles that
//             readers will find interesting, useful and share, hence bettering
//             your company’s position on the internet.
//           </p>
//         </div>
//         <div className="absolute top-11/12 left-5/12">
//           <p className="border border-black p-2 max-w-[349px] hidden lg:block">
//             Researching and writing relevant, semantically tagged articles that
//             readers will find interesting, useful and share, hence bettering
//             your company’s position on the internet.
//           </p>
//         </div>
//       </div>

//       {/* Middle Column */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false }}
//         variants={fadeZoomUp}
//         className="py-10 min-h-screen"
//       >
//         <h1 className="text-center text-2xl font-bold mb-6">
//           Digital Marketing Overview
//         </h1>
//         <p className="text-center">
//           Lorem ipsum dolor sit amet consectetur. Fringilla mauris vel felis
//           vitae. Id quisque urna sed eget facilisi. Nulla pretium odio dictumst
//           aliquet.
//         </p>

//         {/* Circle Container */}
//         <div className="relative w-[500px] h-[500px] mx-auto border-4 border-black rounded-full mt-32">
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] rounded-full flex items-center justify-center text-center font-bold text-black">
//             <h1 className="text-2xl md:text-3xl transition-all">
//               Digital Marketing
//             </h1>
//           </div>

//           {circleItems.map((item, index) => (
//             <div
//               key={index}
//               className="absolute w-[100px] h-[100px]  flex items-center justify-center"
//               style={{
//                 top: item.top,
//                 left: item.left,
//                 transform: "translate(-50%, -50%)",
//               }}
//             >
//               <div className="w-24 rounded-full  flex items-center justify-center shadow-md overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.label}
//                   className="w-full h-full rounded-full object-cover"
//                 />
//               </div>
//               <div
//                 className="absolute text-sm font-medium text-gray-800 whitespace-nowrap "
//                 style={{
//                   top: "100%",
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                 }}
//               >
//                 {item.label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </motion.div>

//       {/* Right Column */}
//       <div></div>
//     </div>
//   );
// };

// export default DigitalMarketing;
