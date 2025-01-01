import React from "react";
import NavBar from "./pages/NavBar";
import MainSection from "./pages/MainSection";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Footer from "./pages/Footer";
const App = () => {
  return (
    <div className="overflow-hidden text-stone-300 antialiased min-h-screen flex flex-col">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
        </div>
      </div>
      {/* NavBar */}
      <div id="MainSection" className="flex h-20 w-full">
        <NavBar />
      </div>
      {/* Main Section / HERO Section tawag nila eh */}
      <div className="flex-1 overflow-auto">
        <MainSection />
      </div>
      {/* About */}
      <div id="About">
        <About />
      </div>
      {/* Skills */}
      <div id="Skills">
        <Skills />
      </div>
      {/* Education */}
      <div id="Education">
        <Education />
      </div>
      {/* Experience */}
      <div id="Experience">
        <Experience />
      </div>
      {/* Footer */}
      <div id="Contact">
        <Footer />
      </div>
    </div>
    /* Happy New Year: This time... */
  );
};

export default App;
