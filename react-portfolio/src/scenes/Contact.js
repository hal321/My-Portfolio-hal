import React, { useState, useEffect } from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_zlqqfqh", "template_0bnt2ud", values, "CEsGljVMuxV_Z34V_")
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setValues({
            name: "",
            email: "",
            message: "",
          });
          setStatus("SUCCESS");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };
  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-48">
      <motion.div
        className="flex justify-end w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl text-pink">
            Write me an email ...
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src="../assets/talk.png" alt="contact" />
        </motion.div>
        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form target="_blank" onSubmit={handleSubmit}>
            <input
              className="w-full bg-grey font-semibold placeholder-opaque-black p-3 text-black "
              type="text"
              placeholder="Name"
              value={values.name}
              name="name"
              id="name"
              onChange={handleChange}
              required
            />

            <input
              className="w-full bg-grey font-semibold placeholder-opaque-black p-3 mt-5 text-black"
              type="text"
              placeholder="EMAIL"
              name="email"
              id="email"
              value={values.email}
             onChange={handleChange}
            />

            <textarea
              className="w-full bg-grey font-semibold placeholder-opaque-black p-3 mt-5 text-black"
              type="text"
              value={values.message}
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              name="message"
              id="message"
              onChange={handleChange}
            />

            <button className="bg-pink text-black p-5 font-semibold hover:bg-[#fed7aa] transition duration-500 rounded-lg">
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
