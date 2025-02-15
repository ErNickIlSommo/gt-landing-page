import React from "react";
import { HashLink as Link } from "react-router-hash-link";

// Components
import ButtonCustom from "../components/ButtonCustom";
import FamilyCard from "../components/FamilyCard";
// import Param from "../components/Param";

// imports
// import presentationImage from "../images/image1.webp";
import presentationImage from "../images/image1.png";

import bodyfat from "../images/bodyParameters/bodyfat.png";
import bonemass from "../images/bodyParameters/bonemass.png";
import idratation from "../images/bodyParameters/idratation.png";
import musclemass from "../images/bodyParameters/musclemass.png";
import visceralfat from "../images/bodyParameters/visceralfat.png";
import weight from "../images/bodyParameters/weight.png";

// import appImage from "../images/app.png";

import video from "../images/video.mp4";
import poster from "../images/poster.png";

import Giacomo from "../images/team/Giacomo.webp";
import Guglielmo from "../images/team/Guglielmo.webp";
import Nicola from "../images/team/Nicola.webp";
import unknown from "../images/team/unknown.webp";

const Home = () => {
  return (
    <div>
      <div className=" flex flex-col gap-y-36">
        {/* EPIGRAMMA */}
        <div className="flex flex-col gap-2 xl:gap-0 xl:flex-row">
          <div className=" xl:w-9/12 flex flex-col md:mt-20 gap-5 md:gap-y-10 ">
            <div className=" flex flex-col gap-y-1">
              {/* New button */}
              <ButtonCustom />

              {/* Title */}
              <div className="w-full text-5xl md:text-7xl font-semibold">
                <p className="leading-tight">
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
          <div className="w-full h-1/2 xl:h-full xl:mt-0 items-center">
            <img
              className="xl:h-full object-cover rounded-3xl"
              src={presentationImage}
            />
          </div>
        </div>

        {/* Parameter section */}
        <div className="hidden lg:visible lg:flex lg:flex-col">
          <p className="text-5xl xl:text-7xl font-semibold text-center leading-tight xl:leading-relaxed mb-5">
            Set your goals & track your body
          </p>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="flex flex-col gap-10">
              <div className="flex gap-10">
                <div className="image">
                  <img
                    src={bodyfat}
                    alt="parameter"
                    className="h-full object-cover"
                  />
                </div>
                <div className="image">
                  <img
                    src={bonemass}
                    alt="parameter"
                    className="h-full object-cove className="
                  />
                </div>
                <div className="image">
                  <img
                    src={idratation}
                    alt="parameter"
                    className="h-full object-cove className="
                  />
                </div>
              </div>
              <div className="flex gap-10">
                <div className="image">
                  <img
                    src={musclemass}
                    alt="parameter"
                    className="h-full object-cover"
                  />
                </div>
                <div className="image">
                  <img
                    src={visceralfat}
                    alt="parameter"
                    className="h-full object-cove className="
                  />
                </div>
                <div className="image">
                  <img
                    src={weight}
                    alt="parameter"
                    className="h-full object-cove className="
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What we are creating */}
        {/* <div id="app" className="w-full xl:flex xl:justify-center">
          <div className="hidden xl:block xl:w-full xl:h-full ">
            <img src={appImage} alt="Application" />
          </div>
          <div className="">
            <Param />
          </div>
        </div> */}

        {/* Video section */}
        <div className="lg:hidden flex flex-col gap-5 lg:gap-y-16">
          <div className="w-full flex flex-col lg:flex-row justify-center gap-5 lg:gap-36 items-center">
            <div className="text-center xl:text-right font-semibold gap-1">
              <p className="text-5xl lg:text-7xl">We're growing</p>
              <p className="text-7xl lg:text-9xl">everyday</p>
            </div>
            <div className="">
              <p className="hidden xl:block md:text-lg leading-relaxed">
                Gym Track was born in{" "}
                <span className="text-[#E69506] font-semibold">H-Farm</span>,
                the first startup incubator where our idea was tested and
                validated throughout a{" "}
                <span className="text-[#E69506] font-semibold">
                  pre-accellerator program.
                </span>
                <br />
                <br />
                We are now developing the MVP: Gym Tracker 1.0 To do so we are
                looking to expand our team with talented and motivated people to
                archive our goals and bring our project to life.
              </p>
            </div>
          </div>
          <div className="h-[40vh] md:h-[90vh]">
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
              .
              <br />
              <br />
              We are now developing the MVP: Gym Tracker 1.0 To do so we are
              looking to expand our team with talented and motivated people to
              archive our goals and bring our project to life.
            </p>
          </div>
        </div>

        <div
          id="gymtrack"
          className="hidden lg:visible lg:flex lg:justify-between gap-10"
        >
          <div className="w-1/2 flex flex-col gap-12">
            <div className="w-full text-left font-semibold gap-1 z-10">
              <p className="text-7xl">We're growing</p>
              <p className="text-9xl">everyday</p>
            </div>
            <p className="w-5/6 text-lg">
              Gym Track was born in{" "}
              <span className="text-[#E69506] font-semibold">H-Farm</span>, the
              first startup incubator where our idea was tested and validated
              throughout a{" "}
              <span className="text-[#E69506] font-semibold">
                pre-accellerator program.
              </span>
              <br />
              <br />
              We are now developing the MVP: Gym Tracker 1.0 To do so we are
              looking to expand our team with talented and motivated people to
              archive our goals and bring our project to life.
            </p>
          </div>
          <div className="w-1/2 h-full aspect-square">
            <video
              controls
              playsInline
              poster={poster}
              className="h-full w-full object-cover rounded-xl"
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Gym Track's family */}
        <div className="flex flex-col gap-5 xl:gap-10" id="family">
          <p className="text-5xl xl:text-7xl font-semibold leading-tight xl:leading-relaxed">
            The Gym Track's{" "}
            <span className="font-semibold text-[#E69506]">family</span>
          </p>
          <div className="w-full flex flex-wrap md:justify-center gap-10">
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
            {/* <FamilyCard
              image={unknown}
              nameMember="Luca Martarello"
              role="Electronic Engineer"
              href="https://www.linkedin.com/in/luca-martarello-34658428a/"
            /> */}
            <FamilyCard
              image={unknown}
              nameMember="Ilaria Nalon"
              role="UX/UI Designer"
              href="https://www.linkedin.com/in/ilaria-nalon-517462256/"
            />
            {/* <FamilyCard
              image={unknown}
              nameMember="Francesco Rizzetto"
              role="Frontend Developer"
              href=""
            /> */}
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
