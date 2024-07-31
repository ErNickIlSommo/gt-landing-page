import React from "react";

import { HashLink as Link } from "react-router-hash-link";

const SiteNavBar = () => {
    return(
        <div className="flex justify-between">
            <div>
                <div className="uppercase">
                    <p>gym track</p> 
                </div>
            </div>
            <div className="flex gap-10 uppercase">
                <p className="select-none">about us</p>
                <p className="select-none">Work with us</p>
                <p className="select-none">Contacts</p>
            </div>
        </div>
    )
}

export default SiteNavBar