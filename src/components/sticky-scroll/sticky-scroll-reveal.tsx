"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Recognisation from "../recognisation/recognisation";
import { useInView } from "react-intersection-observer";

export const StickyScroll = (
  {
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  
  const { ref : myRef, inView : myelement} = useInView();

  
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    
    container: ref,
    offset: ["start start", "end start"],
     
  });
 


  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--violet-900)",
    "var(--violet-900)",
    "var(--violet-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  const scroll = `h-[35rem] overflow-y-scroll no-scrollbar flex justify-center relative space-x-44 rounded-md py-10 px-0`
  const noscroll = `h-[35rem] overflow-hidden no-scrollbar flex justify-center relative space-x-44 rounded-md px-0 py-10`

  return (<>
  <div>
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className={myelement? scroll:noscroll}
      // className="h-[35rem] overflow-y-scroll no-scrollbar flex justify-center relative space-x-44 rounded-md p-10"
      ref={ref}
    
    >
      <div className="relative flex items-start px-16">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-4xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-xl text-slate-300 sm:max-w-md max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
              <button className="border border-[#7F56D9] bg-[#7F6EFC] text-white rounded-lg px-6 py-3 mt-6">Join Today</button>
            </div>
          ))}
          <div />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-[#5133A0] sticky top-20 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
      
    </motion.div>
    </div>
    <div ref={myRef}>
      <Recognisation />
    </div>
    </>
  );
};
