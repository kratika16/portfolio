import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  FiUser,
  FiBriefcase,
  FiBook,
  FiAward,
  FiMail,
} from "react-icons/fi";
import { GiSkills } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";

import MyPicture from "../assets/ProfVert.jpeg";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const ModalContent = ({ closeModal }) => (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-75"></div> {/* Backdrop */}
      <div className="bg-gray-300 p-8 rounded-lg shadow-lg relative z-10 w-80">
        <img
          src={MyPicture}
          className="rounded-full border-2 border-gray-300 h-36 w-36 mb-4 mt-4 mx-auto"
          alt="Profile"
        />
        <h2 className="text-xl font-bold text-center text-gray-800">
          Kratika Yadav
        </h2>
        <p className="text-sm text-gray-800 text-center">
          Frontend Software Engineer
        </p>
        <div className="flex justify-center">
          <button
            onClick={closeModal}
            className="mt-4 bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <nav className="bg-gray-900 text-white flex flex-col justify-start">
      {/* <h1 className="text-3xl font-bold mb-8">Kratika Yadav</h1> */}
      <img
        src={MyPicture}
        className="rounded-full border-2 border-gray-300 xxs:h-8 xs:h-20 sm:h-32 lg:h-36 w-36 mb-4 mt-4 cursor-pointer"
        onClick={openModal}
        alt="profile"
      />
      <div className="flex justify-center">
        <ul className="space-y-4">
          <li>
            <Link
              to="about"
              title="About"
              smooth={true}
              duration={500}
              className="cursor-pointer flex items-center space-x-2"
            >
              <FiUser className="text-xl" />
              <span className="hidden md:inline">About</span>{" "}
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              title="Work Experience"
              smooth={true}
              duration={500}
              className="cursor-pointer flex items-center space-x-2"
            >
              <FiBriefcase className="text-xl" />
              <span className="hidden md:inline">Experience</span>{" "}
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              title="Projects"
              smooth={true}
              duration={500}
              className="cursor-pointer flex items-center space-x-2"
            >
              <GoProjectSymlink className="text-xl" />
              <span className="hidden md:inline">Projects</span>{" "}
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              title="Skills"
              smooth={true}
              duration={500}
              className="cursor-pointer flex items-center space-x-2"
            >
              <GiSkills className="text-xl" />
              <span className="hidden md:inline">Skills</span>{" "}
            </Link>
          </li>
          <li>
            <Link
              to="education"
              title="Education"
              smooth={true}
              duration={500}
              className="cursor-pointer flex items-center space-x-2"
            >
              <FiBook className="text-xl" />
              <span className="hidden md:inline">Education</span>{" "}
            </Link>
          </li>
          <li>
            <Link
              to="achievements"
              title="Achievements"
              smooth={true}
              duration={500}
              className="cursor-pointer flex items-center space-x-2"
            >
              <FiAward className="text-xl" />
              <span className="hidden md:inline">Achievements</span>{" "}
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              title="Contact"
              smooth={true}
              duration={500}
              className="cursor-pointer flex items-center space-x-2"
            >
              <FiMail className="text-xl" />
              <span className="hidden md:inline" >Contact</span>{" "}
            </Link>
          </li>
        </ul>
      </div>
      {showModal && <ModalContent closeModal={closeModal} />}
    </nav>
  );
};

export default Navbar;
