import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Mail, MenuIcon } from "lucide-react";
import Link from "next/link";

const SmMenutoogle = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <MenuIcon className="cursor-pointer lg:hidden" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className={"mb-10 flex flex-row justify-center"}>
              <img
                src="/webdev.jpg"
                alt="logo webdev"
                className="w-20 rounded-full"
              />
            </SheetTitle>
            <SheetDescription>
              <div className="flex flex-col gap-20 uppercase">
                <div className="flex-col items-center">
                  <div className="mb-10 flex flex-col items-center justify-between pr-4">
                    <ul className="flex w-full flex-col items-center justify-between gap-10">
                      <div className="flex h-[2.5rem] w-full cursor-pointer flex-col items-center -space-y-[2px] px-2 py-1.5 text-[16px] font-semibold uppercase transition-all duration-100 hover:border-b-[3px] hover:border-orange-500 hover:text-lime-700">
                        <Link href="#">Home</Link>
                      </div>

                      <div className="flex h-[2.5rem] w-full cursor-pointer flex-col items-center -space-y-[2px] px-2 py-1.5 text-[16px] font-semibold uppercase transition-all duration-100 hover:border-b-[3px] hover:border-orange-500 hover:text-lime-700">
                        <Link href="#">A Propos</Link>
                      </div>

                      <div className="flex h-[2.5rem] w-full cursor-pointer flex-col items-center -space-y-[2px] px-2 py-1.5 text-[16px] font-semibold uppercase transition-all duration-100 hover:border-b-[3px] hover:border-orange-500 hover:text-lime-700">
                        <Link href="#">Services</Link>
                      </div>

                      <div className="flex h-[2.5rem] w-full cursor-pointer flex-col items-center -space-y-[2px] px-2 py-1.5 text-[16px] font-semibold uppercase transition-all duration-100 hover:border-b-[3px] hover:border-orange-500 hover:text-lime-700">
                        <Link href="#">Q-HSE</Link>
                      </div>

                      <div className="flex h-[2.5rem] w-full cursor-pointer flex-col items-center -space-y-[2px] px-2 py-1.5 text-[16px] font-semibold uppercase transition-all duration-100 hover:border-b-[3px] hover:border-orange-500 hover:text-lime-700">
                        <Link href="#">Blog</Link>
                      </div>
                    </ul>
                  </div>

                  <Link href="#" className="">
                    <div className="text-1xl flex flex-row items-center justify-center font-bold">
                      <Mail className="h-[16px]" />
                      <p>Demander un devis</p>
                    </div>
                  </Link>
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SmMenutoogle;
