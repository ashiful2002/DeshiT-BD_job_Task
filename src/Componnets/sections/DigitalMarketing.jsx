import React from "react";
import Section from "../Section/Section";

import group10 from "../../assets/group 10.jpg";
import group11 from "../../assets/group 11.jpg";
import group12 from "../../assets/group 12.jpg";
import group13 from "../../assets/group 13.jpg";
import group14 from "../../assets/group 14.jpg";
import group15 from "../../assets/group 15.jpg";
import group16 from "../../assets/group 16.jpg";
import group17 from "../../assets/group 17.jpg";
import group18 from "../../assets/group 18.jpg";

const marketingItems = [
  {
    icon: group10,
    title: "Google Marketing",
    desc: "The creation of compelling Google Ads campaigns targeting the users...",
  },
  {
    icon: group11,
    title: "Meta FB Marketing",
    desc: "Leveraging available Facebook tools for advertisement promotions...",
  },
  {
    icon: group12,
    title: "LinkedIn Marketing",
    desc: "Use LinkedIn in developing professional connections and leads...",
  },
  {
    icon: group13,
    title: "Video Editing",
    desc: "Converting short scenes into engaging videos with transitions...",
  },
  {
    icon: group14,
    title: "Content Development",
    desc: "Creating and grouping powerful content strategies for your audience...",
  },
  {
    icon: group15,
    title: "TikTok Marketing",
    desc: "Engaging Gen Z and millennials on the virality of TikTok...",
  },
  {
    icon: group16,
    title: "SEO Marketing",
    desc: "Enhancing your website to appear more often on search engines...",
  },
  {
    icon: group17,
    title: "Graphic Design",
    desc: "Producing innovative and creative graphics for your brand...",
  },
  {
    icon: group18,
    title: "Content Writing",
    desc: "Researching and writing relevant, useful, and shareable articles...",
  },
];

const DigitalMarketing = () => {
  return (
    <Section id="company">
      <h1 className="section-title mb-6 text-center">
        <span>Digital</span> Marketing
      </h1>
      <p className="section-sub-title mb-12 text-center max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        necessitatibus amet voluptatum aliquid saepe aut, iste nisi molestias
        quidem quisquam?
      </p>

      <div className="relative flex items-center justify-center h-[900px]">
        {/* Center Circle */}
        <div className="w-52 h-52 flex items-center justify-center rounded-full bg-blue-100 shadow-lg text-center font-bold text-lg dark:text-[var(--text-color)]">
          Digital <br /> Marketing
        </div>

        {/* Surrounding Items in Circle */}
        {marketingItems.map((item, index) => {
          const angle = (index / marketingItems.length) * 360; // Even distribution
          return (
            <div
              key={index}
              className="absolute w-64 text-center"
              style={{
                transform: `rotate(${angle}deg) translate(350px) rotate(-${angle}deg)`,
              }}
            >
              <div className="flex flex-col items-center gap-2 p-4  rounded-xl shadow-m d bg- ">
                <div className="p-3 rounded-full shadow-md border bg-gray-50">
                  <img src={item.icon} alt={item.title} className="w-10 h-10" />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                {/* <p className="text-sm text-gray-600">{item.desc}</p> */}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default DigitalMarketing;
