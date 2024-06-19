import Link from "next/link";
import SpaceSection from "../ui/SpaceSection";
import MaxWidthContaine from "./MaxWidthContaine";
import { ArrowRightCircle, Check, File, PlayIcon } from "lucide-react";

const MoreAboutUs = () => {
  return (
    <div className="mb-10 mt-20">
      <MaxWidthContaine>
        <div className="flex flex-col items-center lg:relative lg:flex-row">
          <div className="flex flex-col gap-6 lg:w-1/2">
            <div className="space-y-5 lg:pr-20">
              <p className="text-[2.2rem] font-bold">
                Competive And Reliable Buisiness Waste Collection For 90,000
                Customers!
              </p>

              <p className="font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                quidem incidunt maiores sint vel odio quod doloribus molestias
                ducimus placeat! Ipsum consectetur voluptatum dolores aut
                consequuntur id quae porro magnam?
              </p>

              <p className="text-sm text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                earum praesentium, tempora fugit ea, veniam molestias ad magnam
                ullam voluptate cupiditate. Illo voluptatum similique rem
                nesciunt quia sequi, excepturi debitis.
              </p>

              <div className="flex flex-row items-center justify-start gap-6 text-xs font-semibold text-white">
                <Link
                  href="#"
                  className="flex flex-row items-center gap-4 bg-green-500 px-4 py-3 transition-all duration-200 hover:bg-orange-500"
                >
                  <p>More About Us</p>
                  <ArrowRightCircle />
                </Link>

                <Link
                  href="#"
                  className="flex flex-row items-center gap-4 border-2 border-black px-4 py-3 text-black transition-all duration-200 hover:border-green-500 hover:bg-green-500 hover:text-white"
                >
                  <p>Dossier Technique</p>
                  <File />
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-center gap-4 border-b-2 border-slate-300 p-4 lg:w-[33rem]">
                <Check className="h-7 w-7 rounded-full bg-green-100 p-1 text-green-700" />
                <p className="text-sm font-bold">
                  Commerciel & business Waste Management Expert
                </p>
              </div>
              <div className="flex flex-row items-center gap-4 border-b-2 border-slate-300 p-4 lg:w-[33rem]">
                <Check className="h-7 w-7 rounded-full bg-green-100 p-1 text-green-700" />
                <p className="text-sm font-bold">
                  Provider Regular, Reliable and Convennient Services
                </p>
              </div>
              <div className="flex flex-row items-center gap-4 border-b-2 border-slate-300 p-4 lg:w-[33rem]">
                <Check className="h-7 w-7 rounded-full bg-green-100 p-1 text-green-700" />
                <p className="text-sm font-bold">
                  We ar never far away from business to help
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex w-1/2 flex-row lg:absolute lg:right-0 lg:top-0 lg:mt-0">
            <div className="relative">
              <img
                src="/abouUs.webp"
                alt="about img"
                className="w-[35rem] lg:rounded-3xl"
              />

              <div className="justify-cente absolute -right-20 top-[130px] flex h-[8rem] w-[20rem] flex-row items-center text-xs">
                <div className="h-full w-3/4 space-y-4 rounded-l-xl bg-white p-4">
                  <p className="text-[.9rem] font-semibold">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi aperiam rerum rem necessitatibus{" "}
                  </p>
                  <Link
                    href="#"
                    className="group flex flex-row items-center gap-2 text-green-600"
                  >
                    <p className="font-semibold group-hover:underline">
                      Explore More
                    </p>
                    <ArrowRightCircle />
                  </Link>
                </div>

                <div className="flex h-full w-1/4 flex-col items-center justify-center rounded-r-xl bg-orange-400 p-4">
                  <PlayIcon className="py-auto text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthContaine>
    </div>
  );
};

export default MoreAboutUs;
