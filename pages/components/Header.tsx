import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='flex justify-between p-3 max-w-7xl mx-auto'>
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 cursor-pointer object-contain"
            src="https://links.papareact.com/yvf"
            alt=""
          />
        </Link>
        <div className="hidden  items-center space-x-5 md:inline-flex">
          <h3 className="cursor-pointer">About</h3>
          <h3 className="cursor-pointer">Contact</h3>
          <h3 className="cursor-pointer rounded-full bg-green-600 px-4 py-1 border text-white hover:bg-white hover:text-green-600  hover:border-green-600 hover:font-semibold transition-transform">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-500">
        <h3>SIgn In</h3>
        <h3 className="rounded-full border px-4 py-1 border-green-600" >Get Started</h3>
      </div>
    </header>
  )
}

export default Header
