import React from "react";
import MaxWidthContaine from "./MaxWidthContaine";
import {
  ArrowRightCircle,
  Drill,
  Podcast,
  RadioTower,
  TentTree,
} from "lucide-react";
import Link from "next/link";

const ProjectSection = () => {
  return (
    <div className="bg-[#111D19] py-10 lg:h-[60rem]">
      <MaxWidthContaine>
        <div className="flex flex-col">
          <div className="flex flex-col gap-4 text-white lg:w-[60%]">
            <p className="text-2xl font-bold">
              Helping All Types Of Industries!
            </p>
            <p className="text-xs text-white/50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nulla
              corrupti aperiam veniam debitis vero molestiae autem! Fugiat
              laudantium corporis perferendis dolor, earum cumque aliquam
              quisquam sequi quidem suscipit explicabo?
            </p>
          </div>

          <div className="flex flex-col gap-20 lg:flex-row">
            <div className="mt-6 flex flex-row lg:w-1/3">
              <div className="flex flex-col space-y-4">
                {/* BLOCK */}
                <div className="flex flex-row items-center gap-6 py-3">
                  <div>
                    <Podcast className="h-[4rem] w-[4rem] text-orange-500" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-white">
                      Greate Service & Low cost
                    </p>
                    <p className="text-xs text-white/55">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequatur asperiores nihil iure temporibus esse,
                      voluptatem quo enim libero
                    </p>
                  </div>
                </div>

                {/* BLOCK */}
                <div className="flex flex-row items-center gap-6 border-b-2 border-t-2 border-white/50 py-3">
                  <div>
                    <RadioTower className="h-[4rem] w-[4rem] text-orange-500" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-white">
                      Greate Service & Low cost
                    </p>
                    <p className="text-xs text-white/55">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequatur asperiores nihil iure temporibus esse,
                      voluptatem quo enim libero
                    </p>
                  </div>
                </div>

                {/* BLOCK */}
                <div className="flex flex-row items-center gap-6 py-3">
                  <div>
                    <TentTree className="h-[4rem] w-[4rem] text-orange-500" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-white">
                      Greate Service & Low cost
                    </p>
                    <p className="text-xs text-white/55">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequatur asperiores nihil iure temporibus esse,
                      voluptatem quo enim libero
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SLIDE SECTION */}
            <div className="right-[20rem] mt-6 h-[39rem] overflow-hidden p-5 lg:w-[50rem]">
              <div className="flex flex-row gap-4">
                {/* BOCK PHOTO */}
                <div className="group relative flex h-[25rem] w-full cursor-pointer flex-col gap-4 rounded-2xl bg-[url('/projectimg1.webp')] bg-cover bg-no-repeat lg:w-[20rem] lg:overflow-hidden">
                  <div className="absolute bottom-0 space-y-4 rounded-b-2xl bg-gradient-to-t from-black px-4 text-white transition-all duration-200 lg:-bottom-[10rem] group-hover:lg:bottom-0">
                    <Drill className="h-[4rem] w-[4rem] rounded-lg bg-green-500 p-2 text-white group-hover:block" />
                    <p className="text-sm font-bold text-white">
                      Manufacturing & Industrial
                    </p>
                    <p className="text-xs">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Obcaecati distinctio, optio nobis aperiam, illo enim error
                      recusandae sed deserunt quibusdam laboriosama
                    </p>
                    <Link
                      href="#"
                      className="flex flex-row items-center justify-center gap-4 bg-green-500 px-4 py-3 text-white transition-all duration-200 hover:bg-orange-500"
                    >
                      <p className="text-xs font-semibold">More About Us</p>
                      <ArrowRightCircle />
                    </Link>
                  </div>
                </div>

                {/* BOCK PHOTO */}
                <div className="group relative flex h-[25rem] w-full cursor-pointer flex-col gap-4 rounded-2xl bg-[url('/projectimg2.webp')] bg-center bg-no-repeat lg:w-[20rem] lg:overflow-hidden">
                  <div className="absolute bottom-0 space-y-4 rounded-b-2xl bg-gradient-to-t from-black px-4 text-white transition-all duration-200 lg:-bottom-[10rem] group-hover:lg:bottom-0">
                    <Drill className="h-[4rem] w-[4rem] rounded-lg bg-green-500 p-2 text-white group-hover:block" />
                    <p className="text-sm font-bold text-white">
                      Manufacturing & Industrial
                    </p>
                    <p className="text-xs">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Obcaecati distinctio, optio nobis aperiam, illo enim error
                      recusandae sed deserunt quibusdam laboriosama
                    </p>
                    <Link
                      href="#"
                      className="flex flex-row items-center justify-center gap-4 bg-green-500 px-4 py-3 text-white transition-all duration-200 hover:bg-orange-500"
                    >
                      <p className="text-xs font-semibold">More About Us</p>
                      <ArrowRightCircle />
                    </Link>
                  </div>
                </div>
              </div>

              {/* FOOTER SLIDE */}
              <div className="mt-10 w-full lg:w-2/3">
                <p className="text-xs text-white/50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus tenetur, voluptas, eius culpa consequatur quas
                  modi fugiat numquam obcaecati quaerat suscipit incidunt
                  officia quia quae inventore.{" "}
                  <span className="text-orange-400">
                    Magni dolores officia.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthContaine>
    </div>
  );
};

export default ProjectSection;
