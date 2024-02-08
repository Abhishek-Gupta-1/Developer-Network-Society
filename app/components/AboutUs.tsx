"use client"
import React from 'react';
import { useEffect } from 'react';
import Image from 'next/image'


const AboutUs = () => {





    return (

        <section>
            <div className='pt-4 pb-0 mb-0 bg-black text-white'>
                <div className='sections objective-sec' >
                    <div className='w-4/5 mx-auto mt-12'>
                        <p className='text-center font-bold text-6xl  p-3'>
                            About Us
                        </p>
                        {/* <hr className='bg-slate-900 h-0.5' /> */}


                    </div>
                </div>
            </div>


            <div className='text-white bg-black flex  flex-col lg:flex-row p-5  justify-evenly'>
                <div className='flex justify-center items-center ' >
                    <Image alt='aboutus' width={600} height={200} src='/about.jpg' />
                </div>
                <div className='lg:w-1/2  flex justify-center items-center'>

                    <div className=' p-8'>
                        <p className=' text-lg '>Welcome to Developer Network Society — A hub for
                            tech enthusiasts! Our mission is to ignite students curiosity in diverse technologies,
                            preparing them for industry challenges. With a focus on Python, Java, C, C++, and
                            more, DNS cultivates a problem-solving mindset, ensuring members are industry-ready.
                            Engage in our Online Coding and Quiz Contests for a thrilling experience.
                            Attend Experts Talks, Alumni Discussions, and hands-on workshops to enhance
                            your programming skills. DNS is not just a club, its a platform that propels you
                            toward a successful career. Join us as we embrace innovation, learning, and a thriving
                            tech community!</p>
                    </div>

                </div>


            </div>
        </section>
    )
}

export default AboutUs