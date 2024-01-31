"use client"
import React, {useState} from 'react'

export default function Register() {
   //get the data of the user filled
   const [name, setName] = useState("")
   const [email, setEmail] = useState("");
   const [pass, setPass] = useState("");
   const [confirm, confirmPass] = useState("")

   //function to show password
   const [show, setShow] = useState(false);
   const showPass = () => {
      setShow(!show)
   }
   //function to handle form
   const submitForm = (e) => {
    e.preventDefault()
    console.log(`username: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${pass}`);
    console.log(`confirmPass: ${confirm}`);
   }
  return (
    <section className='h-screen flex justify-center items-center bg-[url(https://img.freepik.com/free-photo/black-background-with-white-spotlight_53876-104891.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1706486400&semt=ais)] bg-no-repeat bg-cover'>
      <main className='border border-white h-auto w-[600px] text-white rounded-lg'>
        <form className='p-6 flex flex-col gap-10' onSubmit={submitForm}>
          {/* Title*/}
          <div className='text-center'>
            <h1 className='text-5xl'>Register</h1>
          </div>
          {/*username*/}
          <div className='flex flex-col gap-1'>
              <h1>Username</h1>
              <div className='flex items-center'>
                <input type='text' required autoComplete='off' className='bg-transparent outline-none border border-white p-2 w-full'
                value={name} onChange={(e) => setName(e.target.value)}/>
                <i className="bi bi-person text-xl relative right-[35px]"></i>
              </div>
          </div>
           {/* Email*/}
           <div className='flex flex-col gap-1'>
              <h1>Email</h1>
              <div className='flex items-center'>
                <input type='text' required autoComplete='off' className='bg-transparent outline-none border border-white p-2 w-full'
                value={email} onChange={(e) => setEmail(e.target.value)}/>
                <i className="bi bi-envelope text-xl relative right-[35px]"></i>
              </div>
            </div>
            {/*password*/}
            <div className='flex flex-col gap-1'>
              <h1>Password</h1>
              <div className='flex items-center'>
                <input type ="password" required autoComplete='off' className='bg-transparent outline-none border border-white p-2 w-full '
                value={pass} onChange={(e) => setPass(e.target.value)}/>
                <i className={`bi bi-eye text-xl relative right-[35px]  transition-all`}></i>
              </div>
            </div>
            {/*Confirm Password*/}
            <div className='flex flex-col gap-1'>
              <h1>Confirm Password</h1>
              <div className='flex items-center'>
                <input type = { show? "text" : "password"} required autoComplete='off' className='bg-transparent outline-none border border-white p-2 w-full'
                value={confirm} onChange={(e) => confirmPass(e.target.value)}/>
                <i className={`bi ${show ? "bi-eye" : "bi-eye-slash"} text-xl relative right-[35px] cursor-pointer transition-all`} onClick={showPass}></i>
              </div>
            </div>
            {/*Register BTN*/}
            <div className='text-center w-[97%] flex flex-col gap-5'>
              <button className='p-2 border border-white w-full hover:bg-white hover:text-black transition-all'>Login</button>
              <div className='text-left'>
                <h1>Already have an acoount?<a className='underline' href='/'> Login Here</a></h1>
              </div>
            </div>
        </form>
      </main>
    </section>
  )
}
