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
  }

  render() {
    return (
      <nav className="bg-grey-lightest shadow-md z-10 absolute w-full">
        <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto ">
          <Link
            to="/"
            className="flex items-center no-underline text-indigo-darkest p-4 md:p-8"
          >
            <span className="font-semibold text-xl tracking-wide">
              Andrew Mason{" "}
            </span>{" "}
          </Link>
          <button
            className="mr-4 sm:mr-8 block sm:hidden border border-indigo-darkest hover:bg-indigo-darkest hover:text-grey-lightest focus:bg-indigo-darkest focus:text-grey-lightest flex items-center px-3 py-2 rounded text-indigo-darkest"
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
            className="text-center hidden sm:flex sm:items-center w-full sm:w-auto"
          >
            <div className="text-sm font-semibold">
              <Link
                to="/"
                className="block py-6 hover:bg-indigo-darkest hover:text-white sm:inline-block sm:mt-0 sm:mr-12 no-underline text-indigo-darkest shadow-inner sm:shadow-none"
                onClick={this.toggleNavbar}
              >
                Home{" "}
              </Link>
              <Link
                to="/projects"
                className="block sm:inline-block py-6 hover:bg-indigo-darkest hover:text-white sm:mt-0 sm:mr-12 no-underline text-indigo-darkest shadow-inner sm:shadow-none"
                onClick={this.toggleNavbar}
              >
                Projects{" "}
              </Link>
              <Link
                to="/contact"
                className="block sm:inline-block py-6 hover:bg-indigo-darkest hover:text-white sm:mt-0 no-underline text-indigo-darkest shadow-inner sm:shadow-none sm:mr-8"
                onClick={this.toggleNavbar}
              >
                Contact{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </nav>
    );
  }
}
