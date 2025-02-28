import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { sections } from './components/Navbar'
import video from './assets/shopify-intro.webm'
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

const newArr = [
'big thing',
'one to watch',
'category creator',
'unicorn startup',
'household name',
'global empire',
'solo slier',
'store they line up for'
]

function NewTextSpitter(){
  const [seed, setSeed] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (seed == 7) {
        setSeed(0);
      } else {
        setSeed((prev) => prev + 1);
      }      
    }, 3500);

    return () => clearTimeout(timeout);
  }, [seed]); 

  return(<>

<div className=' w-full  '>
            <div className=' overflow-hidden h-28 animate-lopin gap-8 flex'>
            { newArr[seed].split(" ").map((ele, index)=>(
            <span id={index}  className={` animate-hideout overflow-hidden leading-none [animation-delay:${index}00ms]`}>
            {ele} 
          </span>
            ))}
            </div>

      
      
      </div>
  </>)
}

function App() {
 
  return (
    <div className='h-[10000px]'>
      
    <Navbar />
    <div  className="h-screen max-h-[780px] relative flex items-center justify-center text-white text-3xl font-bold">
    <video aria-label="Footage of Shopify merchants making sales, managing their business, and celebrating their success." autoplay="" class="absolute size-full object-cover" loop={true} muted="" playsinline="" src={video}></video>
    
    <div className="h-full relative max-w-[1450px] w-full flex flex-col items-center justify-center text-white font-roboto text-[96px] font-light z-2 tracking-[-8px]">

      <div className='w-full  flex'>
        Be the next
      </div>
    <NewTextSpitter />

    <div className='w-[20px]'>
      Dream big, build fast, add grow far on Shpify.
    </div>

    </div>
    </div>
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
