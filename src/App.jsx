import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { sections } from './components/Navbar'

function App() {
  return (
    <div className='h-[10000px]'>
    <Navbar />
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
