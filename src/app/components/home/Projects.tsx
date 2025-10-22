'use client';
import React from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string | null;
  demo: string | null;
};

const projects: Project[] = [
  {
    title: "Mcodo :Learn Coding with AI",
    description:
      "Mcodo is an AI-powered learning platform that makes coding interactive, personalized, and fun for everyone—from beginners to pros.",
    image: "/images/projects/mcodo.webp",
    tags: ["Kotlin", "NodeJS", "Room-DB", "Ktor Client", "SSE"],
    github: null,
    demo: "https://play.google.com/store/apps/details?id=com.sohezsoft.mcodo&hl=en_IN",
  },
  {
    title: "HRMS System",
    description:
      "HRMS System – Full Stack Web & Android app for attendance, leave, payroll, and scheduling with secure RBAC and JWT auth.",
    image: "/images/projects/hrms.webp",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Express",
      "PostgreSQL",
      "Jetpack Compose",
      "Drizzel-ORM",
    ],
    github: null,
    demo: null,
  },
  {
    title: "M.C.P : Marks & Percentage Calculator",
    description:
      "powerful and easy-to-use solution for calculating academic performance. Built with HTML, CSS, JavaScript, html2canvas, and jsPDF.",
    image: "/images/projects/mpc.webp",
    tags: ["HTML", "Css", "JS", "html2canvas", "jsPDF"],
    github: "https://github.com/sohez/Marks-Percentage-Calculator",
    demo: "https://sohez.github.io/Marks-Percentage-Calculator/",
  },
];

const Projects = () => {
  return (
    <section className="w-full mt-25 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-2 justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Projects"
            subtitle="Featured"
            description="A selection of my recent work demonstrating my skills and experience."
          />
        </motion.div>

       {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.15,
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
          className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 auto-rows-fr items-stretch"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-6 text-center text-gray-500"
        >
          Delivered 15+ confidential projects across web and mobile platforms.
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="h-full flex flex-col border border-gray-700 text-gray-300 backdrop-blur-3xl bg-[#161B22]/70 rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-[1.02]">
      {/* Image Section */}
      <div className="relative overflow-hidden aspect-video">
        <Image
          fill
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6 sm:p-7 gap-4">
        {/* Title + Description */}
        <div>
          <h3 className="font-display text-xl sm:text-xl font-bold mb-2 group-hover:gradient-text transition-all tracking-tight">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm sm:text-base leading-normal">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-gray-700 bg-[#0D1117] text-xs sm:text-sm px-3 py-1.5 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Push the buttons to the bottom */}
        <div className="mt-auto flex gap-3 pt-4 border-t border-gray-800">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex justify-center items-center py-2.5 rounded-lg border border-gray-700 hover:border-red-500 hover:text-red-500 transition-all"
            >
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex justify-center items-center py-2.5 rounded-lg border border-gray-700 hover:border-red-500 hover:text-red-500 transition-all"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
