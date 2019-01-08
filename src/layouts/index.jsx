import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div className="flex flex-col font-sans min-h-screen text-grey-lightest bg-indigo-darkest">
    <Helmet
      title="Andrew Mason"
      meta={[
        { name: "description", content: "My personal website" },
        {
          name: "keywords",
          content: "andrew, mason, portfolio, personal, programmer, programming"
        }
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Header />
    <div className="mt-12 flex flex-col flex-1 md:justify-center max-w-xl mx-auto px-4 py-8 md:p-8 w-full">
      {children()}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
