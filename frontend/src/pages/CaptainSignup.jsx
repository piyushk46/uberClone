import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Captainsignup = () => {
  const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [UserData, setUserData] = useState({});
  
    const submitHandler = (e) => {
      e.preventDefault();
      setUserData({
        fullName:{
          firstName: firstName,
          lastName: lastName
        },
        email: Email,
        password: Password
    })
      setEmail('');
      setPassword('');
      setfirstName('');
      setlastName('');
    }
  return (
    <div className='py-5 px-5 flex flex-col justify-between h-screen'>
      <div>
      <img className='w-20 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
      <form onSubmit={(e) => {
          submitHandler(e)
        }}>
        <h3 className='text-medium w-full font-medium mb-2'>What's our Captain's name</h3>
        <div className='flex gap-4 mb-5'>
          <input className=' bg-[#eeeeee] w-1/2 rounded px-4 py2 border text-base placeholder:text-sm' required type="text"  placeholder='First name' value={firstName} onChange={(e)=>{
            setfirstName(e.target.value);
          }}/>
          <input className='bg-[#eeeeee] w-1/2 rounded px-4 py2 border text-base placeholder:text-sm' required type="text"  placeholder='Last name' value={lastName} onChange={(e)=>{
            setlastName(e.target.value);
          }}/>
        </div>
          <h3 className='text-medium w-full font-medium mb-2'>What's our Captain's email</h3>
          <input className='bg-[#eeeeee] mb-6 rounded px-4 py2 border w-full text-lg placeholder:text-base' required type="email"  placeholder='email@example.com' value={Email} onChange={(e)=>{
            setEmail(e.target.value);
          }}/>
          <h3 className='text-medium font-medium mb-2'>Enter Password</h3>
          <input className='bg-[#eeeeee] mb-6 rounded px-4 py2 border w-full text-lg placeholder:text-base' required type="password" placeholder='password' value={Password} onChange={(e)=>{
            setPassword(e.target.value);
          }}/>
          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py2 w-full text-lg placeholder:text-base'>Login</button>
      </form>
        <p className='text-center'>Already have a Account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
      </div>
      <div>
      <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
      Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>      </div>
    </div>
  )
}

export default Captainsignup