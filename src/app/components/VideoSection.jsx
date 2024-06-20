import { PlayCircle } from "lucide-react";
import MaxWidthContaine from "./MaxWidthContaine";
import AccordionSerction from "./AccordionSerction";

const VideoSection = () => {
  return (
    <div className="lg:mt-10">
      <MaxWidthContaine>
        <div
          className="flex flex-col gap-4 lg:h-[33rem] lg:flex-row lg:gap-20"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <div className="flex h-[25rem] w-full flex-col items-center justify-center rounded-2xl bg-orange-300 bg-[url('/PlaySerction.jpg')] bg-center bg-no-repeat lg:w-1/2">
            <PlayCircle className="h-[4rem] w-[4rem] text-white" />
          </div>

          <div className="flex w-full flex-col gap-4 lg:w-1/2">
            <p className="text-md font-semibold text-orange-500">
              Home And Commercial Waste and Recycling service
            </p>
            <p className="text-[2rem] font-bold">
              Hangming 80,000 Tonnes Of Recyclable Waste Yearly.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              eius illo similique corrupti molestias nesciunt aliquam,
              reprehenderit architecto perferendis consectetur labore quisquam,
              qui tempore iure neque, cupiditate facere rem quo.
            </p>
            <AccordionSerction />
          </div>
        </div>
      </MaxWidthContaine>
    </div>
  );
};

export default VideoSection;
