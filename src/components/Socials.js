import React from "react";
import {
  FaGithub,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4 ">
        <li>
          <a
            className="hover:to-black"
            href="https://www.linkedin.com/in/diaaspratama/"
            target="_blank"
            style={{ color: "grey" }}>
            <FaLinkedinIn size={23} />
          </a>
        </li>

        <li>
          <a
            href="mailto:muhammaddias161@gmail.com"
            target="_blank"
            style={{ color: "grey" }}>
            <FaEnvelope size={23} />
          </a>
        </li>

        <li>
          <a
            href="https://wa.me/6285156131669"
            target="_blank"
            style={{ color: "grey" }}>
            <FaWhatsapp size={23} />
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/diaaspratama/"
            target="_blank"
            style={{ color: "grey" }}>
            <FaInstagram size={23} />
          </a>
        </li>

        <li>
          <a
            href="http://www.github.com"
            target="_blank"
            style={{ color: "grey" }}>
            <FaGithub size={23} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
