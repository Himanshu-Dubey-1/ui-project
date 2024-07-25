// pages/index.tsx
"use client"
import { useState } from 'react';
import Head from 'next/head';

type AccordionItemProps = {
  title: string;
  content: string;
};

const AccordionItem = ({ title, content }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b">
      <button
        onClick={toggleOpen}
        className="w-full text-left text-black font-bold text-xl p-4 bg-white hover:bg-gray-300 focus:outline-none"
      >
        {title}
      </button>
      {isOpen && <div className="p-4 text-lg bg-white">{content}</div>}
    </div>
  );
};

const Home = () => {
  const items = [
    {
      title: 'What is Kampkode?',
      content: 'KampKode is an edutech platform dedicated to empowering engineering students with the skills and knowledge they need to excel in their careers. We offer a range of programs, including Campus Recruitment Training, Internships, Projects, and more.',
    },
    {
      title: 'Who can benefit from KampKode?',
      content: 'KampKode is principally tailored for students, yet our programs welcome all individuals eager to enhance their skills and embark on a career in the technology sector. Whether you are looking to start or kickstart your journey in the tech industry, KampKode is the ideal platform for you.',
    },
    {
      title: 'Are the Trainers at Kampkode experienced?',
      content: 'Yes, our trainers are experts in their respective fields with extensive industry experience. They bring practical knowledge and insights to our training programs.',
    },
    {
      title: 'Is the learning material accessible online?',
      content: 'Yes, all course materials and resources are available digitally on our platform. You can access them at any time, making learning flexible and convenient',
    },
    {
      title: 'What makes KampKode affordable?',
      content: 'What makes KampKode affordable? We believe in making quality education accessible to everyone. KampKode is pricing structure is designed to be budget-friendly, ensuring that you receive excellent training without breaking the bank.',
    },
    {
      title: 'What types of assessments are offered?',
      content: 'We offer a variety of assessments, including quizzes and tech assessments. These tools help you evaluate your knowledge and skills and receive valuable feedback.',
    },
    {
      title: 'Can I track my progress and performance on your platform?',
      content: 'Yes, we provide tools for tracking your progress, such as viewing quiz scores and completion rates. This helps users monitor their learning journey.',
    },
    {
      title: 'Is the content on your platform updated regularly?',
      content: 'Yes, we regularly update our content to ensure it remains relevant and aligned with current educational standards. Users can usually receive updates when they have an internet connection.',
    },
  ];

  return (
    <div>
      
      <main className="w-full text-left">
       
        <div className="max-w-2xl mx-auto">
          {items.map((item, index) => (
            <AccordionItem key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
