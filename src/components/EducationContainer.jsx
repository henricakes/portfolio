import PropTypes from "prop-types";

const EducationContainer = ({
  level,
  degree,
  institution,
  year,
  description,
}) => {
  return (
    <div className="flex flex-col items-center justify-start w-64 h-60 mx-2 my-4 sm:mx-4 sm:my-6">
      <div className="relative group w-full h-full flex flex-col items-center justify-start">
        <div className="absolute -inset-1 bg-cyan-600 rounded-lg blur group-hover:bg-cyan-300 transition" />
        <div className="relative p-4 rounded-lg flex flex-col items-center bg-black group-hover:bg-gradient-to-b from-gray-900 to-gray-600 transition w-full h-full">
          {/* Fixed position for level */}
          <p className="text-xs sm:text-sm text-center font-bold mb-2">
            {level}
          </p>
          {/* Remaining props stack naturally */}
          {degree && (
            <p className="text-xs sm:text-sm pt-2 text-center">{degree}</p>
          )}
          <p className="text-xs sm:text-sm pt-2 text-center font-light">
            {institution}
          </p>
          <p className="text-xs sm:text-sm pt-2 text-center font-light">
            {year}
          </p>
          {description && (
            <p className="text-xs sm:text-sm pt-2 text-center">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

EducationContainer.propTypes = {
  level: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  description: PropTypes.string,
};

export default EducationContainer;
