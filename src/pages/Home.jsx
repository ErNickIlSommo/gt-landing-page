import React from "react";

// Components
import ButtonCustom from "../components/ButtonCustom";

// imports
import presentationImage from "../images/image1.webp"

const Home = () => {
    return(
        <div>
            <div>
                <div className="">
                    <ButtonCustom />
                    <div className="">
                        <p>Track your <span className="text-[#E69506]">progress</span>,</p>
                        <p>reach your potential.</p>
                    </div>
                    <p className="text-[#707070]">
                        Gym Track is an innovative fitness start-up that aims to create 
                        a new system to track your physical progresses inside gyms.
                    </p>
                </div>
                <div>
                    <div className="bg-[#E69506] inline-block text-black font-semibold">Contact us</div>
                    <div className="bg-[#191919] inline-block font-semibold">Discover more</div>
                </div>
                <div><img src={presentationImage} /></div>
            </div>

        </div>
    )
}

export default Home