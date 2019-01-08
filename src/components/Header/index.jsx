import React from "react";
import Link from "gatsby-link";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  closeNavbar() {
    if (this.state.collapsed == true) {
      this.toggleNavbar();
    }
  }

  toggleNavbar() {
    const el = document.getElementById("nav");
    el.classList.toggle("block");
    el.classList.toggle("hidden");
  };

render() {
    return (
      <nav className="bg-indigo-darkest">
        <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8">
          <Link to="/" className="flex items-center no-underline text-white">
            <span className="font-semibold text-xl tracking-wide">
              Andrew Mason{" "}
            </span>{" "}
          </Link>
          <button
            className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
            onClick={this.toggleNavbar}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title> Menu </title>{" "}
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>{" "}
          </button>
          <div
            id="nav"
            className="text-center hidden md:flex md:items-center w-full md:w-auto"
          >
            <div className="text-sm font-semibold">
              <Link
                to="/"
                className="block mt-8 sm:mt-4 md:inline-block md:mt-0 sm:mr-12 no-underline text-white"
                onClick={this.toggleNavbar}
              >
                Home{" "}
              </Link>
              <Link
                to="/projects"
                className="block md:inline-block mt-8 sm:mt-4 md:mt-0 sm:mr-12 no-underline text-white"
                onClick={this.toggleNavbar}
              >
                Projects{" "}
              </Link>
              <Link
                to="/contact"
                className="block md:inline-block mt-8 sm:mt-4 md:mt-0 no-underline text-white"
                onClick={this.toggleNavbar}
              >
                Contact{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </nav>
    );
  };
};
