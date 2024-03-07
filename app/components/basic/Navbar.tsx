"use client";

import Image from 'next/image';
import Link from 'next/link';
// import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

export default function Navbar() {
    const router = useRouter();




    return (


        <div className="z-20 flex flex-wrap place-items-center fixed w-full mt-0 pt-0 ">
            <section className="relative mx-auto w-full">
                {/* navbar */}
                <nav className="flex justify-between bg-[#086cec] text-white h-20">
                    <div className="px-5 xl:px-12 py-3 flex w-full items-center object-top">
                        <Link className="text-3xl font-bold font-heading" href="/">
                            <div className=' flex justify-center pt-0 mt-0 pb-0 mb-0'>
                                <Image src="/dns.png" alt="DNS" className='bg-transparent' width={150} height={100} />
                            </div>
                        </Link>
                        {/* Nav Links */}
                        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                            <li>
                                <Link className="hover:text-gray-200" href="/">
                                    Events
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-gray-200 " href="/Mentors">
                                    Our Mentors
                                </Link>
                            </li>
                            {

                                <li>
                                    <Link className="hover:text-gray-200 cursor-pointer" href="#gallery-section">
                                        Gallery
                                    </Link>
                                </li>
                            }


                            {

                                <li>
                                    <Link className="hover:text-gray-200 cursor-pointer" href="#about-section">
                                        About Us
                                    </Link>
                                </li>
                            }

                            {

                                <li>
                                    <Link className="hover:text-gray-200 cursor-pointer" href="/Contact">
                                        Contact Us
                                    </Link>
                                </li>
                            }
                        </ul>
                    </div>
                </nav>
            </section>
        </div>



    )
}
