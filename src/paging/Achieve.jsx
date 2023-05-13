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
        <h1 className='text-4xl'>Check your Digital Badges, Certificates and other Awards</h1>
      </div>
      <div className='py-5 my-5'>
        <h4 className=''>Enter Your SBT ID</h4>
      </div>
      <div className='input-group'>
      <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'>SBI ID <i className='fa fa-arrow-right'></i></button>
      <input className='px-5 py-2 outline-gray-200' type='text' placeholder='Enter Your ID'/>
      <button class="font-bold py-2 px-4 rounded bg-blue-500 text-white bg-blue-700">
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