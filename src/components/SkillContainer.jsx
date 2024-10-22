import React from "react";

const SkillContainer = ({ skillImage, altText, skillName }) => {
  return (
    <div className="flex flex-col items-center mx-2 my-4 sm:mx-4 sm:my-6 lg:flex-row">
      <div className="relative group">
        <div className="absolute -inset-2 bg-cyan-600 rounded-lg blur group-hover:bg-cyan-300 transition" />
        <div className="relative p-4 rounded-lg flex flex-col items-center bg-black group-hover:bg-gradient-to-b from-gray-900 to-gray-600 transition">
          <img
            className="w-16 h-16 sm:w-24 sm:h-24"
            src={skillImage}
            alt={altText}
          />
          <p className="text-xs sm:text-sm pt-2 text-center">{skillName}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillContainer;
