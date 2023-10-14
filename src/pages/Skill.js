import React from "react";
import html from "../img/skill/html.png";
import css from "../img/skill/css.png";
import javascript from "../img/skill/javascript.png";
import tailwind from "../img/skill/tailwind.png";
import reactImage from "../img/skill/react.png";
import python from "../img/skill/python.png";
import tensorflow from "../img/skill/tensorflow.png";
import github from "../img/skill/github.png";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const Skill = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: python,
      title: "Python",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      src: tensorflow,
      title: "TensorFlow",
      style: "shadow-yellow-500",
    },
    {
      id: 8,
      src: github,
      title: "Github",
      style: "shadow-red-500",
    },
  ];
  return (
    <div className="text-black w-full pt-36 h-screen overflow-scroll max-h-[880px]">
      <div className="max-w-screen-lg p-4 mx-auto justify-center w-full h-full ">
        <motion.div
          initial={{ opacity: 0, y: "-80%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-80%" }}
          transition={transition1}>
          <p className="h1 font-bold inline border-b-4 border-black">
            Experience
          </p>
          <p className="py-6 text-[24px]">
            These are the technologies i've worked with
          </p>
        </motion.div>

        <div className="w-full grid grid-cols-2 sm:grid-col-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition1}
              key={id}
              className={`bg-[#f1f1f1] shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
