import React from "react";
import MaxWidthContaine from "./MaxWidthContaine";
import Link from "next/link";
import { ArrowRightCircle, Brain, Leaf } from "lucide-react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="pt-[5.2rem] lg:pt-0">
      <MaxWidthContaine>
        <div className="flex flex-col items-center rounded-b-2xl shadow-lg lg:flex-row">
          <div className="relative flex flex-col items-start gap-4 bg-green-600 p-5 text-white lg:w-1/4 lg:rounded-bl-2xl">
            <p className="text-md font-semibold">Trusted 87% Satisfaction</p>
            <p className="text-xs">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, alias. Maxime eligendi eius incidunt mollitia
              repellat, perferendis ut{" "}
            </p>
            <Link href="#" className="group flex flex-row gap-2 text-white">
              <ArrowRightCircle />
              <p className="font-semibold group-hover:underline">
                Explore More
              </p>
            </Link>
            <Leaf className="absolute -bottom-0 right-2 h-[5rem] w-[5rem] text-white/45" />
          </div>

          <div className="relative flex flex-col items-start gap-4 bg-orange-400 p-5 text-white lg:w-1/4">
            <p className="text-md font-semibold">Subtainable Management</p>
            <p className="text-xs">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, alias. Maxime eligendi eius incidunt mollitia
              repellat, perferendis ut{" "}
            </p>
            <Link href="#" className="group flex flex-row gap-2 text-white">
              <ArrowRightCircle />
              <p className="font-semibold group-hover:underline">
                Explore More
              </p>
            </Link>
            <Brain className="absolute -bottom-0 right-2 h-[5rem] w-[5rem] text-white/45" />
          </div>

          <div className="relative flex flex-row items-center gap-4 bg-white p-5 text-black lg:w-2/4">
            <div className="w-2/5">
              <p className="text-[1.2rem] font-bold">
                Processin 70,000 Wonnes Of Recyclable Waste Yearly
              </p>
            </div>
            <div className="w-3/5">
              <img src="/map.png" alt="map img" className="w-[15rem]" />
            </div>
          </div>
        </div>
      </MaxWidthContaine>
    </div>
  );
};

export default AboutUs;
