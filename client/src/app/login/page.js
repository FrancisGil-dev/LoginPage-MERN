import React from 'react'

export default function Login() {  
  return (
    <main className='border border-white h-[300px] w-[500px] text-white'>
        {/*Container*/}
        <div>
          <form>
            {/*Username*/}
            <div>
              <input type='text' required autoComplete='off'/>
              <i className="bi bi-person"></i>
            </div>
            {/*Password*/}
            <div></div>
          </form>
        </div>
    </main>
  )
}
