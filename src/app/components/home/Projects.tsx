import React from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";

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
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    tags: ["Kotlin", "NodeJS", "Room-DB", "Ktor Client", "SSE"],
    github: null,
    demo: "https://play.google.com/store/apps/details?id=com.sohezsoft.mcodo&hl=en_IN",
  },
  {
    title: "HRMS System",
    description:
      "Analytics dashboard for social media management with data visualization and automated reporting.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tags: ["React", "Express", "MongoDB"],
    github: null,
    demo: "https://sohez.github.io/Marks-Percentage-Calculator/",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates and team collaboration features.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    tags: ["Vue.js", "Firebase", "Vuex", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "Weather Forecast App",
    description:
      "Beautiful weather application with location-based forecasts and interactive maps.",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    tags: ["React", "Weather API", "Leaflet", "CSS3"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio CMS",
    description:
      "Custom content management system for creative professionals with drag-and-drop interface.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
    tags: ["Next.js", "Sanity", "GraphQL", "Framer"],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section className="w-full mt-25 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-2 justify-center items-center">
        <SectionHeader
          title="Projects"
          subtitle="Featured"
          description="Technologies I use to craft digital experiences"
        />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 auto-rows-fr items-stretch">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
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
