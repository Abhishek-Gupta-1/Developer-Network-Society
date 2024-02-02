"use client"
// import { Player } from '@lottiefiles/react-lottie-player';
import TypewriterComponent from 'typewriter-effect'

const Dashboard = () => {
    return (
        <div className="homeback">
            <div className="h-full w-full  mt-20 flex flex-col justify-center items-center border">

                <div className="flex w-full  justify-center mb-6 ">
                    <div className='flex-4 text-center font-black text-7xl tracking-wide'>
                        <h1 className='text-white mr-3'>Welcome to </h1>
                        <h1 className='text-[#086cec] mr-3'>Developer Network Society</h1>
                    </div>
                </div>

                {/* <div className=' absolute bottom-0'>
                    <Player
                        autoplay
                        loop
                        src="/slider/mouse.json"
                    >
                    </Player>
                </div> */}
            </div>
        </div>

    );
}

export default Dashboard
