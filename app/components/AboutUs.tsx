"use client"
import React from 'react';
import { useEffect } from 'react';
import Image from 'next/image'


const AboutUs = () => {



    const date = new Date();

    return (

        <section>
            <div className='pt-4 pb-0 mb-0 bg-[#e1f1fa] text-black'>
                <div className='sections objective-sec' >
                    <div className='w-4/5 mx-auto mt-12'>
                        <p className='text-center font-bold text-4xl text-blue uppercase p-3'>
                            About Us
                        </p>
                        <hr className='bg-slate-900 h-0.5' />


                    </div>
                </div>
            </div>


            <div className='text-black bg-[#e1f1fa] flex  flex-col lg:flex-row p-5  justify-evenly'>
                <div className='flex justify-center items-center ' >
                    <Image alt='aboutus' width={600} height={200} src='/about.jpg' />
                </div>
                <div className='lg:w-1/2  flex justify-center items-center'>

                    <div className=' p-8'>
                        <p className=' text-lg '>The DNS  Club started its journey on  2016. Its
                            major objective is to motivate students' interest in learning
                            various technologies and to obtain information about how
                            technology will be used to project work. The club's goal is to
                            encourage students to solve various challenging problems using
                            demanding technologies which include Python, Java, C, C++,
                            etc. Our approach will help students to become Industry Ready.
                            This will boost them to get Job. The DNS Club actively
                            organizes various activities like Online Coding Contest,
                            Online Quiz Contest, etc. Other events like Expert's Talk,
                            Alumni Talk, and Hands-on practical workshops for various
                            programming basics are planned for the future.</p>
                    </div>

                </div>


            </div>
        </section>
    )
}

export default AboutUs