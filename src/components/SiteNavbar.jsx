import React from "react";

import { HashLink as Link } from "react-router-hash-link";

const SiteNavBar = () => {
  return (
    <div>
      <div className="md:flex justify-between hidden md:visible">
        <div>
          <div className="uppercase">
            <Link smooth className="" to="/#">
              <p>gym track</p>
            </Link>
          </div>
        </div>
        <div className="flex gap-10 uppercase">
          <Link smooth className="" to="/#what-is-gymtrack">
            Who we are
          </Link>
          <Link smooth className="" to="/#family">
            Join us
          </Link>
        </div>
      </div>
      {/* <div className="block md:hidden w-full items-center align-middle">
        <p className="text-center text-5xl font-semibold">Gym Track</p>
      </div> */}
    </div>
  );
};

export default SiteNavBar;
