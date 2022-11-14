import React from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-40 bg-lightBlack pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-2xl text-pink mt-5">
            IBTEHAL YAHIA
          </p>
          <p className="font-playfair text-md text-pink"> ©2022 Hal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
