"use client";
import { Code2Icon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { GoMoveToTop } from "react-icons/go";
import { MdMailOutline } from "react-icons/md";

const socialLinks = [
  {
    name: "Instagram",
    icon: <BsInstagram size={20} />,
    url: "https://www.instagram.com/sohel_sayyed.dev",
  },
  {
    name: "WhatsApp",
    icon: <BsWhatsapp size={20} />,
    url: "https://wa.me/+917887614788",
  },
  {
    name: "Email",
    icon: <MdMailOutline size={24} />,
    url: "mailto:techsohez@gmail.com",
  },
  {
    name: "Linkedin",
    icon: <FiLinkedin size={24} />,
    url: "https://www.linkedin.com/in/sohez/",
  },
];

const handleMoveTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer className="w-full mt-35 bg-[#0D1117] p-4 shadow-[0_-10px_30px_rgba(13,17,23,0.45)] pb-14 pt-14">
      <div className="max-w-7xl mx-auto flex flex-col gap-3 justify-center items-center px-6 mb-3">
        <button
          onClick={handleMoveTop}
          title="go to top"
          type="button"
          className="flex items-center gap-2 hover:scale-105 text-gray-500 hover:text-gray-200 transition-all duration-200 bg-gradient-to-b from-transparent to-transparent hover:from-transparent hover:to-gray-900 hover:border-b-[0.2] border-gray-500 px-2 py-1 rounded-lg"
        >
          <GoMoveToTop size={24} />
        </button>
        <div className="mt-4 w-full flex flex-col-reverse md:flex-row gap-8 justify-between">
          <div className="flex gap-1 flex-col items-center md:items-start justify-center">
            <h3 className="text-xl font-medium font-display flex gap-1">
              <Code2Icon /> SAYYED SOHEL
            </h3>
            <p className="text-gray-500 text-center">
              Sayyed Sohel © {new Date().getFullYear()} Built with ❤️ by Sohel
              Sayyed
            </p>
          </div>

          <div>
            <ul className="flex gap-2 items-center md:items-start justify-center">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    title={link.name}
                    href={link.url}
                    className="flex items-center justify-center gap-2  text-gray-500 hover:text-gray-200 transition-all duration-200 bg-gradient-to-b from-transparent to-transparent hover:from-transparent hover:to-gray-900 hover:border-b-[0.2] border-gray-500 px-3 py-2 rounded-lg"
                  >
                    {link.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
