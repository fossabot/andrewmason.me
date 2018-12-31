import React from "react";
import Link from "gatsby-link";
import Programmer from "../images/programmer.svg";

const IndexPage = () => (
  <div className="text-center">
    <img
      src={Programmer}
      className="block mx-auto w-3/4"
      alt="Programming Undraw Graphic"
    />
    <h2 className="inline-block my-6 text-left sm:text-4xl leading-tight sm:leading-normal">
      Hi, I'm <span className="text-blue">Andrew</span>. A full stack software
      engineer, designer, and open source enthusiast.{" "}
    </h2>
    <p className="leading-loose text-left mb-6">
      Currently residing in Wilmington, North Carolina, I spend the majority of
      my time working as full stack engineer, focusing on Ruby on Rails and
      React. In my spare time, I like to build websites, contribute to open
      source, and play with a variety of programming languages.
    </p>
    <p className="leading-loose text-left">
      Feel free to send me a message on{" "}
      <a
        href="https://twitter.com/andrewmcodes"
        target="_blank"
        className="text-indigo-darkest no-underline font-semibold"
      >
        Twitter
      </a>
      . I love talking to new people!
    </p>
  </div>
);

export default IndexPage;
