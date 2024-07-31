import React from "react";

// Components
import ButtonCustom from "../components/ButtonCustom";
import Parameters from "../components/Parameters";

// imports
import presentationImage from "../images/image1.webp"
import appImage from "../images/app/1.webp"

const Home = () => {
    return(
        <div>
            {/* EPIGRAMMA */}
            <div className="flex flex-row">
                <div className="w-9/12 flex flex-col mt-20 gap-y-10">
                    <div className="flex flex-col gap-y-1">
                        <div className=""><ButtonCustom /></div>
                        <div className="text-6xl font-semibold">
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
            <div className="w-11/12 flex justify-between gap-10 items-center max-w-fit mx-auto">
                <img src={appImage} alt="Application" />
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                        <p className="text-5xl">innovative system</p>
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
        </div>
    )
}

export default Home