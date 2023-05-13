import React from 'react'
import Faq from '../components/Faq'


function ContactUs() {
  
  return (
    <div>
      <div className=' text-center p-5 container-height light-bg'>
      <div className='pt-5 mt-5'>
      <p className='text-center text-blue pt-5 mt-5'>Contact</p>
        <h1 className='p-heading text-center'>Everyone gets something special. <br/> Sign up to be everyone. :P</h1>
      </div>
      </div>

      {/* contact form */}
      <div className='box p-5 m-5 light-bg'>
      <form class=" w-5/6 my-5">
  <div class="flex flex-wrap -mx-3 mb-6"> 
  <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Email Address
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="First Name" />
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Email Address
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Email Address" />
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
  <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Email Address
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Email Address" />
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Message
      </label>
      <textarea className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 textarea' placeholder='Enter a message' /> 
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full px-3">
    <input type="checkbox"/>
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
      I agree with Prasasti Privacy Policy
      </label>
      <a href="/contact-us" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg py-2">Submit</a>  
    </div>
  </div>
</form>
      </div>
      {/* FAQ */}

    </div>
  )
}

export default ContactUs