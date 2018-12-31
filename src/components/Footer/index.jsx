import React from "react";

const Footer = () => (
  <div className="bg-blue">
    <div className="flex justify-between max-w-xl mx-auto p-4 md:p-8 text-sm">
      <p className="text-white">
        Created by{" "}
        <a href="https://taylorbryant.blog" className="no-underline text-white">
          Andrew Mason
        </a>
      </p>
      <p>
        <a
          href="https://github.com/andrewmcodes"
          className="font-semibold no-underline text-white"
        >
          GitHub
        </a>
      </p>
    </div>
  </div>
);

export default Footer;
