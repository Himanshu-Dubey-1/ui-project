import Home from '@/components/Accordion/Accordion'
import React from 'react'


const Faqsection = () => {
  return (
    <div>
        {/* 1st div */}
        <div className='md:px-28 md:pt-32 bg-[#F9FAFB] md:pb-16 '>
           <div className=''>

             <div className='md:ml-5 ml-12 text-xl text-[#6938EF] font-bold'>FAQs</div>

              <div className=' justify-between md:flex text-center mt-4 mb-14 mx-5'>
                  <p className='text-4xl md:text-5xl font-bold md:mb-0 mb-5'>Not found What you need? </p>
                  <p className='text-xl md:mr-20'>Have questions? we're here to help</p>
              </div>

              <div className='md:flex text-center ml-5 gap-6'>
                  <button className=' bg-[#7F70ED] 
                  md:mb-0 mb-3 font-bold text-white px-5 py-3 text-lg border border-[#7F56D9] rounded-lg'>Chat with our Team</button>
                  <button className='md:mb-0 mb-3 border bg-white text-lg font-bold text-black px-5 py-3 border-[#D0D5DD] rounded-lg'> schedule a 1:1 call with founder</button>
              </div>

           </div>

        </div>

        {/* 2nd div */}
        <div className='md:p-16'>
          <div className='md:flex justify-between md:pl-16'>

            <div className='max-w-lg md:p-0 p-10'>
              <h1 className='text-[#6938EF] font-bold mb-4'>Support</h1>
              <p>Everything You need to know about the product and billing.Can't find the answer you're looking for?<br />
                please chat to our friendly team
              </p>
            </div>

            <div className='w-full md:pl-24 pl-4'>
            <Home /> 
            </div>

          </div>
        </div>

        {/* 3rd div  */}
        <div className=' md:p-5 bg-[#3E1C96] text-white'>
          <div className='md:flex justify-between md:px-44 px-10 py-10'>

            <div className='text-center sm:text-left'>
              <h1 className='text-xl font-bold mb-3'>Join our Family</h1>
              <p className='text-xl'>we'll send you a nice letter once per week. no spam.</p>
            </div>

            <div className='md:flex text-center mt-10 md:mt-0'>
              <input type="text" placeholder='Enter your email' 
              className=' text-black rounded-md px-4 md:mb-0 mb-5 h-12 md:mr-4'/>
              <button className='bg-[#7F70ED] border border-[#7F56D9] h-12 rounded-md md:px-4 px-10'>Subscribe</button>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Faqsection