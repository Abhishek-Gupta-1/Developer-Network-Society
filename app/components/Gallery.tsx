"use client"
import React from 'react';
import { useEffect } from 'react';
import Image from 'next/image'


const Gallery = () => {

    return (
        <section id='gallery-section'>
            <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16 pt-16 text-center">
                <h2 className="mb-4 text-6xl tracking-tight font-bold text-gray-900 dark:text-white">
                    Gallery
                </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                <div className="grid gap-4">
                    <div>
                        <figure className="z-0 relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                            <Image className='h-auto max-w-full rounded-lg' alt='linkedin' width={600} height={200} src='/1.jpg' />
                        </figure>

                    </div>
                    <div>

                        <figure className="z-0 relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                            <Image className='h-auto max-w-full rounded-lg' alt='linkedin' width={600} height={200} src='/3.jpg' />
                        </figure>

                    </div>
                    <div>

                        <figure className="z-0 relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">

                            <Image className='h-auto max-w-full rounded-lg' alt='linkedin' width={600} height={200} src='/2.jpg' />
                        </figure>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <figure className="z-0 relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">

                            <Image className='h-auto max-w-full rounded-lg' alt='linkedin' width={600} height={200} src='/1.jpg' />
                        </figure>
                    </div>
                    <div>
                        <figure className="z-0 relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">

                            <Image className='h-auto max-w-full rounded-lg' alt='linkedin' width={600} height={200} src='/3.jpg' />
                        </figure>
                    </div>
                    <div>
                        <figure className="z-0 relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">

                            <Image className='h-auto max-w-full rounded-lg' alt='linkedin' width={600} height={200} src='/2.jpg' />
                        </figure>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <figure className="z-0 relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">

                            <Image className='h-auto max-w-full rounded-lg' alt='linkedin' width={600} height={200} src='/groupphoto.png' />
                        </figure>
                    </div>
                    <div>
                        <figure className="z-0 relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">

                            <Image className='h-auto max-w-full rounded-lg' alt='linkedin' width={600} height={200} src='/2.jpg' />
                        </figure>
                    </div>
                    <div>
                        <figure className="z-0 relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">

                            <Image className='h-auto max-w-full rounded-lg' alt='linkedin' width={600} height={200} src='/3.jpg' />
                        </figure>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <figure className="z-0 relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">

                            <Image className='h-auto max-w-full rounded-lg' alt='linkedin' width={600} height={200} src='/2.jpg' />
                        </figure>
                    </div>
                    <div>
                        <figure className="z-0 relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">

                            <Image className='h-auto max-w-full rounded-lg' alt='linkedin' width={600} height={200} src='/1.jpg' />
                        </figure>
                    </div>
                    <div>
                        <figure className="z-0 relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">

                            <Image className='h-auto max-w-full rounded-lg' alt='linkedin' width={600} height={200} src='/groupphoto.png' />
                        </figure>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Gallery