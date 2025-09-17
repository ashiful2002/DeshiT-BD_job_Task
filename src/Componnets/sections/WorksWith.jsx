import React from "react";
import esbo from "../../assets/ESBO-logo.jpg";
import social from "../../assets/SD-Logo.jpg";
import tab from "../../assets/tab.jpg";
import retina from "../../assets/retina.jpg";
import r12 from "../../assets/r12.jpg";
import last from "../../assets/last.jpg";
import Section from "../Section/Section";

const clients = [
  { id: 1, img: social },
  { id: 2, img: esbo },
  { id: 3, img: tab },
  { id: 4, img: retina },
  { id: 5, img: r12 },
  { id: 6, img: last },
];

const WorksWith = () => {
  return (
    <Section>
      <div className="flex items-center flex-col justify-center mx-auto text-center my-16">
        {/* card */}
        <div className=" max-w-[500px] review-shadow rounded-md p-5">
          <img
            src={esbo}
            className="mx-auto"
            width={160}
            height={62}
            alt="esbo logo"
          />
          <p className="text-justify">
            DeshIT-BD’s professionalism and expertise shone throughout the app
            development process, delivering a high-quality app within the aged
            time frame and budget. Their exceptional post-launch support ensures
            a seamless user experience.
          </p>
          <p className="text-[var(--text-color)] mt-6 mb-1">ECO</p>
          <p className="text-gray-700">ESBO ltd</p>
        </div>
        <div className="mt-22">
          <p className="text-[var(--primary-color)]">Clients</p>
          <h4 className="text-[var(--primary-color)] uppercase text-2xl tracking-wider">
            who we works with
          </h4>
          <div className="flex items-center justify-between gap-10 flex-wrap">
            {clients.map((item) => (
              <img width={100} key={item.id} src={item.img} alt={item.id} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WorksWith;
