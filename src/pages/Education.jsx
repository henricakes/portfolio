import EducationContainer from "../components/EducationContainer";

const Education = () => {
  return (
    <div className="flex flex-col items-center w-90 m-10 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-md md:p-10">
      {/* Contents */}
      <div className="mt-10 lg:mt-0 font-bold text-3xl text-center sm:text-md text-wrap">
        Education
        <div className="md:text-lg text-sm italic">
          Here’s a look at my educational attainment.
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-4 mt-5">
          <EducationContainer
            level="College"
            degree="Bachelor of Science, Computer Science"
            institution="Eulogio 'Amang' Rodriguez Institute of Science and Technology - Cavite Campus"
            year="2020 - 2024"
          />
          <EducationContainer
            level="Senior High School"
            degree="General Academic Strand"
            institution="General Mariano Alvarez Technical High School"
            year="2018 - 2020"
          />
          <EducationContainer
            level="Junior High School"
            degree=""
            institution="General Mariano Alvarez Technical High School"
            year="2014 - 2018"
          />
          <EducationContainer
            level="Middle School"
            degree="Elementary School"
            institution="Bulihan Elementary School"
            year="2008 - 2014"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
