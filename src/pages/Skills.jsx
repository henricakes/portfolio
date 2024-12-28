import SkillContainer from "../components/skillContainer";
import HTML from "../assets/HTML.svg";
import CSS from "../assets/CSS.svg";
import JavaScript from "../assets/JAVASCRIPT.svg";
import React from "../assets/REACT.svg";
import TailwindCSS from "../assets/TAILWIND.svg";
import Expo from "../assets/EXPO.svg";
import Figma from "../assets/FIGMA.svg";
import Git from "../assets/GIT.svg";
import GitHub from "../assets/GITHUB.svg";
import Vite from "../assets/VITE.svg";

const Skills = () => {
  return (
    <div className="flex flex-col items-center w-90 m-10 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-md md:p-10">
      {/* Contents */}
      <div className="mt-10 lg:mt-0 font-bold text-3xl text-center sm:text-md text-wrap">
        Skills
        <div className="md:text-lg text-sm italic">
          Here’s a look at my technical stack &nbsp;and the tools I use
          &nbsp;*techie vibes*
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center mt-5">
        <SkillContainer skillImage={HTML} skillName={"HTML"} />
        <SkillContainer skillImage={CSS} skillName={"CSS"} />
        <SkillContainer skillImage={JavaScript} skillName={"JS"} />
        <SkillContainer skillImage={React} skillName={"React"} />
        <SkillContainer skillImage={TailwindCSS} skillName={"TailwindCSS"} />
        <SkillContainer skillImage={Expo} skillName={"Expo"} />
        <SkillContainer skillImage={Figma} skillName={"Figma"} />
        <SkillContainer skillImage={Git} skillName={"Git"} />
        <SkillContainer skillImage={GitHub} skillName={"GitHub"} />
        <SkillContainer skillImage={Vite} skillName={"Vite"} />
      </div>
    </div>
  );
};

export default Skills;
