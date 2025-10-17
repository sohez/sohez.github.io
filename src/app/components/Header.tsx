"use client";
import {
  Code2Icon,
  FolderClosedIcon,
  GithubIcon,
  HomeIcon,
  InstagramIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-950/95 to-transparent">
      <NavBar />
    </header>
  );
};

export default Header;

const NavBar = () => {
  return (
    <div className="border-[0.2] border-gray-700 max-w-4xl mx-auto text-gray-400 backdrop-blur-3xl bg-[#0D1117]/75 mt-6 p-3 px-12 rounded-2xl flex justify-between items-center">
      <a href="" className="font-medium font-display text-gray-50 flex gap-2">
        <Code2Icon/>
        SOHEL SAYYED
      </a>
      <nav>
        <ul className="flex gap-2 text-sm font-medium">
          <li>
            <Link
              href="/"
              className="flex items-center gap-2 hover:text-gray-200 transition-all duration-200 bg-gradient-to-b from-transparent to-transparent hover:from-transparent hover:to-gray-900 hover:border-b-[0.2] border-gray-500 px-3 py-2 rounded-lg"
            >
              <HomeIcon size={18} /> Home
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center gap-2 hover:text-gray-200 transition-all duration-200 bg-gradient-to-b from-transparent to-transparent hover:from-transparent hover:to-gray-900 hover:border-b-[0.2] border-gray-500 px-3 py-2 rounded-lg"
            >
              <FolderClosedIcon size={18} /> Projects
            </Link>
          </li>
          <li className="py-1">
            <span className="w-0.5 h-full bg-red-500 inline-block"></span>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center gap-2 hover:text-gray-200 transition-all duration-200 bg-gradient-to-b from-transparent to-transparent hover:from-transparent hover:to-gray-900 hover:border-b-[0.2] border-gray-500 px-3 py-2 rounded-lg"
            >
              <InstagramIcon size={18} />
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center gap-2 hover:text-gray-200 transition-all duration-200 bg-gradient-to-b from-transparent to-transparent hover:from-transparent hover:to-gray-900 hover:border-b-[0.2] border-gray-500 px-3 py-2 rounded-lg"
            >
              <GithubIcon size={18} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
