
/* eslint-disable react/no-unescaped-entities */
"use client";
import Navbar from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";
import Image from 'next/image'
import Footer from "@/components/ui/footer";
export default function SignUp(){


    return (
        <>
        <Navbar/>
        <div className="min-h-screen  flex items-center justify-center p-6">
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-20 ">
            
            <div className=" w-full rounded-lg ">
              <h2 className="text-2xl font-bold mb-4">Students Testimonials</h2>
              <p className="text-zinc-600 mb-6">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
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
        </div>
              <div className="flex justify-center mt-4 space-x-2">
                <button className="bg-white border border-zinc-300 text-zinc-600 px-4 py-2 rounded-lg">&larr;</button>
                <button className="bg-white border border-zinc-300 text-zinc-600 px-4 py-2 rounded-lg">&rarr;</button>
              </div>
            </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md ">
          <div className='text-center'>
          <h2 className="text-2xl font-bold mb-4 ">Sign Up</h2>
          <p className="text-zinc-600 mb-6">Create an account to unlock exclusive feature.</p>
          </div>
          <form>
            <div className="mb-4">
              <label className="block text-zinc-700 text-xl font-bold">Full Name</label>
              <input type="text" placeholder="Enter your name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"/>
            </div>
            <div className="mb-4">
              <label className="block text-zinc-700 text-xl font-bold">Email</label>
              <input type="email" placeholder="Enter your Email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"/>
            </div>
            <div className="mb-4">
              <label className="block text-zinc-700 text-xl font-bold">Password</label>
              <input type="password" placeholder="Enter your Password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"/>
              <a href="#" className="text-sm text-orange-500 float-right mt-1">Forgot Password?</a>
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" id="remember-me" className="mr-2"/>
              <label htmlFor="remember-me" className="text-zinc-700">Remember Me</label>
            </div>
            <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-lg">Login</button>
          </form>
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-zinc-300"></div>
            <span className="px-4 text-zinc-500">OR</span>
            <div className="flex-grow h-px bg-zinc-300"></div>
          </div>
          <button className="w-full bg-zinc-100 text-zinc-700 py-2 rounded-lg flex items-center justify-center">
            <img src="https://placehold.co/20x20" alt="Google Logo" className="mr-2"/>
            Login with Google
          </button>
          <p className="text-center mt-4 text-zinc-600">Don't have an account? <a href="#" className="text-orange-500">Sign Up</a></p>
        </div>
          </div>
        </div>
        <Footer/>
        </>
    );
}