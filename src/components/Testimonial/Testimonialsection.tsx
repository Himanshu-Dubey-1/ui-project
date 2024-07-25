// components/Testimonialsdiv.tsx
"use client";
import React, { useState } from "react";
import Testimonial from "./Testimonial";
import Aicte from "../../images/AICTE.png";
import Msme from "../../images/MSME.png";

const testimonials = [
  {
    name: "K.Sandhya Rani",
    testimonial:
      "KampKode is CRT program has significantly improved our students employability skills. We have witnessed a remarkable increase in the number of students placed in top companies.",
    designation: "Director IIIT, RGUKT RK Valley",
    image: Aicte,
  },
  {
    name: "JS.V.Prasad",
    testimonial:
      "Working with Kamp Kode has been a rewarding experience. Their internship programs have connected our students with industry-leading companies, giving them a taste of the real-world challenges.",
    designation: "Chairman GMR Institute of Technology.",
    image: Msme,
  },
  {
    name: "Dr.Vanki Penchalaiah",
    testimonial:
      "KampKode is commitment to enhancing engineering education is impressive. The hands-on project experiences they offer have boosted our students confidence and technical abilities.",
    designation: "Principal Aadisankara College of Engineering.",
    image: Aicte,
  },
  {
    name: "Dr.Prasanna Kumar",
    testimonial:
      "KampKode has brought a new level of convenience to our campus. Their on-campus training sessions have allowed our students to access high-quality education without the need to travel.",
    designation:
      "Dean of academics Sanketika Vidya Parishad Engineering College.",
    image: Msme,
  },
  {
    name: "A.Rajendra",
    testimonial:
      "KampKode is tech assessments have been invaluable in assessing our students knowledge and skills. KampKode is resources are a must-have for any engineering department.",
    designation: "CSE HOD Balaji Institute of Technology & Science.",
    image: Msme,
  },
  // Add more testimonials as needed
];

const Testimonialsdiv: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="py-14 bg-[#5133A0] items-center justify-center text-white">
     <div className="md:mx-10 overflow-hidden">
     <div className="md:flex justify-center md:ml-14 md:mr-[490px]">
        <div className=" flex items-center">
          <div>
            <button
              onClick={prevTestimonial}
              className=" px-3 py-2 absolute left-3 md:left-44 bg-white hidden md:block opacity-100 text-black rounded-full text-2xl transition-colors duration-300 z-10"
            >
              🡠
            </button>
          </div>
          <div className="max-w-96 flex">
            <div
              className="flex transition-transform  duration-500"
              style={{ transform: `translateX(-${currentIndex * 20}%)` }}
            >
              {testimonials.map((testimonial, index) => {
                const isHighlighted = index === currentIndex;
                return (
                  <div key={index} className="md:w-[50vw] w-[90vw] ml-6 md:ml-0 flex-shrink-0 mr-32">
                  
                    <div>
                    <Testimonial
                      name={testimonial.name}
                      testimonial={testimonial.testimonial} 
                      designation={testimonial.designation}
                      highlighted={isHighlighted}
                      image={testimonial.image}
                    />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <button
              onClick={nextTestimonial}
              className=" px-3 py-2 absolute right-3 md:right-44  text-2xl hidden md:block opacity-100 bg-white text-black rounded-full transition-colors duration-300 z-10"
            >
              🡢
            </button>
           
          </div>
          
        </div>
        <div className="pb-16 pt-6 md:hidden">
            <button
              onClick={prevTestimonial}
              className=" px-3 py-2 absolute left-6 bg-white opacity-100 text-black rounded-full text-2xl transition-colors duration-300 z-10"
            >
              🡠
            </button>

            <button
              onClick={nextTestimonial}
              className=" px-3 py-2 absolute left-24 text-2xl opacity-100 bg-white text-black rounded-full transition-colors duration-300 z-10"
            >
              🡢
            </button>
            </div>
      </div>
     </div>
    </div>
  );
};

export default Testimonialsdiv;
