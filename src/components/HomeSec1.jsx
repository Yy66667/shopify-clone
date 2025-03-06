import { useState, useEffect, useRef } from 'react';

import v1 from '../assets/shopify-intro.webm'

import {Volume2, VolumeX, Maximize } from "lucide-react";

import Play from "../assets/play.svg?react"
import Pause from "../assets/pause.svg?react"
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
                <div className=' translate-y-[-12px] overflow-hidden h-28 gap-3 flex'>
                { newArr[seed].split(" ").map((ele, index)=>(
                <span id={index}   style={{opacity:0,translateY: "120px", animationDelay: `${index * 100}ms` }}  className={`px-1 animate-hideout overflow-hidden leading-none `}>
                {ele} 
              </span>
                ))}
                </div>
    
          
          
          </div>
      </>)
    }
    
    function NavCompTextBox() {
      const [moveClass, setMoveClass] = useState("translate-x-0 opacity-100");
      const [visible, setVisible] = useState(false);
    
      useEffect(() => {
        if (!visible) return; // Don't animate when not hovered
    
        const timeout = setTimeout(() => {
          setMoveClass("translate-x-[10px] opacity-0 text-white");
    
          setTimeout(() => {
            setMoveClass("translate-x-[10px] opacity-0 text-white");
    
            setTimeout(() => {
              setMoveClass("translate-x-[-10px] opacity-0 text-white");
    
              setTimeout(() => {
                
              setMoveClass("translate-x-[0px] opacity-100 text-white");
              }, 100);
            }, 100);
          }, 300);
        }, 100); // Shorter delay for hover interaction
    
        return () => clearTimeout(timeout);
      }, [visible]);
    
      return (
          <div
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            className="text-[18px] flex flex-row w-65 h-14  font-normal tracking-[0.3px] duration-400 active:bg-white active:text-black  text-gray-200/80 hover:bg-white/12 justify-center rounded-4xl gap-3 items-center overflow-hidden"
          >
            <div className={`flex duration-200 ${moveClass}`}>
              <Play className="w-2 h-2 " />
            </div>
    
          <div className=' font-roboto font-[500]  active:text-black/30  text-white'>
    
          Why we build Shopify
          </div> 
          </div>
        
      );
    }

export function HomeSection1(){
    return (
  <div  className="h-screen min-h-[800px] relative flex items-center justify-center">
      <video aria-label="Footage of Shopify merchants making sales, managing their business, and celebrating their success." autoplay="" class="absolute size-full object-cover" loop={true} muted="" playsinline="" src={v1} />
      
      <div className="h-full top-68 absolute max-w-[1450px] w-full px-3 flex flex-col text-white font-roboto text-[95px] font-light z-2 tracking-[-2px]">
  
      <div className=' [word-spacing:-4px]'>
        Be the next
      </div>
      <NewTextSpitter />
  
      <div className='w-[290px] leading-[28px] tracking-[-1px] text-[24.5px] items-start font-roboto flex mt-5 mb-8 px- font-light'>
        Dream big, build fast, add grow far on Shopify.
      </div>
      <div className='flex justify-between w-full'>
  
      <div className='w-[500px] flex tracking-[-2px] text-2xl items-center font-roboto  mb-2 font-thin gap-4'>
        
      <button className='font-roboto font-medium w-42 h-[58px] text-[19px] hover:bg-white/90 tracking-[0px] text-black bg-white rounded-4xl'>Start free trial</button>
      <div className=' text-[14px] tracking-[-0.1px] font-roboto font-normal leading-[20px] '>
        Get 3 days free 
        <p>then 3 months for ₹20/month</p>
      </div> 
      </div>
      <NavCompTextBox />
      </div>
      
      
      
      </div>
      <div className='fixed top-50 z-30 left-40'>



      </div>
      </div>
    )
  }
  
