import { Progress } from "@/components/ui/progress";
import { ThumbsUp } from "lucide-react";
import React from "react";

const BannerSection = () => {
  return (
    <div className="mb-6 flex flex-col lg:flex-row">
      <div className="relative w-full lg:w-1/2">
        <div>
          <img src="/banerImg.webp" alt="baner img" className="w-full" />
        </div>
        <div className="absolute bottom-0 flex w-[20rem] flex-col items-start gap-2 rounded-tr-2xl bg-orange-400 p-6 text-white">
          <p className="text-[3rem] font-semibold">97%</p>
          <p className="font-semibold">Customer Satisfaction</p>
          <p className="text-sm font-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            nisi rem beatae illum, laboriosam eos veritatis expedita
          </p>
          <ThumbsUp className="absolute bottom-2 right-2 h-[6rem] w-[6rem] text-white/35" />
        </div>
      </div>

      <div
        className="w-full space-y-6 bg-green-600 p-10 text-white lg:w-1/2"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        <p className="text-[1.8rem] font-bold">
          We Are Her To Help You Manage Your Business And Home Waste Removal.
        </p>
        <p className="text-md font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
          quos alias est exercitationem aspernatur, nemo sint dolorem ipsam
          possimus rerum sapiente doloremque, tenetur amet vel at reprehenderit
          neque id dolorum.
        </p>
        <p className="text-xs text-white/70">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, eaque
          libero, veritatis molestiae id sapiente animi atque nam
          necessitatibus.
        </p>

        <div className="flex flex-col gap-6">
          <div className="w-full space-y-2">
            <div className="flex w-[85%] flex-row items-center justify-between text-sm text-white">
              <p className="font-bold">Constrution Waste </p>
              <p>85%</p>
            </div>
            <Progress
              value={85}
              className="h-2 w-full bg-green-200/65 lg:w-full"
            />
          </div>
          <div className="w-full space-y-2">
            <div className="flex w-[55%] flex-row items-center justify-between text-sm text-white">
              <p className="font-bold">Constrution Waste </p>
              <p>55%</p>
            </div>
            <Progress
              value={55}
              className="h-2 w-full bg-green-200/65 lg:w-full"
            />
          </div>
          <div className="w-full space-y-2">
            <div className="flex w-[45%] flex-row items-center justify-between text-sm text-white">
              <p className="font-bold">Constrution Waste </p>
              <p>45%</p>
            </div>
            <Progress
              value={45}
              className="h-2 w-full bg-green-200/65 lg:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
