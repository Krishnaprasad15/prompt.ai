"use client";
import Link from 'next/link'
import Image from 'next/image'
import { useState,useEffect } from 'react'
import {signIn,signOut,useSession , getProviders} from 'next-auth/react'
const Nav = () => {
  const isLoggedIn = true;

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image src='/assets/images/logo.svg' alt='prompt.ai  Logo' className='object-contain' height={30} width={30}/>
        <p className='logo_text'>Prompt.ai</p>
      </Link>
      {/* Desktop nav */}
      <div className='sm:flex hidden'>
        {isLoggedIn? 
        (<div className='flex gap-3 md:gap-5'>
          <Link href='/create-prompt' className='black_btn'>
            Create Post
          </Link>
          <button type='button' onClick={signOut} className='outline_btn'>Sign Out</button>
          <Link href='/profile'>
            <Image src='/assets/images/logo.svg' width={37} height={37} className='rounded-full' alt='profile'/>
          </Link>
        </div>):(<>
          
        </>)}
      </div>
    </nav>
  )
}

export default Nav
