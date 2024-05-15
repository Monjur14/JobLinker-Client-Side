import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Sponsors = () => {
    useEffect(() => {
        AOS.init({
          disable: false,
          startEvent: 'DOMContentLoaded',
          initClassName: 'aos-init',
          animatedClassName: 'aos-animate',
          useClassNames: false,
          disableMutationObserver: false,
          debounceDelay: 50,
          throttleDelay: 99,
      
          offset: 120,
          delay: 0,
          duration: 1000,
          easing: 'ease',
          once: false,
          mirror: false,
          anchorPlacement: 'top-bottom',
        });
      }, []);
  return (
    <div>
        <div className='contain flex justify-between items-center py-14 lg:py-20 flex-col lg:flex-row'>
      <div className='text-2xl relative h-36'>
        <div className='h-36 w-36 bg-indigo-100 rounded-xl absolute transform rotate-45 -z-50'></div>
        <div className='z-50 relative top-10 left-10'>
            <h1>Trusted by more than</h1>
            <h1 className='font-semibold text-indigo-700'>100+ Companies</h1>
        </div>
      </div>
      <div className='flex items-center gap-10 flex-wrap justify-center mt-16'>
        <img  data-aos="flip-left" src="w1.png" alt="" className='w-44'/>
        <img data-aos="flip-right" src="w2.png" alt="" className='w-44'/>
        <img data-aos="flip-up" src="w3.png" alt="" className='w-44 hidden 2xl:block'/>
        <img data-aos="flip-left" src="w5.png" alt="" className='w-44'/>
        <img data-aos="flip-right" src="w6.png" alt="" className='w-44'/>
      </div>
    </div>
    <div className='w-full h-[500px] bg-last px-2 md:px-3'>
        <div className='contain flex flex-col justify-center h-full text-white'>
            <h1 data-aos="zoom-out" className='text-xl md:text-2xl'>Our Community</h1>
            <h1 data-aos="fade-up" className='text-[2.2rem] md:text-[3rem] max-w-[700px] 2xl:max-w-[800px] 2xl:text-[3.5rem] leading-tight mt-4 font-semibold'>Join our community of talented and professionals by applying for a job today!.</h1>
        </div>
    </div>
    </div>
  )
}

export default Sponsors
