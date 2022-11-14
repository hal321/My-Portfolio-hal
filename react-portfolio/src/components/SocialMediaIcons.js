import React from "react";
import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start gap-7">
      <a
        className="hover:opacity-50 transition duration:500"
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin size={30} />
      </a>
      <a
        className="hover:opacity-50 transition duration:500"
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noreferrer"
      >
        <BsFacebook size={30} />
      </a>
      <a
        className="hover:opacity-50 transition duration:500"
        href="https://github.com/hal321"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub size={30} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
