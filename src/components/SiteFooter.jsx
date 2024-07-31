import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const SiteFooter = () => {
    return(
        <div className="h-min-[500px] w-full flex flex-col md:flex-row justify-between px-3 md:px-10 py-10 md:py-20 gap-10 bg-[#E69506]">  
                <div className="hidden md:block md:w-1/3 lg:w-1/6">
                    <Link smooth className="" to="/#">
                        <p className="font-semibold">GYM TRACK</p>
                    </Link>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/6">
                    <p className="font-semibold mb-3 uppercase">Navigation</p>
                    <div className="flex flex-col gap-0 uppercase text-sm">
                        <Link smooth className="uppercase" to="/#">Home</Link>
                        <Link smooth  className="uppercase" to="/#"></Link>
                        <Link smooth className="uppercase" to="/#"></Link>
                        {/* <p>IT</p> */}
                        <Link smooth className="uppercase" to="/#">Join the team</Link>
                    </div>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/6">
                    <p className="font-semibold mb-3 uppercase">Contacts</p>
                    <div className="flex flex-col gap-0 text-sm">
                        {/* <a href="mailto:info@lespromesses.com">info@lespromesses.com</a>
                        <a href="mailto:celine@lespromesses.com">celine@lespromesses.com</a>
                        <a href="mailto:michele@lespromesses.com">michele@lespromesses.com</a> */}
                        {/* <a href="mailto:michele@lespromesses.com">michele@lespromesses.com</a>
                        <a href="mailto:celine@lespromesses.com">celine@lespromesses.com</a> */}
                        {/* <a className="" href="tel:+39000111222">+39 000111222</a> */}
                    </div>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/6">
                    <p className="font-semibold mb-3 uppercase">Social</p>
                    <div className="flex flex-col gap-0 text-sm">
                        {/* <a href="https://www.instagram.com/weddingdress_les_promesses/" target="_blank">Instagram</a> */}
                    </div>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/6">
                    <p className="font-semibold mb-3 uppercase">Information</p>
                    <div className="flex flex-col gap-0 text-sm">
                        {/* <p>{information.line1}</p>
                        <Link smooth to="/privacy">{information.line2}</Link> */}
                    </div>
                </div>  
        </div>
    )
}

export default SiteFooter