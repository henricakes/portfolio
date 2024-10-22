const About = () => {
  return (
    /* About Container */
    <div className="flex justify-center w-90 m-10 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-md">
      {/* Contents */}
      <div className="mt-10 font-bold text-3xl text-center sm:text-md text-wrap">
        About
        <div className="md:text-lg text-sm italic">
          Let me introduce myself.. &nbsp;and also a little story of mine
          &nbsp;*winkwink*
        </div>
        <div className="w-70 m-10">
          <p className="text-justify md:text-lg text-sm">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello there!&nbsp;My name is John
            Henry.&nbsp;I recently graduated at Eulogio "Amang" Rodriguez
            Institute of Science and Technology - Cavite Campus, with the degree
            in Bachelor of Science in Computer Science. During my time as a
            student on this wonderful institution, I was a class mayor (or class
            president as we knew it) in our class for 4 years.&nbsp;Well, if
            you're curious why there's no elections happened every year in our
            section.... I really don't know either. But regardless, I enjoyed
            governing our section because of everyone's cooperation. While I may
            not have that much experience and confidence regarding to this
            industry, I can assure you that I wil do my best in order to
            accomplish the tasks that is given to me.
          </p>
        </div>
      </div>
    </div>

    /* &nbsp; use this for spaces :>>>> very demureeee */
  );
};

export default About;
