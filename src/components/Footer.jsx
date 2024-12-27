import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const links = [
  { href: 'https://github.com/guru-projects', icon: <FaGithub/>},
  { href: 'https://www.linkedin.com/in/guru-m-guru/', icon : <FaLinkedinIn/>}
]
const Footer = () => {
  return (
    <footer className='w-screen bg-violet-300 py-4 text-black'>
  <div className='container mx-auto flex flex-col justify-between items-center gap-4 px-4 md:flex-row'>
    <p>&copy;Zentry 2024. All rights reserved</p>

    <div className='flex gap-8'>
      {links.map((link, index) => (
        <a href={link.href} key={index} target='_blank' className='text-black transition-colors hover:text-blue-50 duration-500 ease-in-out text-lg'>
        {link.icon}
        </a>
      ))}
    </div>

    <a href="#" className='hover:underline text-center text-sm md:text-right'>Privacy Policy</a>
  </div>
    </footer>
  )
}

export default Footer