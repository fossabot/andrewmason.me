import React from "react";
import Link from "gatsby-link";
import Contact from "../images/contact.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const ContactPage = () => (
  <div>
    <img src={Contact} className="block mx-auto w-1/2 mb-8 sm:mb-16" />
    <ul className="list-reset sm:flex sm:justify-between text-3xl sm:text-4xl h-full">
      <li className="">
        <a
          className="flex flex-col text-center mb-16 sm:mb-2 text-indigo-darker no-underline font-semibold"
          href="mailto:masonam96@outlook.com?Subject=Hello!"
        >
          <FaEnvelope className="text-center w-full mb-4" />
          Email
        </a>
      </li>
      <li className="">
        <a
          className="flex flex-col text-center mb-16 sm:mb-2 text-indigo-darker no-underline font-semibold"
          href="https://www.linkedin.com/in/andrew-mason"
        >
          <FaLinkedin className="text-center w-full mb-4" />
          LinkedIn
        </a>
      </li>
      <li className="">
        <a
          className="flex flex-col text-center mb-16 sm:mb-2 text-indigo-darker no-underline font-semibold"
          href="https://twitter.com/andrewmcodes"
        >
          <FaTwitterSquare className="text-center w-full mb-4" />
          Twitter
        </a>
      </li>
      <li className="">
        <a
          className="flex flex-col text-center mb-16 sm:mb-2 text-indigo-darker no-underline font-semibold"
          href="https://github.com/andrewmcodes"
        >
          <FaGithub className="text-center w-full mb-4" />
          Github
        </a>
      </li>
    </ul>
  </div>
);

export default ContactPage;
