import React from "react";
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
  { img: quality, title: "Software Quality Assurance" },
];
const Services = () => {
  return (
    // <section className="mt-[80px] lg:container mx-auto px-10 ">
    //   <div>
    //     <h1 className="section-title">
    //       <span>Our</span> Service
    //     </h1>
    //     <p className="section-sub-title w-4/6 mx-auto">
    //       Lorem ipsum dolor sit amet consectetur. Fringilla mauris vel felis
    //       vitae. Id quisque urna sed eget facilisi. Nulla pretium odio dictumst
    //       aliquet.
    //     </p>
    //   </div>
    //   <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-[30px] gap-5">
    //     {/* single card */}
    //     <div className="card">
    //       <img src={mobile_app} alt="mobile_app" />
    //       <h4 className="text-[28px] bg-[#020F40] py-[10px] px-[34px] text-center text-white">
    //         Mobile app
    //       </h4>
    //     </div>
    //     {/* single card */}
    //     <div className="card">
    //       <img src={ui_ux} alt="ui_ux" />
    //       <h4 className="text-[28px] bg-[#020F40] py-[10px] px-[34px] text-center text-white">
    //         UI/UX design
    //       </h4>
    //     </div>
    //     {/* single card */}
    //     <div className="card">
    //       <img src={software} alt="software" />
    //       <h4 className="text-[28px] bg-[#020F40] py-[10px] px-[34px] text-center text-white">
    //         software Development
    //       </h4>
    //     </div>
    //     {/* single card */}
    //     <div className="card">
    //       <img src={dm} alt="dm" />
    //       <h4 className="text-[28px] bg-[#020F40] py-[10px] px-[34px] text-center text-white">
    //         digital marketing
    //       </h4>
    //     </div>
    //     {/* single card */}
    //     <div className="card">
    //       <img src={web} alt="web" />
    //       <h4 className="text-[28px] bg-[#020F40] py-[10px] px-[34px] text-center text-white">
    //         Web Development
    //       </h4>
    //     </div>
    //     {/* single card */}
    //     <div className="card">
    //       <img src={quality} alt="quality" />
    //       <h4 className="text-[28px] bg-[#020F40] py-[10px] px-[34px] text-center text-white">
    //         Software Quality Assurance
    //       </h4>
    //     </div>
    //   </div>
    // </section>
    <Section id="products">
      <h1 className="section-title mb-6 text-center">
        <span>Our</span> Services
      </h1>
      <p className="section-sub-title mb-12 text-center max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        necessitatibus amet voluptatum aliquid saepe aut, iste nisi molestias
        quidem quisquam?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <div key={index} className="card">
            <img src={service.img} alt={service.title} />
            <h4 className="text-[28px] bg-[#020F40] py-[10px] px-[34px] text-center text-white">
              {service.title}
            </h4>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
