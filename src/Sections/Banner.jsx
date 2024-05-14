import { MdOutlineHub } from "react-icons/md";
import { FaBuildingUser } from "react-icons/fa6";
import { SiOnlyoffice } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Banner = () => {
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
    <div className="w-full min-h-screen lg:h-screen bg-gradient relative -z-50">
        <img src="/src/assets/images/bgpattern.png" alt=""  className="absolute w-full h-full"/>
      <div className="contain flex gap-0 lg:gap-5 h-full z-20 flex-col lg:flex-row items-center px-2 md:px-3 lg:px-0">
        <div className="basis-1/2 mb-20 z-20 mt-12 lg:mt-0">
            <h4 className="text-xl font-semibold text-indigo-800"  data-aos="zoom-in-right">We Have 300,000+ Live Jobs</h4>
            <h1 data-aos="zoom-in-up" className="text-[3.35rem] md:text-[4.8rem] lg:text-[4.3rem] 2xl:text-[5rem] leading-[3.7rem] md:leading-[5.5rem] lg:leading-[5.5rem] font-semibold">Your <span className="text-indigo-800">Dream</span> Job Is Waiting for You</h1>
            <div className="w-[90%] gap-5 lg:gap-2 2xl:gap-10 md:mt-20 2xl:mt-28 hidden md:flex">
                <div data-aos="fade-up-right" className="w-full h-40 bg-white relative rounded-md flex flex-col justify-end items-center text-center pb-3 leading-tight shd">
                    <div className="w-20 h-20 flex justify-center items-center text-white bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2 -top-9 shd">
                        <MdOutlineHub className="text-4xl"/>
                    </div>
                    <h1 className="text-[3rem] font-bold">98+</h1>
                    <h1 className="text-lg font-semibold">Jobs For Countries</h1>
                </div>
                <div data-aos="fade-up" className="w-full h-40 bg-white relative rounded-md flex flex-col justify-end items-center text-center pb-3 leading-tight shd">
                    <div className="w-20 h-20  flex justify-center items-center text-white bg-orange-500 rounded-full absolute left-1/2 transform -translate-x-1/2 -top-9 shd">
                        <SiOnlyoffice className="text-4xl"/>                        
                    </div>
                    <h1 className="text-[3rem] font-bold">12K+</h1>
                    <h1 className="text-lg font-semibold">Companies Jobs</h1>
                </div>
                <div data-aos="fade-up-left" className="w-full h-40 bg-white relative rounded-md flex flex-col justify-end items-center text-center pb-3 leading-tight shd">
                    <div className="w-20 h-20  flex justify-center items-center text-white bg-sky-500 rounded-full absolute left-1/2 transform -translate-x-1/2 -top-9 shd">
                        <FaBuildingUser className="text-4xl"/>
                    </div>
                    <h1 className="text-[3rem] font-bold">3K+</h1>
                    <h1 className="text-lg font-semibold">Jobs Done</h1>
                </div>                
            </div>
        </div>
        <div className="basis-1/2 z-20">
            <img data-aos="flip-left" src="/src/assets/images/slider4.png" alt=""  className="w-full"/>
        </div>
      </div>
    </div>
  )
}

export default Banner
