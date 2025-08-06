import React from 'react'
import Link from 'next/link'
import { Button } from './components/ui/button'

const notFoundPage = () => {
  return (
 <div className="min-h-screen flex flex-col items-center justify-center text-center bg-black text-white px-4">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">The realm you&apos;re seeking doesn’t exist.</p>
      <Button className='bg-white p-4'>
      <Link href="/" className="text-gray-800 ">Return to Home</Link>
      </Button>
    </div>  
    )
}

export default notFoundPage