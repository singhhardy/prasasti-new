import React from 'react'

function Achieve() {
  return (
    <div>
      <div className=' text-center p-5 container-height light-bg'>
      <div className='pt-5 mt-5'>
      <p className='text-center text-blue pt-5 mt-5'>Achievements</p>
      <h1 className='p-heading text-center'>Build your Professional Reputation using Prasasti <br/>Blockchain Platform</h1>
      </div>
      </div>

      {/* Achievements Body */}

      <div className=' mb-5 text-center p-5 container-height'>
      <div className='pt-5 mt-5'>
        <h1 className='text-3xl'>Check your Digital Badges, Certificates and other Awards</h1>
      </div>
      <div className='py-5 my-5'>
        <h4 className=''>Enter Your SBT ID</h4>
      </div>
      <div className='input-group'>
      <input className='px-5 py-2 outline-gray-400 border-solid border-2 border-gray-300 w-96' type='text' placeholder='Enter Your ID'/>
      <button class="inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg py-2">
        Submit 
      </button>
      </div>
      <div className='py-5'>
      <p className='py-3 text-center'>Forgot your SBT ID?</p>
      <p className='py-3 text-center'>Please enter your email id and receive SBT ID’s linked to your profile to your email shortly</p>
      </div>
      </div>

      <div className='my-5 py-5'></div>
      <div className='my-5 py-5'></div>
      <div className='my-5 py-5'></div>
    </div>
  )
}

export default Achieve