/* eslint-disable react/no-unescaped-entities */
"use client";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";

export default function Home(){
return(

<>
<section className='p-2 bg-white'>
<div className=" text-white py-2 px-4  flex justify-center items-center rounded-lg" style={{backgroundColor:"#ff9500"}} >
            <span className="mr-2">Free Courses ✨ Sale Ends Soon, Get It Now</span>
            <span>→</span>
        </div>

</section>
<Navbar/>
{/* section */}
<section>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center p-6 my-3">
            <div className="w-full  mb-4 md:mb-0 ">
                <div className="w-full ">
                    <h2 className="text-xl font-semibold">Conquer Cybersecurity: Beginner's <br/> Guide to Online Safety</h2>
                </div>
            </div>
            <div className="w-full ">
                <p className="text-zinc-700 dark:text-zinc-300">
                    In today's digital age, protecting yourself online is more important than ever. This comprehensive course from Cypherly equips you with the fundamental knowledge and essential skills to navigate the cybersecurity landscape with confidence.
                </p>
            </div>
        </div>
</section>
{/* section */}
<section>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div className="flex flex-col md:flex-row justify-between items-center">
    <div className="md:w-3/4">
      <h2 className="text-2xl font-semibold mb-4">Cypherly's Cybersecurity Fundamentals :</h2>
      <p className="text-zinc-600 text-lg">
      This course curriculum is designed for beginners with little to no prior cybersecurity knowledge.
       It provides a foundational understanding of core principles and equips you with practical skills 
       to navigate the digital world safely.

      </p>
    </div>
    <div className="md:w-1/4 flex justify-end mt-4 md:mt-0">
    <button className="bg-orange-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
                    Buy Now
                </button>
    </div>
  </div>
</div>
</section>
<section>
<div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between p-4 bg-zinc-100 dark:bg-zinc-800">
            <div className="w-full md:w-1/3 mb-4 md:mb-0 px-2">
                <img src="images/courses/image1.png" alt="Image 1" className="rounded-lg shadow-md w-full h-auto"/>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0 px-2">
                <img src="images/courses/image2.png" alt="Image 2" className="rounded-lg shadow-md w-full h-auto"/>
            </div>
            <div className="w-full md:w-1/3 px-2">
                <img src="images/courses/image3.png" alt="Image 3" className="rounded-lg shadow-md w-full h-auto"/>
            </div>
        </div>
</section>

<section>

<div className="max-w-7xl mx-auto flex space-x-2 p-4 bg-zinc-100 dark:bg-zinc-800">
      <button className="bg-white dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-4 py-2 rounded-md shadow-sm">
        4 Weeks
      </button>
      <button className="bg-white dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-4 py-2 rounded-md shadow-sm">
        Beginner
      </button>
    </div>
</section>
<section>
<div className="max-w-7xl mx-auto flex flex-col items-center justify-center  bg-zinc-100 dark:bg-zinc-900 text-center">
    <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200">Curriculum</h1>
    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">(Purchase to Unlock Full Curriculum)</p>
</div>

</section>

<section>
<div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 p-4">
           
          <div className=" bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 flex-1">
            <div className="flex items-center mb-4">
              <div className="text-4xl font-bold text-orange-500">01</div>
            </div>
            <h2 className="text-xl font-semibold mb-4">Introduction to Cybersecurity</h2>
            <div className="space-y-4 ">
              <div className="border border-orange-500 rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">What is Cybersecurity?</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Lesson 01</p>
                </div>
                <div className="flex items-center text-orange-500">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  1 Hour
                </div>
              </div>
              <div className="border rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Common Cyberattacks and Their Impact</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Lesson 02</p>
                </div>
                <div className="flex items-center text-zinc-500 dark:text-zinc-400">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  45 Minutes
                </div>
              </div>
              <div className="border rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">The Importance of Cybersecurity in Everyday Life</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Lesson 03</p>
                </div>
                <div className="flex items-center text-zinc-500 dark:text-zinc-400">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  45 Minutes
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative bg-zinc-100 dark:bg-zinc-700 rounded-lg shadow-md p-6 flex-1">
            <div className="flex items-center mb-4">
            <svg
      className="w-16 h-16 text-orange-500 absolute top-0 right-0 mt-4 mr-4"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2a6 6 0 00-6 6v4H5a3 3 0 00-3 3v6a3 3 0 003 3h14a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8a6 6 0 00-6-6zm-4 6a4 4 0 118 0v4H8V8zm10 14H6v-6h12v6z"></path>
    </svg>
              <div className="text-4xl font-bold text-orange-500">02</div>
            </div>
            <h2 className="text-xl font-semibold mb-4">Building a Strong Foundation</h2>
            <div className="space-y-4 opacity-50">
              <div className="border rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Core Concepts: Networks, Systems, Applications</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Lesson 01</p>
                </div>
                <div className="flex items-center text-zinc-500 dark:text-zinc-400">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  1 Hour
                </div>
              </div>
              <div className="border rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Network Security: Understanding Vulnerabilities</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Lesson 02</p>
                </div>
                <div className="flex items-center text-zinc-500 dark:text-zinc-400">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  1 Hour
                </div>
              </div>
              <div className="border rounded-lg p-4 flex justify-between items-center">

                <div>
                  <h3 className="font-semibold">Cryptography: Encryption for Secure Communication</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Lesson 03</p>
                </div>
                <div className="flex items-center text-zinc-500 dark:text-zinc-400">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  45 Minutes
                </div>
              </div>
            </div>
        </div>
</div>
<div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 p-4">
<div className="relative bg-zinc-100 dark:bg-zinc-700 rounded-lg shadow-md p-6 flex-1">
            <div className="flex items-center mb-4">
            <svg
      className="w-16 h-16 text-orange-500 absolute top-0 right-0 mt-4 mr-4"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2a6 6 0 00-6 6v4H5a3 3 0 00-3 3v6a3 3 0 003 3h14a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8a6 6 0 00-6-6zm-4 6a4 4 0 118 0v4H8V8zm10 14H6v-6h12v6z"></path>
    </svg>
              <div className="text-4xl font-bold text-orange-500">03</div>
            </div>
            <h2 className="text-xl font-semibold mb-4">
                data Privacy
            </h2>
            <div className="space-y-4 opacity-50">
              <div className="border rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Core Concepts: Networks, Systems, Applications</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Lesson 01</p>
                </div>
                <div className="flex items-center text-zinc-500 dark:text-zinc-400">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  1 Hour
                </div>
              </div>
              <div className="border rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Network Security: Understanding Vulnerabilities</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Lesson 02</p>
                </div>
                <div className="flex items-center text-zinc-500 dark:text-zinc-400">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  1 Hour
                </div>
              </div>
              <div className="border rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Cryptography: Encryption for Secure Communication</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Lesson 03</p>
                </div>
                <div className="flex items-center text-zinc-500 dark:text-zinc-400">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  45 Minutes
                </div>
              </div>
            </div>
        </div>
        <div className="relative bg-zinc-100 dark:bg-zinc-700 rounded-lg shadow-md p-6 flex-1">
            <div className="flex items-center mb-4">
            <svg
      className="w-16 h-16 text-orange-500 absolute top-0 right-0 mt-4 mr-4"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2a6 6 0 00-6 6v4H5a3 3 0 00-3 3v6a3 3 0 003 3h14a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8a6 6 0 00-6-6zm-4 6a4 4 0 118 0v4H8V8zm10 14H6v-6h12v6z"></path>
    </svg>
              <div className="text-4xl font-bold text-orange-500">04</div>
            </div>
            <h2 className="text-xl font-semibold mb-4">device security</h2>
            <div className="space-y-4 opacity-50">
              <div className="border rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Core Concepts: Networks, Systems, Applications</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Lesson 01</p>
                </div>
                <div className="flex items-center text-zinc-500 dark:text-zinc-400">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  1 Hour
                </div>
              </div>
              <div className="border rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Network Security: Understanding Vulnerabilities</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Lesson 02</p>
                </div>
                <div className="flex items-center text-zinc-500 dark:text-zinc-400">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  1 Hour
                </div>
              </div>
              <div className="border rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Cryptography: Encryption for Secure Communication</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Lesson 03</p>
                </div>
                <div className="flex items-center text-zinc-500 dark:text-zinc-400">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  45 Minutes
                </div>
              </div>
            </div>
        </div>


</div>


</section>
<Footer/>
</>
);


}