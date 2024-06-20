import Link from "next/link";
import MaxWidthContaine from "../components/MaxWidthContaine";
import { ChevronDown, Mail, MenuIcon } from "lucide-react";
import SmMenutoogle from "../components/SmMenutoogle";

const NavBar = () => {
  return (
    <div>
      <MaxWidthContaine>
        <div className="flex h-[3.2rem] items-center justify-between md:flex-row">
          <div>
            <h1 className="text-[1.5rem] text-slate-700">
              <Link href="/">
                <img
                  src="/webdev.jpg"
                  alt="logo webdev"
                  className="w-10 rounded-full"
                />
              </Link>
            </h1>
          </div>
          <div className="hidden w-3/5 flex-row items-center justify-between lg:flex">
            <div className="flex flex-row items-center justify-between pr-4">
              <ul className="flex flex-row items-center justify-between gap-3">
                <div className="flex h-[2.5rem] cursor-pointer flex-col items-center -space-y-[2px] px-2 py-1.5 text-[16px] font-semibold uppercase transition-all duration-100 hover:border-b-[3px] hover:border-orange-500 hover:text-lime-700">
                  <Link href="#">Home</Link>
                </div>

                <div className="flex h-[2.5rem] cursor-pointer flex-col items-center -space-y-[2px] px-2 py-1.5 text-[16px] font-semibold uppercase transition-all duration-100 hover:border-b-[3px] hover:border-orange-500 hover:text-lime-700">
                  <Link href="#">A Propos</Link>
                </div>

                <div className="flex h-[2.5rem] cursor-pointer flex-col items-center -space-y-[2px] px-2 py-1.5 text-[16px] font-semibold uppercase transition-all duration-100 hover:border-b-[3px] hover:border-orange-500 hover:text-lime-700">
                  <Link href="#">Services</Link>
                </div>

                <div className="flex h-[2.5rem] cursor-pointer flex-col items-center -space-y-[2px] px-2 py-1.5 text-[16px] font-semibold uppercase transition-all duration-100 hover:border-b-[3px] hover:border-orange-500 hover:text-lime-700">
                  <Link href="#">Q-HSE</Link>
                </div>

                <div className="flex h-[2.5rem] cursor-pointer flex-col items-center -space-y-[2px] px-2 py-1.5 text-[16px] font-semibold uppercase transition-all duration-100 hover:border-b-[3px] hover:border-orange-500 hover:text-lime-700">
                  <Link href="#">Blog</Link>
                </div>
              </ul>
            </div>

            <Link
              href="#"
              className="mx-auto cursor-pointer bg-green-500 px-2 py-2 text-center text-[10px] font-medium text-white transition-all duration-200 hover:bg-orange-500"
            >
              <div className="flex items-center justify-between">
                <Mail className="h-[16px]" />
                <p>Demander un devis</p>
              </div>
            </Link>
          </div>
          <SmMenutoogle />
        </div>
      </MaxWidthContaine>
    </div>
  );
};

export default NavBar;
