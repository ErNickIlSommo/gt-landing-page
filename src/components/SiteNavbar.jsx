import React from "react";

import { HashLink as Link } from "react-router-hash-link";

const SiteNavBar = () => {
    return(
        <div className="flex justify-between">
            <div>
                <div className="uppercase">
                    <Link smooth className="" to="/#">
                        <p>gym track</p> 
                    </Link>
                </div>
            </div>
            <div className="flex gap-10 uppercase">
                <Link smooth className="" to="/#about">About us</Link>
                <Link smooth className="" to="/#work">Work with us</Link>
                <Link smooth className="" to="/#contact">Contacts</Link>
            </div>
        </div>
    )
}

export default SiteNavBar