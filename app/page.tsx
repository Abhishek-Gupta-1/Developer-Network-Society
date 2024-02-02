import { Component, useState } from 'react'
import AboutUs from './components/AboutUs'
import Bgimage from './components/Bgimage'
import Dashboard from '@/app/components/Dashboard'
import Mentors from './components/Mentors'
import {Footer} from './components/basic/Footer'
import Gallery from './components/Gallery'


export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col">
      <div className='border lg:max-w-[1600px]'>
        <div className='w-full'>
        <Dashboard />
        </div>
        
       <AboutUs />
       <Bgimage />
       <Mentors />
       <Bgimage />
       <Gallery />
       <Bgimage />
       <Footer />
       
        


      </div>
    </main>
  )
}