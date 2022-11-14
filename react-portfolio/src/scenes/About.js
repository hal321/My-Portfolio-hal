import React from "react";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
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
            src="assets/profile.png"
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
          <p className="mt-10 mb-7 text-lg text-center md:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            architecto ratione quod corrupti id nihil iusto nisi, modi
            distinctio impedit eum nemo cum non minus, quasi voluptatem ut
            obcaecati quaerat. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Porro eum non eveniet consequuntur veritatis
            repellat tenetur modi, saepe qui rerum dolorem sapiente iusto
            suscipit sequi debitis cum praesentium vitae hic.
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
          <AnchorLink
            className="bg-pink text-black py-3 px-7 font-semibold hover:bg-[#fed7aa] transition duration-500 rounded-lg"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Download CV{" "}
          </AnchorLink>
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
