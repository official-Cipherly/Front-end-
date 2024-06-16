/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from '@/components/ui/button'
import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/navbar'
import Image from 'next/image'
import Link from 'next/link'
import './main.css'
import { useState } from 'react';
export default function Home() {
 
  return (
  <>
<section className='p-2 bg-white'>
<div className=" text-white py-2 px-4  flex justify-center items-center rounded-lg" style={{backgroundColor:"#ff9500"}} >
            <span className="mr-2">Free Courses ✨ Sale Ends Soon, Get It Now</span>
            <span>→</span>
        </div>

</section>
<Navbar/>

{/* section */}
<section style={{marginTop:"10%"}}>
<div className="bg-white shadow-lg p-2 mx-auto max-w-md">
    <div className="flex items-center text-center justify-between">
        <img src="images/light.png" alt="logo" className="mr-2 rounded-full h-8 w-8" />
        <h1 className="text-lg font-bold flex-grow max-w-auto">
            <span className='text-orange-400'>Secure</span> your undefined now
        </h1>
    </div>
</div>

<div className="text-center" style={{marginTop: "1%"}}>
    <h2 className="text-xl  font-medium" style={{color:"#818181"}}>Enroll in Online Cyber Security Workshops Today</h2>
    <p className="text-zinc-600 mb-6 " >Learn from Industry Experts and Enhance Your Skills.</p>
    <div className="flex justify-center space-x-4">
        <button className="bg-orange-400 text-white px-6 py-2 rounded-lg hover:bg-orange-500 transition duration-300">Explore Course</button>
        <button className="bg-transparent text-orange-400 border border-orange-400 px-6 py-2 rounded-lg hover:bg-orange-400 hover:text-white transition duration-300">View Pricing</button>
    </div>
</div>
</section>
<section>
<div className="flex justify-center items-center m-2 p-1">
  <Image
    src="/images/image.png"
    alt="Logo"
    width={1200} // Example width in pixels
    height={800} // Example height in pixels
    className="xl:w-2/3 xl:h-4/5 "
    objectFit="contain"
  />
</div>


</section>

{/* new section */}
<section>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div className="flex flex-col md:flex-row justify-between items-center">
    <div className="md:w-3/4">
      <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
      <p className="text-zinc-600 text-lg">
        Become a confident cybersecurity professional with our interactive curriculum. Learn
        critical thinking skills and in-demand knowledge at your own pace.
      </p>
    </div>
    <div className="md:w-1/4 flex justify-end mt-4 md:mt-0">
      <button className="bg-zinc-200 text-zinc-800 px-6 py-2 rounded-lg shadow hover:bg-zinc-300 transition duration-150">
        View All
      </button>
    </div>
  </div>
</div>

</section>


<section>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="relative bg-white rounded-lg shadow p-6">
      <div className="absolute top-0 right-0 text-orange-500 text-3xl font-bold m-3" style={{fontFamily:"cadiz",fontWeight:"bold",fontStyle:"italic"}}>01</div>
      <br/>
      <h3 className="font-semibold text-xl mt-2">Master In-Demand Skills</h3>
      <p className="mt-2 text-zinc-600">
        Master the latest cybersecurity concepts and techniques with our comprehensive courses.
        Cypherly gives you the sought-after skills.
      </p>
    </div>
    <div className="relative bg-white rounded-lg shadow p-6">
      <div className="absolute top-0 right-0 text-orange-500 text-3xl font-bold m-3" style={{fontFamily:"cadiz",fontWeight:"bold",fontStyle:"italic"}}>02</div>
      <br/>
      <h3 className="font-semibold text-xl mt-2">Become a Critical Thinker</h3>
      <p className="mt-2 text-zinc-600">
      Cybersecurity is dynamic. Cypherly&apos;s courses foster critical thinking to analyze threats
            and develop security solutions.      </p>
    </div>
    <div className="relative bg-white rounded-lg shadow p-6">
      <div className="absolute top-0 right-0 text-orange-500 text-3xl font-bold m-3" style={{fontFamily:"cadiz",fontWeight:"bold",fontStyle:"italic"}}>03</div>
      <br/>
      <h3 className="font-semibold text-xl mt-2">Interactive Learning Experience</h3>
      <p className="mt-2 text-zinc-600">
      Engage in interactive exercises, hands-on labs, and real-world scenarios to learn and
            retain cybersecurity concepts effectively.
      </p>
    </div>
    <div className="relative bg-white rounded-lg shadow p-6">
      <div className="absolute top-0 right-0 text-orange-500 text-3xl font-bold m-3" style={{fontFamily:"cadiz",fontWeight:"bold",fontStyle:"italic"}}>04</div>

      <br/>
      <h3 className="font-semibold text-xl mt-2">Build a Strong Foundation</h3>
      <p className="mt-2 text-zinc-600">
      Our curriculum is designed for learners of all levels. Whether you&apos;re a beginner or
            looking to advance your knowledge, Cypherly provides a solid foundation in cybersecurity.
      </p>
    </div>
    <div className="relative bg-white rounded-lg shadow p-6">
      <div className="absolute top-0 right-0 text-orange-500 text-3xl font-bold m-3" style={{fontFamily:"cadiz",fontWeight:"bold",fontStyle:"italic"}}>05</div>
      <br/>
      <h3 className="font-semibold text-xl mt-2">Learn at Your Own Pace</h3>
      <p className="mt-2 text-zinc-600">
      Cypherly&apos;s online platform offers flexible learning options. Take control of your
            learning journey and progress through the courses at a pace that suits your schedule.
      </p>
    </div>
    <div className="relative bg-white rounded-lg shadow p-6">
      <div className="absolute top-0 right-0 text-orange-500 text-3xl font-bold m-3" style={{fontFamily:"cadiz",fontWeight:"bold",fontStyle:"italic"}}>06</div>
      <br/>
      <h3 className="font-semibold text-xl mt-2">Join a Community of Learners</h3>
      <p className="mt-2 text-zinc-600">
      Join our community to connect, learn, and grow with fellow cybersecurity enthusiasts.
      </p>
    </div>


  </div>
</div>


</section>




<section  >
<div className="mx-auto " style={{width: "80%"}}>

  <section>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-3/4">
          <h2 className="text-2xl font-semibold mb-4">Course Brief</h2>
          <p className="text-zinc-600 text-lg">
            This online course by Cypherly equips you with the knowledge and skills to navigate the digital world confidently.
            Whether you&apos;re new to cybersecurity or looking to upskill, our interactive program will...
          </p>
        </div>
        <div className="md:w-1/4 flex justify-end mt-4 md:mt-0">
          <button className="bg-white text-zinc-800 px-6 py-2 rounded-lg shadow hover:bg-zinc-300 transition duration-150">
            View Details
          </button>
        </div>
      </div>
    </div>
  </section>

  <section className="h-screen flex flex-col">
  <div className="flex flex-col sm:flex-row flex-1">
    <div className="w-full sm:w-1/2 p-8 relative bg-white">
      <img src="/images/courseBrief.png" alt="Cyber Security Course" className="rounded-lg mb-4" />
      <div className="flex space-x-2 mb-4">
        <span className="bg-zinc-200 text-zinc-800 text-xs font-semibold px-4 py-2 rounded-full">6 Weeks</span>
        <span className="bg-zinc-200 text-zinc-800 text-xs font-semibold px-4 py-2 rounded-full">Advance</span>
      </div>
      <h2 className="text-2xl font-bold mb-2">Cyber Security</h2>
      <p className="text-zinc-700 mb-4">
        Cypherly offers a comprehensive curriculum, designed to empower you to navigate the digital world with confidence,
        transforming you from a cybersecurity novice to a confident professional.
      </p>
    </div>

    <div className="border-r-2 border-orange-500 hidden sm:block" ></div>

    <div className="w-full sm:w-1/2 bg-white p-8 relative flex flex-col justify-between">
      <div>
        <div className="mb-6">
          <h1 className="text-4xl font-bold">₹7999</h1>
        </div>
        <div className="text-left mb-4">
          <h3 className="text-lg font-semibold">Available Features</h3>
        </div>
        <div className="rounded-lg mb-4">
          <ul className="space-y-2">
          <li className="flex items-center border p-4">
                <img src="/images/right.png" alt="Checkmark" className="w-6 h-6 text-green-500 mr-2" />
                Unlimited access to the course.
              </li>
              <li className="flex items-center border p-4">
                <img src="/images/right.png" alt="Checkmark" className="w-6 h-6 text-green-500 mr-2" />
                Unlimited course materials and resources.
              </li>
              <li className="flex items-center border p-4">
                <img src="/images/right.png" alt="Checkmark" className="w-6 h-6 text-green-500 mr-2" />
                Priority support from instructors.
              </li>
              <li className="flex items-center border p-4">
                <img src="/images/right.png" alt="Checkmark" className="w-6 h-6 text-green-500 mr-2" />
                Course completion certificates.
              </li>
              <li className="flex items-center border p-4">
                <img src="/images/right.png" alt="Checkmark" className="w-6 h-6 text-green-500 mr-2" />
                Ad-free experience.
              </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full mt-auto mb-10 upperButton">
    <button className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition duration-150">
      Buy Now
    </button>
  </div>
</section>

</div>
</section>

<section className="testimonial ">
<div className="mx-auto" style={{width: "80%"}}>
<section >
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-3/4">
          <h2 className="text-2xl font-semibold mb-4">Our Testimonials</h2>
          <p className="text-zinc-600 text-lg">
           Cypherly empowers individuals to take control of their digital security.Here what our students are saying:
                </p>
        </div>
        <div className="md:w-1/4 flex justify-end mt-4 md:mt-0">
          <button className="bg-white text-zinc-800 px-6 py-2 rounded-lg shadow hover:bg-zinc-300 transition duration-150">
            View All
          </button>
        </div>
      </div>
    </div>
</section>
<section>
<div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 p-8 ">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full">
                <p className="text-zinc-600 text-sm">&quot;Cypherly&apos;s in-depth course content and engaging labs made learning about cybersecurity fun and informative. I feel confident protecting myself online and prepared 
                to pursue a career in this exciting field!&quot;</p>
                <hr className="my-4 border-zinc-200"/>
                <div className="flex items-center justify-between">
                    <div className="flex items-center flex-wrap">
                    <Image src="/images/sarah.png" alt="Jason M" width={40} height={40} className=" mr-4 " />
                        <p className="text-sm font-semibold">Sarah L</p>
                    </div>
                    <button className="  text-xs font-bold uppercase px-4 py-2 rounded shadow hover:bg-yellow-400 transition duration-300" style={{backgroundColor:"#FFF4E5",color:"#ff9500"}}>Read Full Story</button>
                </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 w-full">
                <p className="text-zinc-600 text-sm">&quot;I had zero cybersecurity experience before enrolling. Cypherly&apos;s flexible learning format allowed me to learn at my own pace. Now, I can confidently explain these concepts to my family and friends."</p>
                <hr className="my-4 border-zinc-200"/>
                <div className="flex items-center justify-between">
                    <div className="flex items-center flex-wrap">
                    <Image src="/images/json.png" alt="Jason M" width={40} height={40} className=" mr-4 " />
                        <p className="text-sm font-semibold">Jason M</p>
                    </div>
                    <button className="  text-xs font-bold uppercase px-4 py-2 rounded shadow hover:bg-yellow-400 transition duration-300" style={{backgroundColor:"#FFF4E5",color:"#ff9500"}}>Read Full Story</button>
                </div>
            </div>
        </div>

</section>
<section>
<div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 p-8 ">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full">
                <p className="text-zinc-600 text-sm">"Cypherly&quot;s in-depth course content and engaging labs made learning about cybersecurity fun and informative. I feel confident protecting myself online and prepared to pursue a career in this exciting field!"</p>
                <hr className="my-4 border-zinc-200"/>
                <div className="flex items-center justify-between">
                    <div className="flex items-center flex-wrap">
                    <Image src="/images/emily.png" alt="Jason M" width={40} height={40} className=" mr-4 " />
                        <p className="text-sm font-semibold">Emily R</p>
                    </div>
                    <button className="  text-xs font-bold uppercase px-4 py-2 rounded shadow hover:bg-yellow-400 transition duration-300" style={{backgroundColor:"#FFF4E5",color:"#ff9500"}}>Read Full Story</button>
                </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 w-full">
                <p className="text-zinc-600 text-sm">&quot;I had zero cybersecurity experience before enrolling. Cypherly&apos;s flexible learning format allowed me to learn at my own pace. Now, I can confidently explain these concepts to my family and friends."</p>
                <hr className="my-4 border-zinc-200"/>
                <div className="flex items-center justify-between">
                    <div className="flex items-center flex-wrap">
                    <Image src="/images/michael.png" alt="Michael k" width={40} height={40} className=" mr-4 " />
                        <p className="text-sm font-semibold">Michael K</p>
                    </div>
                    <button className=" m-1 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:bg-yellow-400 transition duration-300" style={{backgroundColor:"#FFF4E5",color:"#ff9500"}}>Read Full Story</button>
                </div>
            </div>
        </div>

</section>

</div>
</section>

<Footer></Footer>
</>
  )
}
