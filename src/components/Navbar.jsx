import Logo from '../assets/shopify_logo.svg?react'

import DownIcon from "../assets/down-arrow.svg?react"
import { act, use } from 'react'
import { useState, useEffect } from 'react'
import { StartLogo } from '../assets/Start';
import { SellLogo } from '../assets/Sell';
import { ManageLogo } from '../assets/Manage';
import { MarketLogo } from '../assets/Market';
import Arrow from '../assets/arrow.svg?react';

export const sections = ["Home", "About", "Services", "Contact"];

export function Navbar (){
    const [bgActive, setBgActive] = useState(false);
    const [navBg, setNavBg] = useState("bg-transparent");
    const [activeElement, setActive] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 10) {
            setNavBg("bg-black"); 
          } else {
            setNavBg("bg-transparent"); 
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
    return(
        <>
        <div  className='relative'>
             <nav id="Navbar" className={`fixed w-full items-center bg-black justify-center gap-[446px] px-[90px] border-[#3d3d3d] duration-150 z-10 text-white flex ${activeElement?"border-b-1  ":navBg}`}>
            <div className='flex items-center gap-13'>
                <Logo className='w-[125px]' />
                <div className='flex gap-[26px] items-center'>
                <NavElement Active={activeElement} SetActive2={setActive} type={1} Name={"Solutions"} />
                <NavElement Active={activeElement} SetActive2={setActive} type={2} Name={"Pricing"} />
                <NavElement Active={activeElement} SetActive2={setActive} type={1} Name={"Resources"} />
                <NavElement Active={activeElement} SetActive2={setActive} type={2} Name={"Enterprise"} />
                <NavElement Active={activeElement} SetActive2={setActive} type={1} Name={"What's new"} />
               
                </div>
            </div>
    
            <div className='flex  gap-8 items-center '>
                
                <NavElement type={2} Name={"Log in"} />
                <button className='font-roboflex font-[600] h-11 px-6 text-black bg-white rounded-3xl'>Start free trial</button>
                
            </div>
            
             </nav>
             <div className={` pt-[30px] z-1 fixed w-full items-center top-[73px] bg-black border-gray-700 justify-center  duration-150 text-white flex 
             ${activeElement?"block":"hidden" }`}>

            <div className='relative font-roboto grid grid-flow-col gap-6 justify-center  w-full pb-8'>
     
          <NavComps logo={<StartLogo />} name={"Start"} arr={TextBoxArr1} />
          <NavComps logo={<SellLogo />} name={"Sell"} arr={TextBoxArr2} />
          <NavComps logo={<MarketLogo />} name={"Market"} arr={TextBoxArr3} />
          <NavComps logo={<ManageLogo />} name={"Manage"} arr={TextBoxArr4} />


            <div className='absolute grid grid-cols-4 divide-x-1 gap-6  px-22 text-[17px] bottom-[-94px] w-full bg-[#18181b] border-t-2 border-[#2d2d2d]  w-full py-[22px]'>
                <div>
                  <span>Shopify Developers</span>
                  <div className='text-[15px] text-zinc-300'
                  >Build with Shopify's powerful APIs</div>
                </div>
                <div>
                  <span>Plus</span>
                  <div className='text-[15px] text-zinc-300'>A commerce solution for growing digital brands</div>
                </div>
                <div>
                <span>All Products</span>
                <div className='text-[15px] text-zinc-300'>Explore all Shopify products & features</div>
                </div>
            </div>
            
          </div>
        </div>
 
          
        </div>
      
        </>
       
    )
}



function NavCompTop({Logo, Name}){
  return (
  <div className='flex tracking-wide text-xl items-center pb-4  gap-3 border-b-[1.6px] border-[#3d3d3d] '>
    {Logo}
    <span>
    {Name}
    </span>   
  </div> 

  )}

function NavCompTextBox({title, sub}){
  const [visible, setVisible] = useState("invisible")
  return(
    <div  className='flex flex-col  cursor-pointer'>
    <div onMouseEnter={()=>setVisible("visible")} onMouseLeave={()=>setVisible("invisible")}className='text-[17px]/6 flex items-center '>{title}  
      <span className={` translate-y-[1px] duration-300 ${visible=="visible"?"translate-x-3":""}`} >
        <Arrow className={`w-4   ${visible}`} />
      </span>
    </div>
    <div className='text-[14.8px] hover:text-gray-100 text-gray-300 mb-[21px]'>{sub}</div>
    </div>)
}

const TextBoxArr1 = [
  {title: "Start your business",
    sub:"Build your Brand"
  },{title: "Create your website",
    sub:"Online store editor"
  },{title: "Customize your store",
    sub:"Store themes"
  },{title: "Find business apps",
    sub:"Shopify app store"
  },{
    title:"Own you site domain",
    sub:"Domains & hosting"
  },{
    title:"Explore free business tools",
    sub:"Tools to run your business"
  }
];
const TextBoxArr2 = [
  {title: "Sell your products",
    sub:"Sell online or in person"
  },{
    title:"Sell online",
    sub:"Grow your business online"
  },{
    title:"Sell across channels",
    sub:"Reach millions of shoppers and boost sales"
  },{
    title:"Sell in person",
    sub:"Point of Sale (POS)"
  },{
    title:"Sell globally",
    sub:"International sales"
  },{
    title:"Sell wholesale & direct",
    sub:"Business-to-business (B2B)"
  }
];
const TextBoxArr3 = [
  {
    title:"Market your business",
    sub:"Reach & retain customers"
  },{
    title:"Market across social",
    sub:"Social media integrations"
  },{
    title:"Nurture customers",
    sub:"Shopify Email"
  },{
    title:"Know your audience",
    sub:"Gain customer insights"
  },
];
const TextBoxArr4 = [
  {
    title:"Manage your business",
    sub:"Track sales, orders & analytics"
  },{
    title:"Measure your performance",
    sub:"Analytics and Reporting"
  },{
    title:"Manage your stock & orders",
    sub:"Inventory & order management"
  },
];

function NavComps({logo, name, arr}){
  return (
    <div>
    <NavCompTop Logo={logo} Name={name} />
    <div className='flex flex-col w-[336.8px] mt-6'>
    {arr.map(box=><NavCompTextBox title={box.title} sub={box.sub} />)}    
    </div>
    </div>
  )
}


function NavElement({type, Name, Active, SetActive2}){
   
  function Action(){
        if(Active==Name&&type==1 ){
        SetActive2(null);
        }else if(type==1){
         SetActive2(Name)
        }else{
          SetActive2(null);          
        }
    }   

    return(
        <div onClick={()=>Action()} className={`text-[15.7px] flex  ${type===1&&Active===Name?"border-b-3 pb-[20px] pt-[23px]  ":"py-[23px] border-b-0 hover:underline"}   underline-offset-3 items-center cursor-pointer gap-[3.8px] flex-row translate-y-[1px] border-white`}>
            <span className=' font-roboto '>
            {Name}
            </span>
            {type=="1"?<DownIcon className={`w-6 h-6  ${Active===Name?"-scale-y-100 ":""} duration-500`} />:""}
        </div>
        )
}

