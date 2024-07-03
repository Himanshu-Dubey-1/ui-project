"use client";
import Image from "next/image";
import hamburger from "../../../images/hamburger.png"
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../utils/cn";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

 const [navbar, setnavbar] = useState(false)

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex w-auto fixed top-7 inset-x-0 md:mx-10 mx-0 border drop-shadow-xl border-transparent dark:border-white/[0.2] rounded-2xl dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-3  items-center justify-between space-x-4",
          className
        )}
      >
      
       {/* div for LOGO  */}
      <div className="text-3xl">
        <span className="text-[#7D6EEB]">N</span>AV<span className="text-[#7D6EEB]">B</span>AR
      </div>

        {/* div for LIST  */}
        <div className="hidden md:block">

       
      <div className="flex gap-4 font-bold ">
      {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-[#1E003D] dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
      </div>
      </div>

        {/* div for BUTTONS  */}
       <div className="hidden md:block">
       <button className="border text-sm font-bold relative bg-[#F9F5FF] border-[#E9D7FE] dark:border-white/[0.2] text-[#6941C6] dark:text-white px-4 py-2 rounded-lg">
          <span>Login</span>
        </button>

        <button className="border text-sm text-white mx-2 font-bold relative bg-[#7F56D9] border-neutral-200 dark:border-white/[0.2] dark:text-white px-4 py-2 rounded-lg">
          <span>Sign Up</span>
        </button>
        
       </div>

      
        <Image src={hamburger}  
                    alt="hamburger"  width={40}height={40} 
                    className="block md:hidden" 
                    onClick={()=>setnavbar(!navbar)}
                    />
        {navbar ? 
        <div 
        className={cn(
          "w-auto mr-14 text-center fixed block md:hidden top-16 mx-0 inset-x-0  border drop-shadow-xl border-transparent dark:border-white/[0.2] rounded-2xl dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000]  py-2  items-center justify-between ",
          className
        )}>
          <div className="p-3 text-center items-center flex-col">
          {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex text-center justify-center mt-4 space-x-1 text-[#1E003D] dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="">{navItem.icon}</span>
            <span className="text-sm text-[#1E003D] font-bold">{navItem.name}</span>
          </Link>))}
          
          <br/>
          <button className="border text-sm font-bold mx-1 my-1 relative bg-[#F9F5FF] border-[#E9D7FE] dark:border-white/[0.2] text-[#6941C6] dark:text-white px-4 py-2 rounded-lg">
          <span>Login</span>
        </button>
            <br />
        <button className="border text-sm text-white mx-1 my-1 font-bold relative bg-[#7F56D9] border-neutral-200 dark:border-white/[0.2] dark:text-white px-4 py-2 rounded-lg">
          <span>Sign Up</span>
        </button>
        </div>
        </div>

         : false}

      </motion.div>
    </AnimatePresence>
  );
};
