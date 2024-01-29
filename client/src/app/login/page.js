"use client"
import React, { useState } from 'react'

export default function Login() {  
  //showpassword
  const [show,setShow] = useState(false);
  const showPass = () => {
    setShow(!show);
  }
  //handle all the data
  return (
    <main className='border border-white h-auto w-[600px] text-white rounded-lg'>
        {/*Container*/}
        <div>
          <form className='p-6 flex flex-col gap-10'>
            <h1 className='text-center text-5xl'>Login</h1>
            {/*Username*/}
            <div className='flex flex-col gap-1'>
              <h1>Username</h1>
              <div className='flex items-center'>
                <input type='text' required autoComplete='off' className='bg-transparent outline-none border border-white p-2 w-full'/>
                <i className="bi bi-person text-xl relative right-[35px]"></i>
              </div>
            </div> 
            {/*Password*/}
            <div className='flex flex-col gap-1'>
              <h1>Password</h1>
              <div className='flex items-center'>
                <input type = { show? "text" : "password"} required autoComplete='off' className='bg-transparent outline-none border border-white p-2 w-full '/>
                <i className={`bi ${show ? "bi-eye" : "bi-eye-slash"} text-xl relative right-[35px] cursor-pointer transition-all`} onClick={showPass}></i>
              </div>
            </div>
            {/*Submit Button*/}
            <div className='text-center w-[97%] flex flex-col gap-5'>
              <button className='p-2 border border-white w-full hover:bg-white hover:text-black transition-all' >Login</button>
              <div className='text-left'>
                <h1>Doesn't have an account? <a className='underline' href='/register'>Register Here</a></h1>
              </div>
            </div>
          </form>
        </div>
    </main>
  )
}
