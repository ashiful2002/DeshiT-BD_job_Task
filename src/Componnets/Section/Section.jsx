import React from "react";

const Section = ({ id, title, subtitle, children }) => {
  return (
    <section id={id} className="mt-[80px] lg:container mx-auto px-10">
      <div>
        {/* <h1 className="section-title">
          {title.split(" ").map((word, i) =>
            i === 0 ? <span key={i}>{word} </span> : word
          )}
        </h1> */}
        {subtitle && (
          <p className="section-sub-title w-4/6 mx-auto">{subtitle}</p>
        )}
      </div>
      <div className="mt-[30px]">{children}</div>
    </section>
  );
};

export default Section;
