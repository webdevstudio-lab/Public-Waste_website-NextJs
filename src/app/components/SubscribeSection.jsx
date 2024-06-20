import React from "react";
import MaxWidthContaine from "./MaxWidthContaine";
import { ArrowRight, LucideQuote, TextQuote } from "lucide-react";
import FormRequest from "./FormRequest";

const SubscribeSection = () => {
  return (
    <div className="bg-green-700">
      <MaxWidthContaine>
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          <div className="flex w-full flex-col gap-6 py-10 text-white lg:w-1/2">
            <p className="text-[2rem] font-semibold">
              Providing A Regular Trash Collection On A Scheduled Time Or Call
              In Service.
            </p>
            <p className="text-sm font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              magni perspiciatis, repellendus corporis saepe est suscipit eum
              assumenda
            </p>
            <div className="">
              <form className="flex flex-row gap-2">
                <input
                  type="text"
                  placeholder="Your Email Address"
                  className="text-md h-14 w-[20rem] rounded-sm px-4 text-black"
                />
                <button className="flex items-center gap-2 rounded-sm bg-orange-400 px-4 py-3 font-medium">
                  Subscribe <ArrowRight />
                </button>
              </form>
            </div>
            <p className="text-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>

            <div className="relative mt-20 flex flex-col">
              <LucideQuote className="absolute h-[5rem] w-[5rem] text-white/15" />

              <div className="mt-2 p-10 text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore placeat dolorem iste nobis ratione culpa, adipisci,
                consequatur molestiae porro nam rerum ab quas consequuntur
                aspernatur nisi consectetur? Quisquam, culpa beatae?
                <div className="mt-6 flex flex-row items-center">
                  <div className="h-[4rem] w-[4rem] rounded-full bg-black"></div>
                  <div className="relative right-4 h-[4rem] w-[4rem] rounded-full bg-[url('/webdev.jpg')] bg-cover"></div>
                  <div className="flex flex-col gap-1 text-white">
                    <p className="text-xl font-bold">WebDev Studio</p>
                    <p className="text-xs">Fullstak JavaSript Developeur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-6 py-10 text-white lg:w-1/2">
            <div className="h-[35rem] w-full rounded-lg bg-white p-6 text-black lg:w-[85%]">
              <div>
                <p className="text-[1.5rem] font-bold">Request Pickup</p>
                <p className="text-xs text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Suscipit odit optio, voluptate vitae reiciendis et laudantium.
                </p>
              </div>
              <div>
                <FormRequest />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthContaine>
    </div>
  );
};

export default SubscribeSection;
