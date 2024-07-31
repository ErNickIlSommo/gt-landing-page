import React from "react";

const FamilyCard = ({ image, name, role, href }) => {
    return(
        <div className="">
            <div className="flex flex-col gap-3 justify-center items-center">
                <img src={image} alt="member" className="h-full object-cover rounded-full"/>
                <div className="flex flex-col justify-center items-center">
                    <a className="text-xl" href={href} target="_blank">{name}</a>
                    <p className="text-xl text-[#808080]" >{role}</p>
                </div>
            </div>
        </div>
    )
}

export default FamilyCard