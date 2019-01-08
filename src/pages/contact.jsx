import React from "react";
import Link from "gatsby-link";
import Contact from "../images/contact.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const ContactPage = () => (
  <div>
    <img
      src={Contact}
      className="block mx-auto w-3/4 sm:w-3/5 "
      alt="Emails Undraw Graphic"
    />
    <ul className="mt-16 list-reset flex flex-wrap sm:justify-between text-3xl sm:text-4xl h-full">
      <li className="w-1/2 mb-16">
        <a
          className="flex flex-col text-center mb-12 sm:mb-2 text-grey-lightest hover:text-blue no-underline font-semibold"
          href="mailto:masonam96@outlook.com?Subject=Hello!"
          target="_blank"
          rel="noopener"
        >
          <FaEnvelope className="text-center w-full mb-4" />
          Email
        </a>
      </li>
      <li className="w-1/2 mb-16">
        <a
          className="flex flex-col flex-1 text-center mb-12 sm:mb-2 text-grey-lightest hover:text-blue no-underline font-semibold"
          href="https://www.linkedin.com/in/andrew-mason"
          target="_blank"
          rel="noopener"
        >
          <FaLinkedin className="text-center w-full mb-4" />
          LinkedIn
        </a>
      </li>
      <li className="w-1/2 mb-16">
        <a
          className="flex flex-col text-center mb-12 sm:mb-2 text-grey-lightest hover:text-blue no-underline font-semibold"
          href="https://twitter.com/andrewmcodes"
          target="_blank"
          rel="noopener"
        >
          <FaTwitterSquare className="text-center w-full mb-4" />
          Twitter
        </a>
      </li>
      <li className="w-1/2 mb-16">
        <a
          className="flex flex-col text-center mb-6 sm:mb-2 text-grey-lightest hover:text-blue no-underline font-semibold"
          href="https://github.com/andrewmcodes"
          target="_blank"
          rel="noopener"
        >
          <FaGithub className="text-center w-full mb-4" />
          Github
        </a>
      </li>
    </ul>
  </div>
);

export default ContactPage;
