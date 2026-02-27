import React from "react";

const Heading = ({ title, description }) => {
  return (
    <div className="bg-[#9538E2] text-white flex flex-col items-center mt-3 py-8 space-y-5">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="w-2/4 text-center">{description}</p>
    </div>
  );
};

export default Heading;
