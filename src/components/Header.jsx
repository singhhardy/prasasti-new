import React, { useState } from "react";
import ".././paging/style.css";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navtoggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto px-5 desk-nav">
          <a
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img className="brand-img" src="logo.png" width="80px" />
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center nav-links">
            <a className="mr-5 hover:text-gray-900 px-5" href="/">
              Home
            </a>
            <a
              className="mr-5 hover:text-gray-900 px-5"
              href="/achievements"
            >
              Achievements
            </a>
            <a className="mr-5 hover:text-gray-900 px-5" href="/about-us">
              About Us
            </a>
            <a className="mr-5 hover:text-gray-900 px-5" href="/solutions">
              Solutions
            </a>
            <a
              href="/contact-us"
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg py-2"
            >
              Contact
            </a>
          </nav>
          <div onClick={navtoggle} className="hamburger">
            <i class="fa fa-bars text-4xl"></i>
          </div>
        </div>

        <div className={`nav-menu container-bg ${isNavOpen ? "nav-active" : ""}`}>
          <nav className="flex flex-col text-center">
            <a className="py-5 text-3xl" href="/">
              Home
            </a>
            <a className="py-5 text-3xl" href="/achievements">
              Achievements
            </a>
            <a className="py-5 text-3xl" href="/about-us">
              About Us
            </a>
            <a className="py-5 text-3xl" href="/solutions">
              Solutions
            </a>
            
            <a className="py-5 text-3xl" href="/contact-us">
              Contact Us
            </a>
            
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;