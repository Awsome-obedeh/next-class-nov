import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link href='/'>Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/login">Login</Link>
      <Link href="/profile">profile</Link>
    </div>
  )
}

