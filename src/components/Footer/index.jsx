import React from "react";

const Footer = () => (
  <div className="bg-grey-lighter shadow-inner">
    <div className="flex justify-between max-w-xl mx-auto p-4 md:p-8 text-sm">
      <p className="text-indigo-darkest">
        © 2018{" "}
        <a
          href="https://andrewmason.me"
          className="no-underline text-indigo-darkest"
          target="_blank"
          rel="noopener"
        >
          Andrew Mason
        </a>
      </p>
      <p>
        <a
          href="https://andrewmason.me/contact"
          className="font-semibold no-underline text-indigo-darkest"
          target="_blank"
          rel="noopener"
        >
          Contact me
        </a>
      </p>
    </div>
  </div>
);

export default Footer;
