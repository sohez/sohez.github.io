import React from "react";
import { IconType } from "react-icons";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { RiAndroidLine } from "react-icons/ri";
import { TbBrandKotlin } from "react-icons/tb";
import { SiJetpackcompose } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
import { DiRedis } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { SiFirebase } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiVercelLine } from "react-icons/ri";
import { TbBrandCloudflare } from "react-icons/tb";

export interface SkillItem {
  name: string;
  logo: IconType; // URL or /public path
}

export interface SkillGroup {
  title: string;
  skills: SkillItem[];
}

export const skillsData: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", logo: FaReact },
      { name: "Next.js", logo: TbBrandNextjs },
      { name: "TypeScript", logo: TbBrandTypescript },
      { name: "TailwindCSS", logo: RiTailwindCssLine },
      { name: "Javascript", logo: TbBrandJavascript },
      { name: "Git", logo: FaGitAlt },
      { name: "Github", logo: FaGithub },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: FaNodeJs },
      { name: "Express", logo: SiExpress },
      { name: "PostgreSQL", logo: SiPostgresql },
      { name: "Mongodb", logo: TbBrandMongodb },
      { name: "Redis", logo: DiRedis },
      { name: "Firebase", logo: SiFirebase },
      { name: "Vercel", logo: RiVercelLine },
      { name: "Cloudflare", logo: TbBrandCloudflare },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "Android", logo: RiAndroidLine },
      { name: "Kotlin", logo: TbBrandKotlin },
      { name: "Jetpack Compose", logo: SiJetpackcompose },
    ],
  },
];

const Skills = () => {
  return (
    <section className="w-full mt-25 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-2 justify-center items-center">
        <div className="text-center flex flex-col justify-center items-center">
          <span className="underline decoration-1 decoration-red-500">
            Tech Stack
          </span>
          <h2 className="font-display tracking-wide text-4xl font-bold text-gray-50">
            Technologies
          </h2>
          <p className="text-gray-500">
            Technologies I use to craft digital experiences
          </p>
        </div>
        <div className="max-w-4xl">
          <div className="mt-6 flex flex-col md:flex-row  w-full gap-4 border border-gray-700 text-gray-300 backdrop-blur-3xl bg-[#161B22]/70 p-8 rounded-2xl">
            {skillsData.map((skill) => (
              <SkillsCard key={skill.title} group={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

const SkillsCard = ({ group }: { group: SkillGroup }) => {
  return (
    <div key={group.title}>
      <h2 className="font-medium text-white pb-2 mb-4">{group.title}</h2>

      <div className="flex flex-wrap gap-6 justify-start items-center">
        {group.skills.map((skill) => (
          <div
            key={skill.name}
            className="text-gray-400 hover:text-foreground hover:decoration-1 hover:underline decoration-red-500 flex items-center gap-2 border border-gray-700 bg-[#0D1117] px-4 py-2 rounded-md hover:scale-105 hover:rotate-3 transition-transform"
          >
            <skill.logo />
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
