import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-gray-200 h-[3rem] rounded-full flex items-center justify-between z-[999] relative " >
        <Link className=" text-black font-bold mx-5" href={"/"}> Quick codees
        </Link> 
        <Link className="mx-1.5 bg-gray-50 h-10 w-[6rem] flex items-center rounded-full px-2 border shadow-lg"  href={"/create"}>Add Topic
        </Link>

    </nav>
  )
}
