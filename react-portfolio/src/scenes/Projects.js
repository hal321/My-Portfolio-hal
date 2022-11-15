import React from "react";
import { BsGithub } from "react-icons/bs";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import project1 from "../assets/TicTacToe.png";
import project2 from "../assets/project02.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project04.png";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subTitle, img, url }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-black`;
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair"> {title}</p>
        <a target="_blank" href={url}>
          <p className="mt-7">{subTitle}</p>
        </a>
      </div>
      <img src={img} alt="project" height={400} width={400} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-pink">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5 ">
            <LineGradient width="w-1/3" />
          </div>
        </div>

        <p className="mt-10 mb-10">
          These are some of the projects I did lately. I've put all the links
          for live view and the source code on my Github.
          <a
            className="hover:opacity-50 transition duration:500 inline-flex"
            href="https://github.com/hal321"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub size={20} />
          </a>
        </p>
      </motion.div>

      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <div className="flex justify-center text-center items-center p-10 bg-pink max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            BEAUTIFUL USER INTERFACES
          </div>

          <Project
            title="project-1"
            subTitle="Tic Tac Toe Game"
            img={project1}
            url={"https://pages.git.generalassemb.ly/hal/TicTacToe/"}
          />

          <Project
            title="project-2"
            subTitle="Skin Care Ecommerce Website"
            img={project2}
            url={"https://rocky-crag-94743.herokuapp.com/"}
          />
          <Project
            title="project-3"
            subTitle="Flowers & Plants online shop"
            img={project3}
          />
          <Project
            title="project-4"
            subTitle="Portfolio Website"
            img={project4}
          />

          <div className="flex justify-center text-center items-center p-10 bg-pink max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE{" "}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
