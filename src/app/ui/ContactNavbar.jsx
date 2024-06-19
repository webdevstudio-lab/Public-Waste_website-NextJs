import { Facebook, LinkedinIcon, Mail, MapPin, Phone } from "lucide-react";
import MaxWidthContaine from "../components/MaxWidthContaine";
import Link from "next/link";

const ContactNavbar = () => {
  return (
    <div className="hidden bg-[#182826] py-1 text-xs text-white md:flex lg:flex">
      <MaxWidthContaine>
        <div className="item hidden flex-row justify-between bg-center md:flex lg:flex">
          {/* LEFT SITE */}
          <div className="flex flex-row">
            <div className="flex flex-row items-center gap-1 border-r-[1px] border-slate-500 px-2">
              <Mail className="h-3.5 text-lime-400" />
              <p className="text-[10px] text-white">info@africatelecom.pro</p>
            </div>
            <div className="flex flex-row items-center gap-1 border-r-[1px] border-slate-500 px-2">
              <Phone className="h-3.5 text-lime-400" />
              <p className="text-[10px] text-white">(00225) 27-234-234-22</p>
            </div>
            <div className="flex flex-row items-center gap-1 px-2">
              <MapPin className="h-3.5 text-lime-400" />
              <p className="text-[10px] text-white">
                Abidjan - Marcory zone4-c Rue HKB
              </p>
            </div>
          </div>

          {/* LEFT SITE */}

          <div className="flex-rox flex items-center justify-end gap-2">
            <Link
              className="cursor-pointer text-[11px] text-white hover:text-lime-400"
              href="#"
            >
              Careers
            </Link>
            <LinkedinIcon className="h-3.5 cursor-pointer text-lime-400" />
            <Facebook className="h-3.5 cursor-pointer text-lime-400" />
          </div>
        </div>
      </MaxWidthContaine>
    </div>
  );
};

export default ContactNavbar;
