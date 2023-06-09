import React from 'react';
import Showcase from '../components/Showcase';

function Home() {
  return (
    <div>
    <Showcase />

    {/* Home body */}


    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest p-heading">Elevate your Digital Reputation with Parasasti’s <br/> Blockchain Platform</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Builds Students Lifelong Skills Profile Share your Digital Badges and Certificates across Social Media Platforms</p>
    </div>
    <div className='box'>
    <div className='box-container'>
      <div class="p-4 ">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center sm:text-left">
          <h1><i class=" p-5 fa fa-phone text-icon" ></i></h1>
          <div class="flex-grow sm:pl-8">
            <h1 class="title-font font-medium text-lg text-gray-900">Alper Kamu</h1>
            <br/>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
            <a href='#' className='text-blue'>Learn More <i className='fa fa-arrow-right'></i></a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 ">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center sm:text-left">
        <h1><i class=" p-5 fa fa-phone text-icon" ></i></h1>
          <div class="flex-grow sm:pl-8">
            <h1 class="title-font font-medium text-lg text-gray-900">Atticus Finch</h1>
            <br/>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
            <a href='#' className='text-blue '>Learn More <i className='fa fa-arrow-right'></i></a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 ">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center sm:text-left">
        <h1><i class=" p-5 fa fa-phone text-icon" ></i></h1>
          <div class="flex-grow sm:pl-8">
            <h1 class="title-font font-medium text-lg text-gray-900">Henry Letham</h1>
            <br/>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
            <a href='#' className='text-blue'>Learn More <i className='fa fa-arrow-right'></i></a>
            </span>
          </div>
        </div>
      </div>

    </div>

    <div className='box-container w-50'>
      <img className='w-100' src='Photo.png'/>
    </div>
    </div>
  </div>
</section>

    <section className='mx-5 my-5 max-w  p-5'>
      <div className=' px-5 light-gradient-bg p-4 rounded bottom-shadow'>
        <div className='box'>
           <div className='box-container p-5 '>
           <h2 className='p-heading'>Web3 Wallets integration <br/> and Rewards</h2>
           <br/>
           <p>Digital Badges and Certificates are soul bound <br/> tokens that are linked to your web3 wallet address <br/>Get Rewards for your achievements by blockchain <br/> airdrop functinality
           </p>
           <br/>
           <div className='box'>
           <div className='container'>
           <span className='nums mx-2 px-4'>1</span>
           <span className='nums mx-2 px-4'>2</span>
           <span className='nums mx-2 px-4'>1</span>
           <span className='nums mx-2 px-4'>7</span>
           </div>
           </div>
           </div>
           <div className='box-container'>
            <img className='img-fluid' src='CI1.png' />
           </div>
        </div>
      </div>
</section>

    {/* PRASASTI PRODUCTS */}


      <div class="container px-5 py-24 mx-auto mx-5">
        <h1 class="p-heading text-center">Meet Our Products</h1>
        <br/>
        <p class="text-center">Our Products work Together seamlessly to <br/> form talent science. Start with one or more.</p>
        <img class="sideimg" src="sideimg.png" />

        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class=" mx-auto flex flex-wrap">
              <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="goalmanagement.png" />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <p className='badge p-2 primary-badge '><i class="fa fa-bar"></i>College</p>
                      <br/>
                      <h3 className='p-heading'> Prasasti for Colleges</h3>
                      <div className='bar'></div>
                      <br />
                      <p className='fs-3'>Issue Digital Badges to Certificates to Students</p>
                      <div className='flex'>
                      <h5 className='p-heading-2 fs-5'><span className='primary-dot'>.</span>  Daily Track</h5>
                      <h4 className='p-heading-2 mx-5 fs-5'><span className='primary-dot px-3'>.</span>  Road Map</h4>
                      </div>
                      <br/>
                      <button className='btn third-btn rounded'>Learn More</button>
              </div>
            </div>
          </div>
        </section>


        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <p className='badge p-2 secondary-badge '><i class="fa fa-bar"></i>Schools</p>
              <br/>
              <h3 className='p-heading'> Prasasti for Schools</h3>
              <div className='bar'></div>
              <br />
              <p className='fs-3'>Issue Digital Badges to Certificates to Students</p>
              <div className='flex'>
              <h5 className='p-heading-2 fs-5'><span className='primary-dot'>.</span>  Remote Access</h5>
              <h4 className='p-heading-2 mx-5 fs-5'><span className='primary-dot px-3'>.</span>  Work Anytime</h4>
              </div>
              <br/>
              <button className='btn third-btn rounded'>Learn More</button>
              </div>
              <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="schools.png" />
            </div>
          </div>
        </section>

        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class=" mx-auto flex flex-wrap">
              <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="goalmanagement.png" />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <p className='badge p-2 primary-badge '><i class="fa fa-bar"></i>College</p>
              <br/>
              <h3 className='p-heading'>Hackathon Organizers and <br/> Training Companies</h3>
              <div className='bar'></div>
              <br />
              <p className='fs-3'>Make your Hackathon more impactful for the participants. </p>
              <div className='flex'>
              <h5 className='p-heading-2 fs-5'><span className='primary-dot'>.</span> Career Success</h5>
              <h4 className='p-heading-2 mx-5 fs-5'><span className='primary-dot px-3'>.</span>  Drive Demand</h4>
              </div>
              <br/>
              <button className='btn third-btn rounded'>Learn More</button>
              </div>
            </div>
          </div>
        </section>

      </div> 

    <section className='mx-5 my-5 max-w p-5'>
      <div className=' px-5 light-gradient-bg p-4 rounded bottom-shadow'>
      <div className='container text-center'>
      <h2 className='p-heading'>Talent Search for Employers using Prasasti Ecosystems.</h2>
           <br/>
           <p   >Help Companies hire the best talent by verified skills and Credentials. <br/>
          Sourcing and Screening made easy with skill based digital profiles.</p>
           <br/>
      </div>

        <div className='box'>
           <div className='box-container p-5'>
           <div className='container'>
           <h1 className='bold-heading'>
              50%
            </h1>
            <h4 className='p-heading'>Boost in Production</h4>
           </div>
           </div>
           <div className='box-container'>
            <img className='' src='girlcard.png' />
           </div>
        </div>
      </div>
</section>

<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 p-heading">Register With Us
      </h1>
      <p class="mb-8 leading-relaxed text-start">To get latest news and notifications regarding Prasasti  Register with US. Enter your email and click the Register with us button to stay updated. </p>
      <div class="flex justify-center show-section">
      <input className="show-input outline-none bottom-shadow" placeholder="Enter Your Email" />
        <button class="primary-btn show-btn bottom-shadow">Register with us</button>
      </div>
      <br/>
      <p class="mb-8 leading-relaxed">Everyone gets something special. Sign up to be everyone.</p>

    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="register.jpg" />
    </div>
  </div>
  <div className="hero-bg"></div>
</section>


    </div>
  )
}

export default Home