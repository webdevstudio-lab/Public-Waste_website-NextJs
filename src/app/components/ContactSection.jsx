import Link from "next/link";
import MaxWidthContaine from "./MaxWidthContaine";
import { ArrowRightCircle, PhoneCall } from "lucide-react";
import Marquee from "react-fast-marquee";

const ContactSection = () => {
  return (
    <div className="mb-2 border-slate-300 lg:border-b-2">
      <MaxWidthContaine>
        <div
          className="bottom-[13rem] flex flex-col lg:relative lg:h-[20rem]"
          data-aos="flip-up"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <div className="flex flex-col rounded-3xl bg-orange-400 lg:flex-row">
            <div className="w-full lg:w-2/5">
              <img
                src="/bannergetStart.webp"
                alt="getstart Image"
                className="h-full w-full rounded-l-2xl"
              />
            </div>
            <div className="flex w-full flex-col gap-6 p-20 text-white lg:w-3/5">
              <p className="text-[2rem] font-bold">
                A leading Commerciel And Residenciel Waste Service Provider For
                30 Year!!!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                nisi unde explicabo aliquam delectus expedita mollitia
                temporibus quibusdam enim officia! Consequuntur{" "}
              </p>
              <div className="flex flex-row items-center gap-6">
                <Link
                  href="#"
                  className="flex w-[12rem] flex-row items-center justify-center gap-4 border-2 border-orange-400 bg-white px-4 py-3 text-xs font-semibold text-black transition-all duration-200 hover:border-black hover:bg-orange-400 hover:text-white"
                >
                  <p>Get Started now</p>
                  <ArrowRightCircle />
                </Link>
                <div className="flex flex-row gap-4">
                  <PhoneCall className="h-[3.2rem] w-[3.2rem] rounded-full bg-black p-4 text-white ring-1 ring-black" />
                  <div className="flex flex-col gap-1">
                    <p className="text-xs text-white/70">Call 24h/7days</p>
                    <p className="text-sm font-semibold text-white">
                      (0025) 020 304 0505
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthContaine>
      <Marquee>
        <img src="patnerbanner.png" alt="partner image" className="h-20" />
      </Marquee>
    </div>
  );
};

export default ContactSection;
