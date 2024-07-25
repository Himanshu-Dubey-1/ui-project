// components/Testimonial.tsx
"use client";
import React from 'react';
import Image from 'next/image';


interface TestimonialProps {
  name: string;
  testimonial: string;
  designation: string;
  highlighted: boolean;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, testimonial, designation, highlighted,image }) => {
  return (
    <div className={`transition-all duration-300 ${highlighted ? 'opacity-100' : 'opacity-30 text-slate-900'}`}>
        <h1 className='text-yellow-400 text-xl mb-8'>★★★★★</h1>
      <p className=" md:text-4xl text-3xl font-medium pb-8">{testimonial}</p>
      <div className='flex'>
      <Image src={image} alt={name} width={48} height={48} className="w-16 h-16 rounded-full mr-3 mt-4" />
      <div>
      <h3 className=" font-semibold text-lg mt-4">{name}</h3>
      <p className="">{designation}</p>
      </div>
      </div>
    </div>
  );
};

export default Testimonial;
