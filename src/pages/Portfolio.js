import React from "react";
import Image1 from "../img/portfolio/1.jpg";
import Image2 from "../img/portfolio/2.jpg";
import Image3 from "../img/portfolio/3.jpg";
import Image4 from "../img/portfolio/4.jpg";
import Image5 from "../img/portfolio/5.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import portfolioDetail from "../file/Portfolio_Detail.pdf";

const Portfolio = () => {
  // return (
  //   <section className="section bg-green-200">
  //     <div>
  //       <div>test</div>
  //       <div>Image</div>
  //     </div>
  //   </section>

  // );
  const portfolios = [
    {
      id: 1,
      src: Image1,
    },
    {
      id: 2,
      src: Image2,
    },
    {
      id: 3,
      src: Image3,
    },
    {
      id: 4,
      src: Image4,
    },
    {
      id: 5,
      src: Image5,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="text-black w-full pt-32 overflow-scroll max-h-[800px]">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: "-80%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-80%" }}
          transition={transition1}
          className="pb-1">
          <p className="h1 font-bold inline border-b-4 border-black">
            Portfolio
          </p>
          <p className="text-[24px] lg:text-[24px] font-primary mb-4 lg:mb-12 pt-5">
            Check out some of my work right here
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-4 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={portfolioDetail}
                  without
                  rel="noopener noreferrer"
                  target="_blank">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Details
                  </button>
                </a>
              </div>
            </div>
          ))}
          <br />
        </div>
        <Link to={"/contact"} className="btn mb-[180px] mt-12">
          Hire Me
        </Link>
      </div>
    </motion.div>
  );
};

export default Portfolio;
