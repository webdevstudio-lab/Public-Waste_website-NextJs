import Link from "next/link";
import MaxWidthContaine from "./MaxWidthContaine";
import { CircleArrowRight, Play, Star } from "lucide-react";

const HeroHomeSection = () => {
  return (
    <div className="h-[35rem] bg-blue-100 bg-[url('/slider-3-570x470.webp')] bg-cover bg-center bg-no-repeat">
      <div className="h-full w-full bg-gradient-to-br from-black to-slate-600/25">
        <MaxWidthContaine>
          <div className="items-left flex flex-col text-white lg:flex-row">
            <div className="flex h-[35rem] w-full flex-col lg:w-1/2">
              <div className="my-auto space-y-10 px-1 lg:px-5">
                <p className="text-[3rem] font-bold leading-[3.2rem]">
                  Helping All Types Of Industries And Facimities Sector!
                </p>
                <p className="text-[12px]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, expedita, quam, sed ratione eveniet facere fugit ex
                  quibusdam voluptas culpa neque veritatis minus adipisci autem
                  voluptate dolorem accusantium reiciendis eaque!
                </p>

                <div className="flex flex-row items-center justify-start gap-10">
                  <Link
                    href="#"
                    className="group flex flex-row items-center gap-2 rounded-md bg-white px-2 py-3 text-black transition-all duration-500 hover:bg-green-500"
                  >
                    <p className="duration-250 text-xs font-semibold transition-all group-hover:text-white">
                      Explore Our Services
                    </p>
                    <CircleArrowRight className="duration-250 transition-all group-hover:text-white" />
                  </Link>

                  <Link
                    href="#"
                    className="group flex flex-row items-center gap-4 transition-all duration-150"
                  >
                    <div className="rounded-full px-1.5 py-2 ring-2 ring-white/60">
                      <div className="rounded-full bg-white px-2 py-3 transition-all duration-150 group-hover:bg-white/50">
                        <Play className="h-4 text-black" />
                      </div>
                    </div>
                    <p className="text-xs text-white transition-all duration-150 group-hover:translate-x-2">
                      How its works
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col border-b-2 lg:h-[35rem] lg:w-1/2">
              <div className="mt-auto flex h-[5rem] flex-row bg-white">
                <div className="my-auto w-2/3 px-2 text-xs text-black">
                  <p>
                    <span className="font-semibold text-green-500 underline">
                      adipisicing elit. Suscipit
                    </span>{" "}
                    adipisicing elit. Suscipit enim maiores veniam, iste animi
                    exercitationem a
                  </p>
                </div>
                <div className="flex w-1/3 flex-row items-center justify-center bg-green-500">
                  <Star className="h-[20px]" />
                  <Star className="h-[20px]" />
                  <Star className="h-[20px]" />
                  <Star className="h-[20px]" />
                  <Star className="h-[20px]" />
                </div>
              </div>
            </div>
          </div>
        </MaxWidthContaine>
      </div>
    </div>
  );
};

export default HeroHomeSection;
