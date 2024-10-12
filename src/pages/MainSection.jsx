import React from "react";
import mukhaMe from "../assets/mukha.jpg";

const MainSection = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center mt-10 mb-10">
      <div>
        <div className="flex items-center justify-center">
          <img className="w-70 h-72 rounded-full" src={mukhaMe} alt="Tao" />
        </div>
        <h1 className="text-3xl font-semibold text-center mt-10">
          John Henry Angas
        </h1>
        <p className="text-lg text-center">Tao lang. Mayabang</p>
      </div>
    </div>
  );
};

export default MainSection;
