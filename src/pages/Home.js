import React from "react";
import WomanImg from "../img/home/tes1-min.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import samplePDF from "../file/CV.pdf";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Software Engineer", "UI/UX Design", "Editor"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section"
      style={{ overflowY: "scroll" }}>
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition1}
            className="w-full pt-36 pb-0 lg:pt-0 lg:pb-14 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">
              I'm a <br />
              <span className="h1 text-gray-500">{text}</span>
              <span>
                <Cursor cursorStyle="/>" />
              </span>
              {/* Junior Software Engineer <br /> & UI/UX Design */}
              {/* Photographer <br /> & Film Maker */}
            </h1>
            <p className="text-[24px] lg:text-[24px] font-primary mb-4 lg:mb-12">
              Bandung, Indonesia
            </p>
            {/* <Link to={"/contact"} className="btn mb-[120px]">
              Hire Me
            </Link> */}
            <a
              href={samplePDF}
              without
              rel="noopener noreferrer"
              target="_blank">
              <button className="mb-[120px] bg-black hover:bg-gray-400 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                <svg
                  class="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Open My Resume</span>
              </button>
            </a>
          </motion.div>
          <div className="flex justify-end max-h-96 lg:max-h-max">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className="relative lg:-right-40 overflow-hidden">
              <motion.img
                width={761}
                height={1037}
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={WomanImg}
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
