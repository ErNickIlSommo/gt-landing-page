import React from "react";


const ParamCard = ({ src, param, description }) => {
    return(
        <div className="flex flex-col -z-10 w-full md:w-1/3 relative mr-10 my-10">
            <img src={src} className="h-full object-cover relative"/>
            <div className="absolute z-0 -bottom-10 left-5">
                <p className="text-5xl font-semibold">{param}</p>
                <p className="text-xs uppercase">Lorem ei ksdfsdfds sdkfmsdfkm</p>
            </div>
        </div>

    )
}

export default ParamCard