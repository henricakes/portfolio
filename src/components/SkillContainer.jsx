import React from "react";
import PropTypes from "prop-types";

const SkillContainer = ({ skillImage, altText, skillName }) => {
  return (
    <div className="flex flex-col items-center justify-center w-24 h-32 mx-2 my-4 sm:mx-4 sm:my-6">
      <div className="relative group w-full h-full flex items-center justify-center">
        <div className="absolute -inset-1 bg-cyan-600 rounded-lg blur group-hover:bg-cyan-300 transition" />
        <div className="relative p-4 rounded-lg flex flex-col items-center justify-center bg-black group-hover:bg-gradient-to-b from-gray-900 to-gray-600 transition w-full h-full">
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

// Adding PropTypes for validation
SkillContainer.propTypes = {
  skillImage: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  skillName: PropTypes.string.isRequired,
};

export default SkillContainer;
