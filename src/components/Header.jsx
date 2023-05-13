import React from "react";
import ".././paging/style.css";

function Header() {
  return (
    <div>
      <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img className="brand-img" src="logo.png" width="80px" />
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900 px-5" href="/">Home</a>
          <a className="mr-5 hover:text-gray-900 px-5" href="/achievements">Achievements</a>
          <a className="mr-5 hover:text-gray-900 px-5" href="/about-us">About Us</a>
          <a className="mr-5 hover:text-gray-900 px-5" href="/solutions">Solutions</a>
        </nav>
        <a href="/contact-us" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg py-2">Contact</a>  
        </div>
    </header>
    </div>
  );
}

export default Header;
