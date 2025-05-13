"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import aboutImage from "../../../public/images/about-image.png";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-3 gap-3">
        <ul className="list-disc pl-2">
          <li>React</li>
          <li>Next.js</li>
          <li>Redux</li>
          <li>Context</li>
          <li>Angular</li>
          <li>NgRx</li>
          <li>RxJS</li>
          <li>React Native</li>
          <li>Flutter</li>
          <li>Three.js</li>
        </ul>
        <ul className="list-disc pl-2">
          <li>Bootstrap</li>
          <li>Tailwind</li>
          <li>MUI</li>
          <li>REST API</li>
          <li>GraphQL</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
        </ul>
        <ul className="list-disc pl-2">
          <li>Node.js</li>
          <li>Express</li>
          <li>Nest</li>
          <li>.NET</li>
          <li>PHP</li>
          <li>AWS</li>
          <li>Telegram Bot</li>
          <li>Discord Bot</li>
          <li>AI Chat Bot</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>The Academy of Athens</li>
        <li>Athens University of Economics and Business (AUEB)</li>
      </ul>
    ),
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={aboutImage} width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a full-stack developer with expertise in React, Next.js, Angular, Node.js, .NET, and other technologies, specializing in building scalable web and mobile applications. <br />
          With strong backend skills in Express, NestJS, and database management (MySQL, MongoDB, PostgreSQL), I also excel in AI Chat bots, Telegram/Discord bots, and AWS cloud solutions, delivering secure and efficient digital solutions.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={(e) => {
                e.stopPropagation();
                handleTabChange("skills");
              }}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
