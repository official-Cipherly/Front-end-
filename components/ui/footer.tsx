export default function Footer(){


    return (


        <section>
<footer className="bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 py-6 px-10 shadow-md shadow-zinc-300">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
            <div className="flex items-center space-x-2">
                <img src="images/logo.png" alt="Logo" className="w-10 h-10"/>
               
            </div>
            <div>
                <p className="flex items-center space-x-2">
                    <img src="images/message.png" alt="Email Icon" className='w-6 h-6 m-1'/>
                    <span>contact@cipherly.com</span>
                </p>
                <p className="flex items-center space-x-2 ">
                    <img src="images/phone.png" alt="Phone Icon" className='w-6 h-6 m-1' />
                    <span>+91 72249 13806</span>
                </p>
                <p className="flex items-center space-x-2">
                    <img src="images/location.png" alt="Location Icon"className='w-6 h-6 m-1'/>
                    <span>Indore, India</span>
                </p>
            </div>
        </div>
        <div>
            <h3 className="font-semibold text-zinc-800 mb-3">Home</h3>
            <ul className="space-y-2">
                <li>Benefits</li>
                <li>Our Course</li>
                <li>Our Testimonials</li>
            </ul>
        </div>
        <div>
            <h3 className="font-semibold text-zinc-800 mb-3">About Us</h3>
            <ul className="space-y-2">
                <li>Company</li>
                <li>Achievements</li>
                <li>Our Goals</li>
            </ul>
        </div>
        <div>
            <h3 className="font-semibold text-zinc-800 mb-3">Social Profiles</h3>
            <div className="flex space-x-4">
                <a href="#" className=" w-10 h-10 ">
                    <img src="images/facebook.png" alt="Facebook Icon"/>
                </a>
                <a href="#" className=" w-10 h-10 ">
                    <img src="images/twitter.png" alt=" Icon"/>
                </a>
                <a href="#" className=" w-10 h-10 ">
                    <img src="images/linkedin.png" alt=" Icon"/>
                </a>
               
            </div>
        </div>
    </div>
    <hr className="border-t border-zinc-300 my-6"/>
    <div className="text-center text-zinc-500 dark:text-zinc-400 mt-4">
        © 2024 Cipherly. All rights reserved.
    </div>
</footer>


</section>
    )
}