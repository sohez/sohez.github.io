"use client";
import { Code2Icon, FolderClosedIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-center fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-950/95 to-transparent">
      <NavBar />
    </header>
  );
};

export default Header;

const NavBar = () => {
  const handleProjectSection = () => {
    const el = document.getElementById("projects");
    if (el) {
      window.scrollTo({
        top: el.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="mx-2 md:mx-0 border-[0.2] flex-1 grow border-gray-700 max-w-4xl text-gray-400 backdrop-blur-3xl bg-[#0D1117]/75 mt-6 p-4 px-6 md:px-12 rounded-2xl flex justify-between items-center">
      <Link
        href="/"
        className="font-medium font-display text-gray-50 flex gap-2 justify-center items-center"
      >
        <Code2Icon />
        SOHEL SAYYED
      </Link>
      <nav>
        <ul className="flex gap-2 text-sm font-medium">
          <li>
            <button
              type="button"
              title="Projects"
              onClick={handleProjectSection}
              className="flex items-center gap-2 hover:text-gray-200 transition-all duration-200 bg-gradient-to-b from-transparent to-transparent hover:from-transparent hover:to-gray-900 hover:border-b-[0.2] border-gray-500 px-3 py-2 rounded-lg"
            >
              <FolderClosedIcon size={18} /> Projects
            </button>
          </li>
          <li className="py-1">
            <span className="w-0.5 h-full bg-red-500 inline-block"></span>
          </li>
          <li>
            <Link
              target="_blank"
              title="Github"
              href="https://github.com/sohez"
              className="flex items-center gap-2 hover:text-gray-200 transition-all duration-200 bg-gradient-to-b from-transparent to-transparent hover:from-transparent hover:to-gray-900 hover:border-b-[0.2] border-gray-500 px-3 py-2 rounded-lg"
            >
              <BsGithub size={18} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
