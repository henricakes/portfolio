import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { navItems } from "../constants/index.jsx";
import henriCakes from "../assets/henricakes.svg";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const NavBar = () => {
  const [mobileBurger, setMobileBurger] = useState(false);
  const toggleBurger = () => {
    setMobileBurger(!mobileBurger);
  };

  return (
    <nav className="fixed flex items-center py-0 backdrop-blur-sm w-full h-16 border-b-neutral-100 z-10">
      <div className="flex flex-grow">
        <motion.div
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
          className="absolute"
        >
          <motion.img
            className="h-20 w-10 pl-5 ml-20"
            src={henriCakes}
            alt="Cake"
            dragSnapToOrigin
            drag
          />
        </motion.div>

        <h1 className="text-xl justify-start font-semibold text-white m-10">
          Henricakes
        </h1>
        {/* Nav Options */}
        <div className="flex justify-end flex-grow mr-10">
          <ul className="hidden lg:flex space-x-12 items-center">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className="text-white hover:text-cyan-400 transition duration-200 cursor-pointer"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="lg:hidden md:flex flex-col justify-end p-10">
        <button onClick={toggleBurger}>
          {mobileBurger ? <RxCross2 /> : <IoMenu />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
