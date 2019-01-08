import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
const Footer = () => (
  <div className="bg-grey-lighter shadow-inner ">
    <div className="align-baseline flex flex-col-reverse md:flex-row md:justify-between max-w-xl mx-auto p-4 md:p-8 md:pb-2 text-sm">
      <p className="w-full md:w-3/4 text-center md:text-left mt-4 sm:mt-0 text-indigo-darkest">
        © 2018{" "}
        <a
          href="https://andrewmason.me"
          className="no-underline text-indigo-darkest hover:text-blue mb-0"
          target="_blank"
          rel="noopener"
        >
          Andrew Mason
        </a>
      </p>
      <ul className="w-full md:w-1/4 list-reset flex justify-between text-xl md:text-2xl h-full">
        <li className="px-1 md:px-2">
          <a
            className="flex flex-col text-center text-indigo-darker hover:text-blue no-underline font-semibold"
            href="mailto:masonam96@outlook.com?Subject=Hello!"
            target="_blank"
            rel="noopener"
            aria-label="Email"
            rel="noopener"
          >
            <FaEnvelope className="text-center w-full mb-4" />
          </a>
        </li>
        <li className="px-1 md:px-2">
          <a
            className="flex flex-col text-center text-indigo-darker hover:text-blue no-underline font-semibold"
            href="https://www.linkedin.com/in/andrew-mason"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            rel="noopener"
          >
            <FaLinkedin className="text-center w-full mb-4" />
          </a>
        </li>
        <li className="px-1 md:px-2">
          <a
            className="flex flex-col text-center text-indigo-darker hover:text-blue no-underline font-semibold"
            href="https://twitter.com/andrewmcodes"
            target="_blank"
            rel="noopener"
            aria-label="Twitter"
            rel="noopener"
          >
            <FaTwitterSquare className="text-center w-full mb-4" />
          </a>
        </li>
        <li className="pl-1 md:pl-2">
          <a
            className="flex flex-col text-center text-indigo-darker hover:text-blue no-underline font-semibold"
            href="https://github.com/andrewmcodes"
            target="_blank"
            rel="noopener"
            aria-label="Github"
            rel="noopener"
          >
            <FaGithub className="text-center w-full mb-4" />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Footer;
