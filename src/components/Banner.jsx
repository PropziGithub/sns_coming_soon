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
    <section className="bg-[#FFFFFF] h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[#FAF6EA] px-6  lg:px-10">
          <div className="flex flex-col">
            <div className="h-full w-full pt-[80px]">
              <Logo className="h-[123px]" />
            </div>
            <span className="font-Inter font-light text-[100px] leading-[121.02px]">
              Get ready for a
            </span>
            <span className="font-Inter font-bold text-[90px] leading-[121.02px]">
              new beginning.
            </span>
            <p className="font-Inter font-light text-[50px] leading-[60.51px]">
              We’ll be here soon with our new website,subscribe to be notified.
            </p>
            {/* Input */}
            <div className="relative mb-6 pt-10">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
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
                id="input-group-1"
                class="bg-[#FAF6EA] font-Inter text-sm  block w-full  p-2.5 border-x-0  border-t-0 border-b border-[#000000] focus:border-[#7bd2dd] outline-none placeholder-[#000000]"
                placeholder="Email address*"
              />
            </div>
          </div>
          {/* clients */}
          <div className="flex flex-col pt-20">
            <span className="font-Inter font-normal text-[35px] leading-[42.36px]">
              Happy clients include:
            </span>
            <div className="flex space-x-6 pt-4">
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
        <div className="w-[100%] h-[100%]">
          <img src={hero} alt="man" className="h-full w-full" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
