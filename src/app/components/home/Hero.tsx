import Image from "next/image";
import React from "react";
import "./hero.css";
import {
  BsInstagram,
  BsWhatsapp,
} from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";

const socialLinks = [
  {
    name: "Instagram",
    icon: <BsInstagram size={20}/>,
    url: "https://www.instagram.com/sohel_sayyed.dev",
  },
  { name: "Email", icon: <MdMailOutline size={25}/>, url: "mailto:techsohez@gmail.com" },
  {
    name: "WhatsApp",
    icon: <BsWhatsapp size={20}/>,
    url: "https://wa.me/+917887614788",
  },
];

const Hero = () => {
  return (
    <section className="w-full mt-35 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-2 justify-center items-center">
        <div className="group relative w-32 sm:w-40 md:w-48 lg:w-56 aspect-square overflow-hidden rounded-full  transition-all duration-300">
          <Image
            src="/images/hero/sohel-sayyed-image.webp"
            alt="Sohel Sayyed - profile photo"
            fill
            className="grayscale-100 hover:grayscale-0 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-6 gap-8 md:gap-6 max-w-3xl">
          <div className="flex flex-col justify-center items-center text-center md:text-start md:justify-start md:items-start">
            <span>Hi, I&apos;m</span>
            <h1 className="font-display tracking-wide text-5xl font-medium text-gray-50">
              Sohel Sayyed
            </h1>
          </div>

          <SocialLinks />
          <SkillsSlider />

          <p className="text-base tracking-wider text-center md:text-left">
            I&apos;m Sayyed Sohel, a professional with extensive experience in
            <span>crafting user-friendly websites </span>and powerful{" "}
            <span>Android applications</span>. I can help you bring your digital
            ideas to life, whether it&apos;s a sleek and modern website, a
            feature-rich mobile app, or both!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// slider style come from hero.css file.
const SkillsSlider = () => {
  return (
    <div className="flex gap-2 justify-center items-baseline">
      {/* <div>I am</div> */}
      <div className="slider">
        <div className="slides ">
          <div className="underline decoration-1 decoration-blue-500">
            Android Dev
          </div>
          <div className="underline decoration-1 decoration-red-500">
            Fullstack Dev
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div>
      <ul className="flex gap-3 justify-center items-center">
        {socialLinks.map((link) => {
          return (
            <li
              key={link.name}
              className="text-gray-500 hover:text-foreground border-red-500 hover:border-b-[0.5px] p-1"
            >
              <a
                title={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
