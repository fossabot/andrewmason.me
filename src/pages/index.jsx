import React from "react";
import Link from "gatsby-link";
import Typist from "react-typist";
import "./typer.css";
// import Programmer from "https://res.cloudinary.com/onshore-studios/image/upload/v1546924147/andrewmason.me/programmer.svg";

const IndexPage = () => (
  <div className="text-center">
    <img
      src="https://res.cloudinary.com/onshore-studios/image/upload/v1546924147/andrewmason.me/programmer.svg"
      className="block mx-auto w-3/4"
      alt="Programming Undraw Graphic"
    />

    <h2 className="mt-6 mb-3 inline-block w-full text-left sm:text-4xl leading-tight sm:leading-normal">
      <Typist
        className='flash'
        avgTypingDelay={90}
        startDelay={1400}
        cursor={{
          blink: true,
          hideWhenDone: true
        }}
      >
        Hello, I'm <span className="text-blue">Andrew</span>.<br />
        <Typist.Delay ms={1250} />
        <h4 className="sm:text-2xl inline-block">full stack software engineer...</h4>
        <Typist.Backspace count={31} delay={2400} avgTypingSpeed={40} />
        <h4 className="sm:text-2xl inline-block">rubyist...</h4>
        <Typist.Backspace count={10} delay={2400} avgTypingSpeed={40} />
        <h4 className="sm:text-2xl inline-block">graphic designer...</h4>
        <Typist.Backspace count={19} delay={2400} avgTypingSpeed={40} />
        <h4 className="sm:text-2xl inline-block">open source enthusiast...</h4>
        <Typist.Backspace count={25} delay={2400} avgTypingSpeed={40} />
        <h4 className="sm:text-2xl inline-block">Welcome to my website!</h4>
      </Typist>{" "}
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
        className="text-blue hover:text-white no-underline font-semibold"
        rel="noopener"
      >
        Twitter
      </a>
      . I love talking to new people!
    </p>
  </div>
);

export default IndexPage;
