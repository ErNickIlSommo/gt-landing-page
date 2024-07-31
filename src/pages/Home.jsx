import React from "react";

// Components
import ButtonCustom from "../components/ButtonCustom";

// imports
import presentationImage from "../images/image1.webp"

const Home = () => {
    return(
        <div className="flex flex-row">
            {/* EPIGRAMMA */}
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

            {/* What you do */}
            <div>
                
            </div>
        </div>
    )
}

export default Home