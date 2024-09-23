import React from "react";
import { HashLink as Link } from "react-router-hash-link";

// Components
import ButtonCustom from "../components/ButtonCustom";
import Param from "../components/Param";
import FamilyCard from "../components/FamilyCard";

// imports
import presentationImage from "../images/image1.webp";

import appImage from "../images/app.png";

import video from "../images/video.mp4";
import poster from "../images/poster.png";

import Giacomo from "../images/team/Giacomo.webp";
import Guglielmo from "../images/team/Guglielmo.webp";
import Nicola from "../images/team/Nicola.webp";
import unknown from "../images/team/unknown.webp";

const Home = () => {
  return (
    <div>
      <div className=" flex flex-col gap-y-24">
        {/* EPIGRAMMA */}
        <div className="flex flex-col xl:flex-row">
          <div className=" xl:w-9/12 flex flex-col md:mt-20 gap-5 md:gap-y-10 ">
            <div className=" flex flex-col gap-y-1">
              {/* New button */}
              <ButtonCustom />

              {/* Title */}
              <div className="w-full text-5xl md:text-7xl font-semibold">
                <p className="leading-tight xl:leading-relaxed">
                  Track your <span className="text-[#E69506]">progress</span>,
                </p>
                <p className="leading-tight xl:leading-relaxed">
                  reach your potential.
                </p>
              </div>
              <div>
                <p className="w-full xl:w-1/2 text-[#707070] text-sm md:text-lg ">
                  Gym Track is an innovative fitness start-up that aims to
                  create a new system to track your physical progresses inside
                  gyms.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="bg-[#E69506] px-4 py-3 rounded-xl inline-block text-black font-semibold">
                <Link smooth className="" to="/#family">
                  <p>Contact us</p>
                </Link>
              </div>
              <div className="bg-[#191919] px-4 py-3 rounded-xl inline-block font-semibold">
                <Link smooth to="/#app">
                  <p>Discover more</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full h-1/2 xl:h-full items-center">
            <img
              className="xl:h-full object-cover rounded-3xl"
              src={presentationImage}
            />
          </div>
        </div>

        {/* What we are creating */}
        <div id="app" className="w-full xl:flex xl:justify-center">
          <div className="hidden xl:block xl:w-full xl:h-full ">
            <img src={appImage} alt="Application" />
          </div>
          <div className="">
            <Param />
          </div>
        </div>

        {/* Video section */}
        <div className="flex flex-col gap-5 lg:gap-y-16" id="what-is-gymtrack">
          <div className="w-full flex flex-col lg:flex-row justify-center gap-5 lg:gap-36 items-center">
            <div className="text-center xl:text-right font-semibold gap-1">
              <p className="text-5xl md:text-7xl">We're growing</p>
              <p className="text-7xl md:text-9xl">everyday</p>
            </div>
            <div className="">
              <p className="hidden xl:block md:text-lg leading-relaxed">
                Gym Track was born in{" "}
                <span className="text-[#E69506] font-semibold">H-Farm</span>,
                the first startup incubator where our idea was tested and
                validated throughout a{" "}
                <span className="text-[#E69506] font-semibold">
                  pre-accellerator program
                </span>
                . We are now developing the MVP: Gym Tracker 1.0
                <br />
                To do so we are looking to expand our team with talented and
                motivated people to archive our goals and bring our project to
                life.
              </p>
            </div>
          </div>
          <div className="h-[64vh] md:h-[90vh]">
            <video
              controls
              playsInline
              poster={poster}
              className="h-full w-full object-cover rounded-xl"
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div className="w-full">
            <p className="block xl:hidden md:text-lg leading-relaxed">
              Gym Track was born in{" "}
              <span className="text-[#E69506] font-semibold">H-Farm</span>, the
              first startup incubator where our idea was tested and validated
              throughout a{" "}
              <span className="text-[#E69506] font-semibold">
                pre-accellerator program
              </span>
              . We are now developing the MVP: Gym Tracker 1.0
              <br />
              To do so we are looking to expand our team with talented and
              motivated people to archive our goals and bring our project to
              life.
            </p>
          </div>
        </div>

        {/* Gym Track's family */}
        <div className="flex flex-col gap-5 xl:gap-10" id="family">
          <p className="text-5xl xl:text-7xl font-semibold leading-tight xl:leading-relaxed">
            The Gym Track's{" "}
            <span className="font-semibold text-[#E69506]">family</span>
          </p>
          <div className="flex flex-wrap justify-between gap-5">
            <FamilyCard
              image={Giacomo}
              nameMember="Giacomo Calabresi"
              role="Business & Marketing"
              href="https://www.linkedin.com/in/giacomo-calabresi-70a199234/"
            />
            <FamilyCard
              image={Guglielmo}
              nameMember="Guglielmo Grassetto"
              role="Mechatronic Engineer"
              href="https://www.linkedin.com/in/guglielmo-grassetto-764b6b19b/"
            />

            <FamilyCard
              image={Nicola}
              nameMember="Nicola Gianuzzi"
              role="Computer Engineer"
              href="https://www.linkedin.com/in/nicola-gianuzzi-8ab1a3277/"
            />
            <FamilyCard
              image={unknown}
              nameMember="Luca Martarello"
              role="Electronic Engineer"
              href="https://www.linkedin.com/in/luca-martarello-34658428a/"
            />
          </div>

          <div className="mt-5 xl:mt-10 items-center align-middle text-center">
            <p className="text-lg sm:text-3xl xl:text-5xl leading-tight xl:leading-relaxed">
              We're looking for people to join our team!
            </p>
            <p className="text-xs sm:text-sm leading-tight xl:leading-relaxed">
              If you are interested in participating in the project write to us
              at{" "}
              <a href="mailto:gymtrackai@gmail.com">
                <span className="font-semibold text-[#E69506]">
                  gymtrackai@gmail.com
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
