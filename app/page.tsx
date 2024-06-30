import Grid from '@/Components/Grid'
import Hero from '@/Components/Hero'
import { FloatingNav } from '@/Components/ui/FloatingNavbar'
import React from 'react'
import { FaContao, FaHome, FaInfo, FaRProject } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={
          [
            { name: 'Home', link: '/', icon: <FaHome /> },
            { name: 'About', link: '#about', icon: <FaInfo /> },
            { name: 'Projects', link: '#projects', icon: <FaRProject /> },
            { name: 'Contact', link: '#contact', icon: <FaContao /> }
          ]
        } />
        <Hero />
        <Grid />
      </div>
    </main>
  )
}
