import React from "react";

// Components
import ButtonCustom from "../components/ButtonCustom";
import Parameters from "../components/Parameters";

// imports
import presentationImage from "../images/image1.webp"
import appImage from "../images/app/1.webp"
import video from "../images/video.mp4"

const Home = () => {
    return(
        <div className="flex flex-col gap-7 md:gap-36">
            {/* EPIGRAMMA */}
            <div className="flex flex-row">
                <div className="w-9/12 flex flex-col mt-20 gap-y-10">
                    <div className="flex flex-col gap-y-1">
                        <div className=""><ButtonCustom /></div>
                        <div className="text-7xl font-semibold">
                            <p className="leading-relaxed">Track your <span className="text-[#E69506]">progress</span>,</p>
                            <p className="leading-relaxed">reach your potential.</p>
                        </div>
                        <div>
                            <p className="text-[#707070] text-lg w-1/2">
                                Gym Track is an innovative fitness start-up that aims to create 
                                a new system to track your physical progresses inside gyms.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="bg-[#E69506] px-4 py-3 rounded-xl inline-block text-black font-semibold">Contact us</div>
                        <div className="bg-[#191919] px-4 py-3 rounded-xl inline-block font-semibold">Discover more</div>
                    </div>
                </div>
                <div><img className="h-full object-cover" src={presentationImage} /></div>
            </div>
            {/* What you do */}
            <div className="w-11/12 items-center max-w-fit mx-auto">
                <p className="text-4xl font-semibold">Set your goals & track your progresses</p>
                <Parameters /> 
            </div>

            {/* App */}
            <div className="w-full h-full flex justify-between gap-10 items-center max-w-fit mx-auto">
                <img src={appImage} alt="Application" />
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                        <p className="text-5xl">Innovative system</p>
                        <p className="text-[#707070]">Lorem isdfjsdnf asdjfn</p>
                        <hr/>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-5xl">Bioimpendance scale</p>
                        <p className="text-[#707070]">Lorem isdfjsdnf asdjfn</p>
                        <hr/>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-5xl">Connected App</p>
                        <p className="text-[#707070]">Lorem isdfjsdnf asdjfn</p>
                        <hr/>
                    </div>
                </div>
            </div>

            {/* What's GYM TRACK */}
            {/* <div className="w-11/12 items-center max-w-fit mx-auto sbg-red-600">
                <div className="w-9/12 pb-16 sbg-blue-600 ">
                    <p className="text-8xl font-semibold leading-snug">We're growing everyday</p>
                    <div className="bg-[#E69506] px-4 py-3 my-5 rounded-xl inline-block text-black font-semibold">
                        Join Gym Track
                    </div>
                </div>
                <div className="w-9/12 h-[64vh] md:h-[70vh]">
                    <video controls playsInline className="h-full w-full object-cover">
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </div> */}
            <div className="flex w-full max-w-fit mx-auto">
                <div className=" flex flex-col">
                    <p className="text-8xl font-semibold leading-snug">We're growing everyday</p>
                    {/* <div className="w-1/2"> </div> */}
                    <div className="w-1/2 pb-16 sbg-blue-600 ">
                        <p className="py-4">
                            Gym Track was born in <span className="font-semibold text-[#E69506]">H-Farm</span>, the first startup incubator where 
                            our idea was tested and validated throughout a <span className="font-semibold text-[#E69506]">pre-accellerator program</span>. 
                            We are now developing the MVP: Gym Tracker 0.1
                        </p>
                        <p className="py-4">
                            To do so we are looking to expand our team with talented and motivated 
                            people to archive our goals and bring our project to life.
                        </p>
                        <div className="bg-[#E69506] px-4 py-3 my-5 rounded-xl inline-block text-black font-semibold">
                            Join Gym Track
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                    {/* <div className="w-1/4"> </div> */}
                    <div className=" bg-blue-500">
                        <video controls playsInline className="h-full w-full object-cover">
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>
                    <div className="w-full flex flex-col items-start align-bottom text-xl ">
                            <p className="text-white">Giacomo Calabresi</p>
                            <p className="text-[#707070]">Founder of Gym Track</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home