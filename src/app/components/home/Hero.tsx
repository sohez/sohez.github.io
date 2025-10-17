import { InstagramIcon, MailIcon, SendIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="w-full mt-35 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-2 justify-center items-center">
        <div className="group relative w-32 sm:w-40 md:w-48 lg:w-56 aspect-square overflow-hidden rounded-full  transition-all duration-300">
          <Image
            src="https://avatars.githubusercontent.com/u/57430072?v=4"
            alt="Sohel Sayyed - profile photo"
            fill
            className="grayscale-100 hover:grayscale-0 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-8 max-w-3xl">
          <div>
            <span>Hi, I&apos;m</span>
            <h1 className="font-display tracking-wide text-5xl font-bold text-gray-50">
              Sohel Sayyed
            </h1>
          </div>

          <div>
            <ul className="flex gap-3 justify-center items-center">
              <li className="hover:text-gray-50 hover:border-b-[0.5px] p-1">
                <InstagramIcon />
              </li>
              <li className="hover:text-gray-50 hover:border-b-[0.5px] p-1">
                <MailIcon />
              </li>
              <li className="hover:text-gray-50 hover:border-b-[0.5px] p-1">
                <SendIcon />
              </li>
            </ul>
          </div>

          <p className="text-lg">
            I&apos;m Sayyed Sohel, a professional with extensive experience in
            <span>crafting user-friendly websites </span>and powerful{" "}
            <span>Android applications</span>. I can help you bring your digital
            ideas to life, whether it&apos;s a sleek and modern website, a
            feature-rich mobile app, or both!
          </p>

          <SkillsSlider />
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
      <div>I am</div>
      <div className="slider">
        <div className="slides ">
          <div className="underline decoration-1 decoration-blue-500">Android Dev</div>
          <div className="underline decoration-1 decoration-red-500">Fullstack Dev</div>
        </div>
      </div>
    </div>
  );
};
  