import React from "react";

// Components
import ParamCard from "./ParamCard";


// photos
import img1 from "../images/parameters/1.webp"
import img2 from "../images/parameters/2.webp"
import img3 from "../images/parameters/3.webp"
import img4 from "../images/parameters/4.webp"
import img5 from "../images/parameters/5.webp"
import img6 from "../images/parameters/6.webp"

// const photos = [
//     '/parameters/1.webp',
//     '/parameters/2.webp',
//     '/parameters/3.webp',
//     '/parameters/4.webp',
//     '/parameters/5.webp',
//     '/parameters/6.webp',
// ]

const params = [
    {name: 'Weight', description: ' '},
    {name: 'Body Fat', description: ' '},
    {name: 'Muscle mass', description: ' '},
    {name: 'Visceral fat', description: ' '},
    {name: 'Bone mass', description: ' '},
    {name: 'Idratation', description: ' '},
]

const Parameters = () => {
    return(
        <div className="flex flex-col w-full h-full justify-center items-center">
            <div className="w-full flex flex-row py-2">
                <ParamCard
                    src={img1} 
                    param="Weight"
                    description="" 
                />
                <ParamCard
                    src={img2} 
                    param="Body Fat"
                    description="" 
                />
                <ParamCard
                    src={img3} 
                    param="Muscle mass"
                    description="" 
                />
            </div>
            <div className="w-full flex flex-row py-2">
                <ParamCard
                    src={img4} 
                    param="Visceral fat"
                    description="" 
                />
                <ParamCard
                    src={img5} 
                    param="Bone mass"
                    description="" 
                />
                <ParamCard
                    src={img6} 
                    param="Idratation"
                    description="" 
                />
            </div>
        </div>
    )
}

export default Parameters