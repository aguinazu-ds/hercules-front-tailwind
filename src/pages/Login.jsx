import React from 'react'
import LoginImage from '../assets/man-593333.jpg'

const Login = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={LoginImage} alt="" />
        </div>

        <div className='sm:bg-bluegray-200 bg-black/40 flex flex-col justify-center sm:px-3'>
            <img className='absolute sm:hidden w-full h-full object-cover mix-blend-overlay' src={LoginImage} alt="" />

            <form action="" className='max-w-[400px] w-full mx-auto bg-white p-4 rounded-lg'>
                <h2 className='text-4xl font-bold text-center py-6 '>Hercules</h2>
                <div className='flex flex-col py-2'>
                    <label htmlFor="email">Email</label>
                    <input className='border p-2 ' type="email" name="email" id="email" />
                </div>
                <div className='flex flex-col py-2'>
                    <label htmlFor="password">Password</label>
                    <input className='border p-2 ' type="password" name="password" id="password" />
                </div>

                <button className='border relative w-full my-5 py-2 bg-blue-ribbon-700 hover:bg-blue-ribbon-600 text-white font-semibold' type="submit">Login</button>
                <div className='flex justify-end'>
                    <a href="#">Forgot password?</a>
                </div>
            </form>
        </div>

    </div>
  )
}

export default Login