import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";

const SiteFooter = () => {
  return (
    <div className="h-min-[500px] w-full flex flex-col md:flex-row justify-between px-3 md:px-10 pt-2 md:py-20 gap-10 mt-36">
      <div className=" md:block md:w-1/3 lg:w-1/6">
        <Link smooth className="" to="/#">
          <p className="font-semibold">GYM TRACK</p>
        </Link>
      </div>
      <div className="w-full md:w-1/3 lg:w-1/6">
        <p className="font-semibold mb-3 uppercase">Navigation</p>
        <div className="flex flex-col gap-1 uppercase text-sm">
          <Link smooth className="uppercase" to="/#">
            Home
          </Link>
          <Link smooth className="uppercase" to="/#what-is-gymtrack">
            Who we are
          </Link>
          {/* <p>IT</p> */}
          <Link smooth className="uppercase" to="/#family">
            Join us
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/3 lg:w-1/6">
        <p className="font-semibold mb-3 uppercase">Contacts</p>
        <div className="flex flex-col gap-0 text-sm">
          <a href="mailto:gymtrackai@gmail.com">gymtrackai@gmail.com</a>
        </div>
      </div>
      <div className="w-full md:w-1/3 lg:w-1/6">
        <p className="font-semibold mb-3 uppercase">Social</p>
        <div className="flex flex-row gap-2 text-sm">
          <a href="https://www.linkedin.com/" target="_blank">
            <img src={linkedin} alt="instagram" className="h-6 w-6" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instagram} alt="instagram" className="h-6 w-6" />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <img src={facebook} alt="instagram" className="h-6 w-6" />
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/3 lg:w-1/6">
        <p className="font-semibold mb-3 uppercase">Information</p>
      </div>
    </div>
  );
};

export default SiteFooter;
