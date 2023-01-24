import React from "react";
import hero from "@/assets/Hero.svg";
import cibco from "@/assets/cibco.svg";
import hospital from "@/assets/hospital.svg";
import tsx from "@/assets/tsx.svg";
import toppers from "@/assets/toppers.svg";
import kind from "@/assets/kind.svg";
import aurora from "@/assets/aurora.svg";
import Logo from "@/components/Logo";

const clients = [
  {
    name: "cibco",
    logo: cibco,
  },
  {
    name: "hospital",
    logo: hospital,
  },
  {
    name: "tsx",
    logo: tsx,
  },
  {
    name: "toppers",
    logo: toppers,
  },
  {
    name: "kind",
    logo: kind,
  },
  {
    name: "aurora",
    logo: aurora,
  },
];

const Banner = () => {
  return (
    <div className=" flex flex-col md:flex-row">
      <div className=" w-full px-6  md:px-[90px] py-[80px]">
        <div className="flex flex-col">
          <div>
            <Logo className="w-full max-w-xs md:max-w-sm lg:max-w-md" />
          </div>
          <div className="flex flex-col px-3 lg:px-4">
          <span className="font-Inter font-light  lg:leading-[50.02px] lg:text-[50px] leading-[40.02px] text-[40px]">
            Get ready for a
          </span>
          <span className="font-Inter font-bold lg:leading-[50.02px] lg:text-[50px] leading-[40.02px] text-[35px] py-2">
            new beginning.
          </span>
          <p className="font-Inter font-light  lg:leading-[40.02px] lg:text-[40px] leading-[28.02px] text-[25px]">
            We'll be here soon with our new website,subscribe to be notified.
          </p>
          {/* Input */}
          <div className="relative mb-6 pt-10">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer h-8 bottom-[-40px] my-auto">
              <p className="font-Inter font-semibold text-[#000000] mr-2">
                Notify Me
              </p>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-[#000000] flex-none"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              type="email"
              id="input-group"
              class="bg-[#FAF6EA] font-Inter text-sm  w-full  p-2.5 border-x-0  border-t-0 border-b border-[#000000] focus:border-[#7bd2dd] outline-none placeholder-[#000000]"
              placeholder="Email address*"
            />
          </div>
        </div>
        {/* clients */}
        <div className="flex flex-col pt-20">
          <span className="font-Inter font-normal text-[35px] leading-[42.36px]">
            Happy clients include:
          </span>
          <div className="lg:flex lg:space-x-6 pt-4 grid grid-cols-3 gap-x-6">
            {clients.map((client, index) => (
              <div className="h-auto w-auto" key={index}>
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto">
        <img src={hero}  alt="hero image" className="h-full w-full"/>
      </div>
    </div>
  );
};

export default Banner;
