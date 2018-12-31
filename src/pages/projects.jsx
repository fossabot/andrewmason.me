import React from "react";
import Link from "gatsby-link";
import OSS from "../images/oss.svg";

const ProjectsPage = () => (
  <div className="text-center">
    <img
      src={OSS}
      className="block mx-auto w-3/4"
      alt="Developer Activity Undraw Graphic"
    />
    <h2 className="inline-block my-6 text-left sm:text-4xl leading-tight sm:leading-normal">
      My Projects
    </h2>
    <p className="text-lg leading-loose italic">Coming Soon!</p>
  </div>
);

export default ProjectsPage;
