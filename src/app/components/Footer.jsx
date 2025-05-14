import React from "react";
import Link from "next/link";
import Image from "next/image";
import gmailIcon from "../../../public/gmail.svg";
import discordIcon from "../../../public/discord.svg";
import telegramIcon from "../../../public/telegram.svg";
import githubIcon from "../../../public/github.svg";

const Footer = () => {
  return (
    <footer
      className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white"
      id="footer"
    >
      <div className="container p-12 flex items-center justify-between text-gray-400">
        <p>
          © Developer Portfolio by{" "}
          <span className="text-primary-500">Markus Niemela</span>
        </p>
        <div className="flex gap-12">
          <Link href="https://github.com/clean128">
            <Image src={githubIcon} alt="github Icon" className="w-10 h-10" />
          </Link>
          <Link href="https://t.me/clean1280">
            <Image
              src={telegramIcon}
              alt="telegram Icon"
              className="w-10 h-10"
            />
          </Link>
          <Link href="https://discord.com/invite/clean128">
            <Image src={discordIcon} alt="discord Icon" className="w-10 h-10" />
          </Link>
        </div>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
