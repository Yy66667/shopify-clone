import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { sections } from './components/Navbar'
import { HomeSection1 } from './components/HomeSec1'
import { HomeSection2 } from './components/HomeSec2'
/*
big thing
One to watch
category creator
unicorn startup
household Name
global empire
solo slier
store they line up for

bg-red-200 [animation-delay:0ms] overflow-hidden tracking-tighter gap-8 flex

overflow-hidden leading-none 
*/



function App() {

 
  return (
    <div className='h-[10000px]'>
      
    <Navbar />
    
    <HomeSection1 />
    <HomeSection2 />
    <div className="">
        {sections.map((title, index) => (
          <section
            key={index}
            id={title}
            className="h-screen flex items-center justify-center text-white text-3xl font-bold"
            style={{
              background: index % 2 === 0 ? "#1E293B" : "#334155", // Alternating BG colors
            }}
          >
            {title} Section
          </section >

        
        ))}
      
      </div>
    </div>
  )
}
export default App
