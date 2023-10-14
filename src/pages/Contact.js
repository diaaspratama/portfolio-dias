import React, { useRef } from "react";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zvb6och",
        "template_w0urjk5",
        form.current,
        "6DKhuWCz28RitU2B6"
      )
      .then(
        (result) => {
          Swal.fire("Thank You!", "Your Message Have Been Sent!", "success");
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Your message was not sent!",
          });
          console.log(error.text);
        }
      );
  };
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
      style={{ overflowY: "scroll" }}>
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
            className="hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10"></motion.div>
          <div className="lg:flex-1 lg:pt-32 px-4">
            <h1 className="h1">Contact Me</h1>
            <p className="mb-12">I would love to get suggestions from you.</p>
            <form
              className="flex flex-col gap-y-4"
              ref={form}
              onSubmit={sendEmail}>
              <div className="flex gap-x-10">
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#75789]"
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                />
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#75789]"
                  type="text"
                  name="user_email"
                  placeholder="Your Email Address"
                />
              </div>
              <input
                className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#75789]"
                type="text"
                name="message"
                placeholder="Your Message"
              />
              <button
                className="btn mb-[30px] mx-auto lg:mx-0 self-start"
                type="submit"
                value="Send">
                Send It
              </button>
            </form>
          </div>
          {/* <div className="lg:flex-1">
            <img src={WomanImg} alt="" />
          </div> */}
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
