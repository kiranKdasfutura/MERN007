import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-slate-200  shadow-lg'>
       <div className='p-3 flex justify-between max-w-6xl mx-auto items-center'>
        <Link to='/'>
       <h1 className='font-bold flex flex-wrap text-sm sm:text-xl '>
            <span className='text-slate-500'>Kera</span>
            <span className='text-slate-700'>Lite</span>
        </h1>
        </Link>
        <form className='bg-slate-50 rounded-md flex p-3 items-center'>
            <input type="text" 
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            />
            <FaSearch className='text-slate-500'/>
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
          <li className='hidden sm:inline hover:underline text-slate-700'>Home</li>
          </Link>
          <Link to='/about'>
          <li className='hidden sm:inline hover:underline text-slate-700'>About</li>
          </Link>
          <Link to='/sign-in'>
          <li className=' hover:underline text-slate-700'>SignIn</li>
          </Link>
        </ul>
       </div>
    </header>
  )
}
