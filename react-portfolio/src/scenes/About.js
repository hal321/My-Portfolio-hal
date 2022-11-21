import React from "react";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Resume from "../assets/Resume.pdf";
const About = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section
      id="about"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10 "
    >
      <div className="flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img
              src="assets/about.png"
              alt="profile-img"
              className="hover:shadow hover:shadow-rose-300	  transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] "
            />
          </motion.div>
        ) : (
          <img
            src="assets/about.png"
            alt="profile-img"
            className="hover:shadow hover:shadow-rose-300 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] "
          />
        )}
      </div>
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-5xl font-playfair z-10 text-center md:text-start">
            About Me:
          </p>
          <p className="text-l font-playfair z-10 text-center md:text-start mt-5">
            "BUT FIRST COFFEE ☕️"
          </p>
          <p className="mt-7 mb-7 text-lg text-center md:text-start">
            With a cup of coffee, I can do anything. <br />
            Here is a little bit about me: my name is Ibtehal, Hal for short,and
            I live in Kuala-Lumpur, Malaysia. I am very passionate about coding
            and the tech field. Besides coding I also love to swim,exersise,eat
            and go ice skating. <br />I did my Bachelor's degree in Information
            System, and from there I know I can perform well. I've just finished
            a Software Engineering Immersive bootcamp, and I am doing alot of
            self-taught courses I can say that I have all the basics .Since this
            field keeps evolving, I am always eager to learn more and know more.
          </p>
        </motion.div>
        <motion.dev
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <a
            className="bg-pink text-black py-3 px-7 font-semibold hover:bg-[#fed7aa] transition duration-500 rounded-lg"
            download
            target="_blank"
            href={
              "https://drive.google.com/file/d/1LtS_zcs3xyMvR5ecutQRGZFhD41n5R0c/view"
            }
          >
            Download CV
          </a>
        </motion.dev>

        <motion.dev
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        ></motion.dev>
      </div>
    </section>
  );
};

export default About;
