import React from 'react'
import FAQs from './Accordian';
import Footer from './Footer';
import Intro from './Intro';
import Navbar from './Navbar'
import SolarEventsCarousel from './SolarEvents';
const HomePage = () => {
    const active= "home";
  return (
    <>
    <div className="bg-[url('https://upload.wikimedia.org/wikipedia/commons/1/19/Solar_System_true_color.jpg')] bg-no-repeat bg-fixed bg-cover h-[100vh]">
    <Navbar active={active} />
    <div className="bg-[url('https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXIlMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D')] text-[#FAEBD7] flex justify-center align-center h-[90vh] items-center flex-col gap-[5rem] font-extrabold ">
        <h1 className='text-[4rem] '>Beyond the Horizon</h1>
        <p className='italic text-3xl '>A Journey through the Solar System and Eclipse Phenomena</p>
      </div>
      
    </div>
    <div className="bg-[url('https://upload.wikimedia.org/wikipedia/commons/1/19/Solar_System_true_color.jpg')] bg-no-repeat bg-fixed bg-cover h-full w-full">
        <Intro/>
        <SolarEventsCarousel/>
        <FAQs/>
        <Footer/>
    </div>
  

    </>

  )
}

export default HomePage