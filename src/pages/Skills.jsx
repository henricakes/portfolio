import SkillContainer from "../components/skillContainer";
const Skills = () => {
  return (
    <div className="flex flex-col items-center w-90 m-10  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-md">
      {/* Contents */}
      <div className="mt-10 font-bold text-3xl text-center sm:text-md text-wrap">
        <p>Skills</p>
      </div>
      <div className="flex flex-row mt-5">
        <SkillContainer />
        <SkillContainer />
      </div>
      <div className=" flex flex-row mt-5">
        <SkillContainer />
        <SkillContainer />
      </div>
      <div className=" flex flex-row mt-5">
        <SkillContainer />
        <SkillContainer />
      </div>
      <div className=" flex flex-row mt-5">
        <SkillContainer />
        <SkillContainer />
      </div>
    </div>
  );
};

export default Skills;
