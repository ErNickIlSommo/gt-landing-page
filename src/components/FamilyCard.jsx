import React from "react";

import "../style/pulsating.scss"

const FamilyCard = ({ image, name, role, href, unknown }) => {
    return(
        <div className="">
            {unknown ? 
                <div className="flex flex-col gap-3 justify-center items-center cursor-pointer">
                    <div className="bg-[#E69506] rounded-full animate-pulse">
                        <img src={image} alt="member" className="h-full object-cover rounded-full opacity-0"/>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <a className="text-xl" href={href} target="_blank">{name}</a>
                        <p className="text-xl text-[#808080]" >{role}</p>
                    </div>
                </div> 
                :
                <div className="flex flex-col gap-3 justify-center items-center">
                    <a href={href} target="_blank">
                        <div className="rounded-full overflow-hidden">
                            <img src={image} alt="member" className="h-full object-cover rounded-full transform transition-transform duration-300 hover:scale-110"/>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <p className="text-xl">{name}</p>
                            <p className="text-xl text-[#808080]" >{role}</p>
                        </div>
                    </a>
                </div>
            }
            
        </div>
    )
}

export default FamilyCard