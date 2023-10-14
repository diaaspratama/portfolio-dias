import React from "react";
import WomanImg from "../img/about/b4x6.PNG";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
      style={{ overflowY: "scroll" }}>
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          <div className="flex-2 max-h-1 lg:max-h-max order-2 lg:order-none">
            <img width={370} src={WomanImg} alt="" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">About Me</h1>
            <p>
              My name is Muhammad Dias Pratama Asikin, I recent graduate with a
              degree in informatics at National Institute Of Technology Bandung
              and a GPA Of 3,48. I am a responsible and highly motivated person.
              I am also adaptable to a new environment and i like trying new
              things.
            </p>
            <br />
            <p>
              Here are some of the projects that i made. And those projects are
              what keep me learning and keeping up with technology trends.
            </p>
            <br />
            <br />
            <Link to={"/portfolio"} className="btn">
              View My Works
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
