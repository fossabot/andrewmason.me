import React from "react";
import Link from "gatsby-link";
import OSS from "../images/oss.svg";

const AboutPage = () => (
  <div className="text-center">
    <img src={OSS} className="block mx-auto w-1/2" />
    <h2 className="inline-block my-8 p-3">My Projects</h2>
    <p className="leading-loose">Checkout what I am working on!</p>
  </div>
);

export default AboutPage;
