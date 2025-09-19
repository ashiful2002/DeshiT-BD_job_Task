import React from "react";

const Section = ({ id, subtitle, children }) => {
  return (
    <section id={id} className="scroll-mt-[100px] lg:container mx-auto px-10 ">
      <div>
        {subtitle && (
          <p className="section-sub-title w-4/6 mx-auto">{subtitle}</p>
        )}
      </div>
      <div className="mt-[30px]">{children}</div>
    </section>
  );
};

export default Section;
