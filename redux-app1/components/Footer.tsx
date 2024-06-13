import React from 'react'

const Footer = () => {
    const fullYear = new Date().getFullYear();
  return (
    <footer className='bg-black text-white p-2 text-center'>
        <p className='font-bold'>&copy; {fullYear}</p>
    </footer>
  )
}

export default Footer