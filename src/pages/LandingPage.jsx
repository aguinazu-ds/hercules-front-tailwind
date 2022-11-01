import React from 'react'
import { Link } from 'react-router-dom';
import { GiAbstract014 } from 'react-icons/gi';

const LandingPage = () => {
  return (
    <div className='w-full h-screen'>
        <div className='bg-blue-300 h-[10vh] mx-28'>
            <div className='flex justify-center items-center h-full'>
                <span className='mr-2 text-blue-ribbon-700 text-4xl'><GiAbstract014 /></span>
                <span className='mr-auto text-black text-3xl font-bold '> Hércules</span>
                <Link to={'/login'}>
                    <button class="bg-blue-ribbon-700 text-white active:bg-blue-ribbon-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        Ingreso
                    </button>
                </Link>
            </div>
        </div>
        <div className='mx-28 h-[50vh] flex'>
            <div className='bg-red-200 flex-1'>left</div>
            <div className='bg-yellow-400 flex-1'>right</div>
        </div>
        <div className='bg-green-200 mx-28 h-[40vh]'>cards</div>
    </div>
  )
}

export default LandingPage