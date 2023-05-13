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
      <div class="flex justify-center">
      <input className="show-input outline-none" placeholder="Enter Your Email" />
        <button class="primary-btn show-btn">Button</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="heroimg1.png" />
    </div>
  </div>
  <div className="hero-bg"></div>
</section>
<div className="box mx-5 px-5">
  <img class="object-cover object-center rounded px-5" alt="hero" src="brand1.png" />
  <img class="object-cover object-center rounded px-5" alt="hero" src="brand1.png" />
  <img class="object-cover object-center rounded px-5" alt="hero" src="brand1.png" />
  <img class="object-cover object-center rounded px-5" alt="hero" src="brand1.png" />
</div>



    </div>
  );
}

export default Showcase;
