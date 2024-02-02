"use client"
import React from 'react';
import { useEffect } from 'react';




const AboutUs = () => {

   

    const date = new Date();

    return (
        <section>
        <div className='pt-[30px] bg-white text-black'>
            <div className='sections objective-sec' >
                <div className='w-4/5 mx-auto mt-[60px]'>
                    <p className='text-center font-bold text-3xl text-blue uppercase p-3'>
                        About Us
                    </p>
                    <hr className='class=" dark:bg-gray-700' />

                    <div className='w-4/5 text-center mx-auto mt-2 p-5'>
                        
                        <p className='text-3xl md:text-sm text-black/80'>
                            {` The DNS  Club started its journey on  2016. Its
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
            programming basics are planned for the future.`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default AboutUs