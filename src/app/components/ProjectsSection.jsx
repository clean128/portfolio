"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Flamingo DeFi Platform",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    previewUrl: "https://flamingo.finance/",
  },
  {
    id: 2,
    title: "Beretta Firearms Configurator",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    previewUrl: "https://configurator.beretta.com/",
  },
  {
    id: 3,
    title: "Kabcash Mobile App",
    image: "/images/projects/3.png",
    tag: ["All", "Mobile"],
    previewUrl: "https://apps.apple.com/us/app/kabcash/id1608437713",
  },
  {
    id: 4,
    title: "Payments App For Trucking Industry",
    image: "/images/projects/4.png",
    tag: ["All", "Web", "Mobile"],
    previewUrl: "https://haulpay.io/",
  },
  {
    id: 5,
    title: "House Design Software",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    previewUrl: "https://planner5d.com",
  },
  {
    id: 6,
    title: "E-commerce Website",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.uprinting.com",
  },
  {
    id: 7,
    title: "Smarters IPTV",
    image: "/images/projects/7.png",
    tag: ["All", "Web", "Mobile"],
    previewUrl: "https://apps.microsoft.com/detail/9p0xnf0jhwbv?hl=en-US&gl=US",
  },
  {
    id: 8,
    title: "MillySat Landing Page",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    previewUrl: "https://milly-sat.vercel.app/",
  },
  {
    id: 9,
    title: "Anemo Community",
    image: "/images/projects/9.png",
    tag: ["All", "Web"],
    previewUrl: "https://clean128-story-beta.vercel.app/",
  },
  {
    id: 10,
    title: "Business Card Generator",
    image: "/images/projects/10.png",
    tag: ["All", "Web"],
    previewUrl: "https://business-card-generator-iota.vercel.app/",
  },
  {
    id: 11,
    title: "Nordastro Landing Page",
    image: "/images/projects/11.png",
    tag: ["All", "Web"],
    previewUrl: "https://nordastro.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
