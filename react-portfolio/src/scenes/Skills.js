import React from "react";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const Skills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="skills" className="pt-4 pb-5">
      <div className="md:flex md:justify-center md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            My <span className="text-pink">Skills</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
           I enjoy solving problems with clean scalable solutions.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div>
              <img
                src="assets/projects.png"
                alt="skills-img"
                className="z-10  "
                style={{ width: 200 }}
              />
            </div>
          ) : (
            <div>
              <img
                src="assets/projects.png"
                alt="skills-img"
                className="z-10"
                style={{ width: 200 }}
              />
            </div>
          )}
        </div>
      </div>

      <div className="md:flex md:justify-center mt-12 gap-32">
        <motion.div
          className="md:w-1/2 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-50 border-x-4 border-rose-300 p-10 ">
            <div className="z-10">
              <h1 className="font-playfair font-semibold text-2xl mb-5">
                Front-End
              </h1>
              <p className="font-playfair text-l">
                It's the interface that attract users to the website or the app,
                they know nothing about the back-end. So I belive that making
                the app as user-friendly, and smooth-looking as possible is key
                to a good platform. using good UI/UX will take the web app to
                the optimal form.
              </p>
              <h1 className="font-playfair font-semibold text-xl mb-5 mt-5">
                SKILLS:{" "}
              </h1>
              <p className="font-playfair text-l">
                HTML, CSS, JS, React, jQuery, Bootsrap, Tailwind...
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/2 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-50 border-x-4 border-rose-300 p-10 ">
            <div className="z-10">
              <h1 className="font-playfair font-semibold text-2xl mb-5">
                Back-End
              </h1>
              <p className="font-playfair text-l">
                Back-end or server-side is the behind-the-scenes for developers:
                so much magic happens there. So with a good, well-established
                back-end your web app will survive longer and load faster. When
                used with front-end code, a functional, seamless experience is
                delivered to the end-user.
              </p>
              <h1 className="font-playfair font-semibold text-xl mb-5 mt-5">
                SKILLS:{" "}
              </h1>
              <p className="font-playfair text-l">
                JS, Postgres, Mongodb, Firebase, Node js, Express...
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
