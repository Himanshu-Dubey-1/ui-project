"use client"
import React from 'react'
import Image from 'next/image'
import Msme from "@/images/MSME.png"
import Aicte from "@/images/AICTE.png"

const Recognisation = () => {
  return (
    <div className='flex items-center justify-center flex-col h-80 '>
        <div className='font-bold text-2xl'>
            We Are Recognised By
        </div>
        <div className='justify-center w-full'>
        <div className='flex justify-evenly '>
        <Image src={Msme}  
                    alt="android"
                    className='h-24 w-24 md:h-40 md:w-40'/> 
        <Image src={Aicte}  
                    alt="android" 
                    className='h-24 w-24 md:h-40 md:w-40'/> 
        <Image src={Msme}  
                    alt="android"
                    className='h-24 w-24 md:h-40 md:w-40'/> 
        
        </div>
        </div>
    </div>
  )
}

export default Recognisation