import React from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
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

const Project = ({ title, subTitle }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-black`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair"> {title}</p>
        <p className="mt-7">{subTitle}</p>
      </div>
      <img src={`../assets/${projectTitle}.png`} alt="project" />
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo nulla
          debitis possimus quae at harum nihil saepe omnis ullam. Assumenda
          facere sunt numquam quibusdam at cupiditate fugit hic a nulla.
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
          <Project title="profile" subTitle="Tic Tac Toe Game" />
          <Project title="profile" subTitle="Skin Care Ecommerce Website" />
          <Project title="profile" subTitle="Flower online shop" />
          <Project title="profile" subTitle="Portfolio" />
          <div className="flex justify-center text-center items-center p-10 bg-pink max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE{" "}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
