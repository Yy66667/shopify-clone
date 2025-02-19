import Logo from '../assets/shopify_logo.svg?react'

import DownIcon from "../assets/down-arrow.svg?react"
import { use } from 'react'
import { useState, useEffect } from 'react'

export const sections = ["Home", "About", "Services", "Contact"];

export function Navbar (){
    const [bgActive, setBgActive] = useState(false);
    const [navBg, setNavBg] = useState("bg-transparent");

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 10) {
            setNavBg("bg-black"); 
          } else {
            setNavBg("bg-transparent shadow-none"); 
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
    return(
        <>
             <nav id="Navbar" className={`fixed w-full items-center justify-between px-[90px] py-[18px] duration-150 ${navBg} text-white flex`}>
            <div className='flex items-center gap-12'>
                <Logo className='w-[125px]' />
                <div className='flex gap-[28.8px] items-center'>
                <NavElement type={1} Name={"Solutions"} />
                <NavElement type={2} Name={"Pricing"} />
                <NavElement type={1} Name={"Resources"} />
                <NavElement type={2} Name={"Enterprise"} />
                <NavElement type={1} Name={"What's new"} />
               
                </div>
            </div>
    
            <div className='flex items-center relative w-56'>
                
                <NavElement type={2} Name={"Log in"} />
            

                <button className='font-noto px-6 top-[14px] absolute left-336 fixed py-[10px] text-black bg-white rounded-4xl'>Start free trail</button>
                
            </div>
        </nav>
      
        </>
       
    )
}

function NavElement({type, Name}){
    const [active, setActive] = useState(false);

    return(
        <div onClick={()=>setActive(a=>!a)} className={`text-[15px] flex  ${active&&type=="1"?"":"hover:underline"}   underline-offset-3 items-center cursor-pointer gap-[3.8px] flex-row translate-y-[1px]`}>
            <span className=' font-roboto '>
            {Name}
            </span>
            {type=="1"?<DownIcon className={`w-6 h-6 p-0 ${active?"-scale-y-100":""} duration-300`} />:""}
        </div>
        )
}

