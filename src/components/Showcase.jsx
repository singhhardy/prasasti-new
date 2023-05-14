import React from "react";

function Showcase() {
  return (
    <div>
      <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 p-heading">Digital Awards, Badges and 
        <br class="hidden lg:inline-block" />Certificates on Blockchain
      </h1>
      <p class="mb-8 leading-relaxed">Store your Students, Employees, Participants <br/> Achievements on Blockchain and Built Trust.</p>
      <div class="flex justify-center show-section">
      <input className="show-input outline-none bottom-shadow" placeholder="Enter Your Email" />
        <button class="primary-btn show-btn bottom-shadow">Get Started for free</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="heroimg1.png" />
    </div>
  </div>
  <div className="hero-bg"></div>
</section>



<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 sm:w-1/4 w-1/2">
        <img class="object-cover object-center rounded px-5" alt="hero" src="brand1.png" />
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
      <img class="object-cover object-center rounded px-5" alt="hero" src="brand1.png" />
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
      <img class="object-cover object-center rounded px-5" alt="hero" src="brand1.png" />
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
      <img class="object-cover object-center rounded px-5" alt="hero" src="brand1.png" />
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

export default Showcase;
