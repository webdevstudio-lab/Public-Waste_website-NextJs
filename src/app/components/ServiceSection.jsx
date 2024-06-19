import React from "react";
import MaxWidthContaine from "./MaxWidthContaine";
import { ArrowRightCircle, BicepsFlexed, Box, Boxes } from "lucide-react";
import Link from "next/link";

const ServiceSection = () => {
  return (
    <div className="mb-4 mt-4 lg:mt-[7rem]">
      <MaxWidthContaine>
        <div className="flex flex-col items-center text-center">
          <p className="text-xl font-semibold text-orange-400">
            Safe And Trusted Waste Collection Service
          </p>
          <p className="text-[2.5rem] font-bold">
            Devoted & Trustworthu Waste <br /> Collection Service
          </p>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-10 bg-white lg:flex-row">
          {/* SEPARATOR */}

          <div className="group flex cursor-pointer flex-col shadow-2xl transition-all duration-300 lg:w-[25rem]">
            <div className="relative">
              <img
                src="/serviceimg1.jpg"
                alt="service image"
                className="h-[18rem] w-[25rem] rounded-2xl"
              />

              <div className="absolute bottom-0 hidden h-[50%] w-full rounded-b-2xl bg-gradient-to-t from-green-700 transition-all duration-300 group-hover:block"></div>
              <Box className="absolute bottom-4 left-6 h-[4rem] w-[4rem] text-white" />
            </div>

            <div className="flex flex-col gap-4 p-4">
              <p className="w-[20rem] text-2xl font-semibold">
                Residencial Waste And Recucling Services
              </p>

              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                quod ad qui voluptates consectetur similique. Corrupti fuga
                error iste ratione quaerat minus perspiciatis, aspernatur
                doloribus necessitatibus dicta nulla qui quo?
              </p>

              <Link
                href="#"
                className="flex w-[12rem] flex-row items-center gap-4 bg-green-500 px-4 py-3 text-white transition-all duration-200 group-hover:bg-orange-500"
              >
                <p>More About Us</p>
                <ArrowRightCircle />
              </Link>
            </div>
          </div>

          {/* SEPARATOR */}

          <div className="group flex cursor-pointer flex-col shadow-2xl transition-all duration-300 lg:w-[25rem]">
            <div className="relative">
              <img
                src="/serviceimg2.webp"
                alt="service image"
                className="h-[18rem] w-[25rem] rounded-2xl"
              />

              <div className="absolute bottom-0 hidden h-[50%] w-full rounded-b-2xl bg-gradient-to-t from-green-700 transition-all duration-300 group-hover:block"></div>
              <BicepsFlexed className="absolute bottom-4 left-6 h-[4rem] w-[4rem] text-white" />
            </div>

            <div className="flex flex-col gap-4 p-4">
              <p className="w-[20rem] text-2xl font-semibold">
                Residencial Waste And Recucling Services
              </p>

              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                quod ad qui voluptates consectetur similique. Corrupti fuga
                error iste ratione quaerat minus perspiciatis, aspernatur
                doloribus necessitatibus dicta nulla qui quo?
              </p>

              <Link
                href="#"
                className="flex w-[12rem] flex-row items-center gap-4 bg-green-500 px-4 py-3 text-white transition-all duration-200 group-hover:bg-orange-500"
              >
                <p>More About Us</p>
                <ArrowRightCircle />
              </Link>
            </div>
          </div>

          {/* SEPARATOR */}

          <div className="group flex cursor-pointer flex-col shadow-2xl transition-all duration-300 lg:w-[25rem]">
            <div className="relative">
              <img
                src="/abouUs.webp"
                alt="service image"
                className="h-[18rem] w-[25rem] rounded-2xl"
              />

              <div className="absolute bottom-0 hidden h-[50%] w-full rounded-b-2xl bg-gradient-to-t from-green-700 transition-all duration-300 group-hover:block"></div>
              <Boxes className="absolute bottom-4 left-6 h-[4rem] w-[4rem] text-white" />
            </div>

            <div className="flex flex-col gap-4 p-4">
              <p className="w-[20rem] text-2xl font-semibold">
                Residencial Waste And Recucling Services
              </p>

              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                quod ad qui voluptates consectetur similique. Corrupti fuga
                error iste ratione quaerat minus perspiciatis, aspernatur
                doloribus necessitatibus dicta nulla qui quo?
              </p>

              <Link
                href="#"
                className="flex w-[12rem] flex-row items-center gap-4 bg-green-500 px-4 py-3 text-white transition-all duration-200 group-hover:bg-orange-500"
              >
                <p>More About Us</p>
                <ArrowRightCircle />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-1 lg:flex-row">
            <p className="text-xl">
              Number one Of Waste Collection Service Providence.
            </p>
            <Link
              href="#"
              className="text-xl font-semibold text-green-500 hover:underline"
            >
              {" "}
              Request a quote &rarr;{" "}
            </Link>
          </div>
        </div>
      </MaxWidthContaine>
    </div>
  );
};

export default ServiceSection;
