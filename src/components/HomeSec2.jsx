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
   
export function HomeSection2(){
    return (
  <div  className="h-screen max-h-[780px] relative flex flex-col pt-30 items-center bg-[#02090a] border-t-1 border-[gray]/40 rounded-4xl -translate-y-7 justify-center">

     <h1 className=" max-w-[1450px] w-full px-2  flex flex-col text-white font-rale text-[70px]  z-2 tracking-normal  "  style={{wordSpacing: "-10px",textShadow: "-2px 0px 1px rgba(255, 255, 255, 0.8), 1.3px 0px 1px rgba(255, 255, 255, 0.8), 0px -1.5px 1px rgba(255, 255, 255, 0.8)", fontWeight: 300}}>
      The one commerce platform behind it all
     </h1>
     
     

      <div className="h-full max-w-[1450px] w-full px-2 flex flex-col text-white font-roboto text-[96px] font-light z-2 ">
  
  
      <div className='w-[280px] leading-tight tracking-[-1px] text-[22px] items-start font-noto flex mt-2 mb-7 px-2 font-light'>
        Dream big, build fast, add grow far on Shopify.
      </div>
      <div className='flex justify-between w-full'>
  
      <div className='w-[500px] flex tracking-[-2px] text-2xl items-center font-roboto  mb-2 px-2 font-thin gap-5'>
        
      <button className='font-roboto font-medium w-43 h-14 text-[18px]  tracking-[-1px] text-black bg-white rounded-4xl'>Start free trial</button>
      <div className=' text-[14px] tracking-normal font-medium '>
        Get 3 days free 
        <p>then 3 months for 20/month</p>
      </div> 
      </div>
      </div>
      
      
      
      </div>
      <div className='fixed top-50 z-30 left-40'>



      </div>
      </div>
    )
  }
  
