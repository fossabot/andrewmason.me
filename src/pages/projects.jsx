import React from "react";
import Link from "gatsby-link";
// import OSS from "https://res.cloudinary.com/onshore-studios/image/upload/v1546924147/andrewmason.me/oss.svg";

const ProjectsPage = () => (
  <div className="text-center">
    <img
      src="https://res.cloudinary.com/onshore-studios/image/upload/v1546924147/andrewmason.me/oss.svg"
      className="block mx-auto w-3/4"
      alt="Developer Activity Undraw Graphic"
    />
    <h2 className="inline-block my-6 text-left sm:text-4xl leading-tight sm:leading-normal">
      My Projects
    </h2>
    <p className="text-lg leading-loose italic">Coming Soon...</p>
    <p className="leading-loose">
      In the meantime, checkout my{" "}
      <a
        href="https://github.com/andrewmcodes"
        target="_blank"
        className="text-blue hover:text-white no-underline font-semibold"
        rel="noopener"
      >
        Github
      </a>
      !!
    </p>
  </div>
);

export default ProjectsPage;
