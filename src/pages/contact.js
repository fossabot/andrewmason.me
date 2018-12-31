import React from "react";
import Link from "gatsby-link";
import Mail from "../images/icons/mail.svg";
import Github from "../images/icons/github.svg";
import Twitter from "../images/icons/twitter.svg";
import Linkedin from "../images/icons/linkedin.svg";

const ContactPage = () => (
  <ul className="list-reset sm:flex sm:justify-between text-2xl">
    <li className="">
      <a className="flex flex-col text-center mb-8 sm:mb-2 text-blue-darkest no-underline font-semibold" href="mailto:masonam96@outlook.com?Subject=Hello!">
        <img className="mx-auto mb-2" src={Mail} width="48px" alt="email icon"/>
        Email
      </a>
    </li>
    <li className="">
      <a className="flex flex-col text-center mb-8 sm:mb-2 text-blue-darkest no-underline font-semibold" href="https://www.linkedin.com/in/andrew-mason">
        <img className="mx-auto mb-2" src={Linkedin} width="48px" alt=""/>
        LinkedIn
      </a>
    </li>
    <li className="">
      <a className="flex flex-col text-center mb-8 sm:mb-2 text-blue-darkest no-underline font-semibold" href="https://twitter.com/andrewmcodes">
        <img className="mx-auto mb-2" src={Twitter} width="48px" alt=""/>
        Twitter
      </a>
    </li>
    <li className="">
      <a className="flex flex-col text-center mb-8 sm:mb-2 text-blue-darkest no-underline font-semibold" href="https://github.com/andrewmcodes">
        <img className="mx-auto mb-2" src={Github} width="48px" alt=""/>
        Github
      </a>
    </li>
  </ul>
);

export default ContactPage;
