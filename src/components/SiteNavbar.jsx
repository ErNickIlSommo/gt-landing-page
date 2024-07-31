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
                <p>about us</p>
                <p>Work with us</p>
                <p>Contacts</p>
            </div>
        </div>
    )
}

export default SiteNavBar