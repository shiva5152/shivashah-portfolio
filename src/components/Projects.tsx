"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/project-card";

const Projects = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-25%"]);

  return (
    <div id="projects" className="max-w-6xl mx-auto">
      <div className=" mx-auto py-20 max-md:py-10 px-4">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          My Recent Projects
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-lg text-justify">
          The most important single aspect of software development is to be
          clear about what you are trying to build.
          <span>
            <p className="text-zinc-600 text-sm mt-2">
              ~ Bjarne Stroustrup
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
              </svg>
            </p>
          </span>
        </p>
      </div>
      <div
        ref={ref}
        className="relative w-full h-[110vh] max-md:h-auto flex justify-center items-center "
      >
        <div className=" flex h-screen max-md:h-auto items-center overflow-hidden max-md:overflow-visible">
          <motion.div
            style={{ x }}
            className=" hidden md:flex scroll-smooth  gap-4 max-md:flex-col"
          >
            <ProjectCard />
          </motion.div>
          <div className="flex flex-col gap-4 md:hidden">
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = () => {
  const projects = [
    {
      title: "Dalle-clone",
      description: "Text-to-image generating web app using AI.",
      stack: ["React", "Tailwind", "Nodejs", "Azure OpenAI", "MongoDB"],
      image: "/metageeks-work/dalle-clone.png",
      link: "https://dall-e20-shiva5152s-projects.vercel.app/",
      github: "https://github.com/shiva5152/dall-e",
    },
    {
      title: "TubeTalk",
      description:
        "An AI-powered chat application designed to enhance YouTube learning experiences for students. Facilitatedinsightful conversations based on video content, enabling deeper discussions, instant clarifications, andsmarter engagement with educational videos.",
      stack: [
        "Nextjs",
        "Tailwind",
        "Clerk Auth",
        "Redux",
        "Azure OpenAI",
        "MongoDB",
      ],
      image: "/metageeks-work/tubetalk.png",
      link: "https://www.tubetalk.xyz",
      github: "https://github.com/shiva5152/yt-chat-gpt",
    },
    {
      title: "social.io",
      description:
        "A social media platform that allows users to connect with each other and share their thoughts and ideas.",
      stack: [
        "Nextjs",
        "Tailwind",
        "Supabase",
        "GraphQL",
        "Prisma",
        "Aws",
        "Redis",
      ],
      image: "/metageeks-work/bot-site.png",
      link: "https://social.io",
      github: "https://github.com/shiva5152/social.io",
    },
  ];
  return (
    <>
      {projects.map((project) => (
        <CardContainer key={project.title} className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              <Link href={project.link} target="__blank">
                {project.title}
              </Link>
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {project.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Link href={project.link} target="__blank">
                <Image
                  src={project.image}
                  height="1000"
                  width="1000"
                  className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </Link>
            </CardItem>
            <CardItem className="flex flex-wrap gap-2 mt-20">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  {tech}
                </span>
              ))}
            </CardItem>
            <div className="flex justify-between items-center mt-4">
              <CardItem
                translateZ={20}
                as={Link}
                href={project.link}
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href={project.github}
                target="__blank"
                className="px-4 py-2 rounded-xl bg-cyan-500   text-white text-xs font-bold"
              >
                Github
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </>
  );
};

export default Projects;
