import React from "react";
import MaxWidthContaine from "./MaxWidthContaine";
import { ArrowRight, Mail, PhoneCall } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="bg-[#182826] lg:h-[20rem]">
        <MaxWidthContaine>
          <div className="flex flex-col items-start p-10 text-white lg:flex-row">
            <div className="flex w-full flex-col gap-4 p-4 lg:w-1/4">
              <img
                src="/webdev.jpg"
                alt="logo webdev"
                className="w-20 rounded-full"
              />
              <p className="text-xs text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias rerum harum, nobis atque distinctio animi labore
              </p>

              <div className="flex flex-row items-center gap-2 text-xs text-orange-400">
                <Mail />
                <p>WebdevStudio2023@gmail.com</p>
              </div>

              <div className="flex flex-row items-center gap-2 text-xs text-orange-400">
                <PhoneCall />
                <p>+225 07 5943 6519</p>
              </div>
            </div>

            <div className="flex w-full flex-col gap-6 p-4 lg:w-2/4">
              <p className="text-sm font-bold uppercase">Lien de la page</p>

              <div className="flex flex-row gap-4 text-sm">
                <div className="flex flex-col gap-4">
                  <p>A propos</p>
                  <ul className="group flex flex-col gap-3 text-xs text-muted-foreground">
                    <Link href="#" className="hover:text-white hover:underline">
                      Qui Somme Nous
                    </Link>
                    <Link href="#" className="hover:text-white hover:underline">
                      Notre Mission
                    </Link>
                    <Link href="#" className="hover:text-white hover:underline">
                      Historique
                    </Link>
                    <Link href="#" className="hover:text-white hover:underline">
                      Organigrame
                    </Link>
                  </ul>
                </div>

                <div className="flex flex-col gap-4">
                  <p>Service</p>
                  <ul className="group flex flex-col gap-3 text-xs text-muted-foreground">
                    <Link href="#" className="hover:text-white hover:underline">
                      Services
                    </Link>
                    <Link href="#" className="hover:text-white hover:underline">
                      Projets
                    </Link>
                    <Link href="#" className="hover:text-white hover:underline">
                      Retour Client
                    </Link>
                    <Link href="#" className="hover:text-white hover:underline">
                      Galerie
                    </Link>
                  </ul>
                </div>

                <div className="flex flex-col gap-4">
                  <p>Service</p>
                  <ul className="group flex flex-col gap-3 text-xs text-muted-foreground">
                    <Link href="#" className="hover:text-white hover:underline">
                      Services
                    </Link>
                    <Link href="#" className="hover:text-white hover:underline">
                      Projets
                    </Link>
                    <Link href="#" className="hover:text-white hover:underline">
                      Retour Client
                    </Link>
                    <Link href="#" className="hover:text-white hover:underline">
                      Galerie
                    </Link>
                  </ul>
                </div>

                <div className="flex flex-col gap-4">
                  <p>Service</p>
                  <ul className="group flex flex-col gap-3 text-xs text-muted-foreground">
                    <Link href="#" className="hover:text-white hover:underline">
                      Services
                    </Link>
                    <Link href="#" className="hover:text-white hover:underline">
                      Projets
                    </Link>
                    <Link href="#" className="hover:text-white hover:underline">
                      Retour Client
                    </Link>
                    <Link href="#" className="hover:text-white hover:underline">
                      Galerie
                    </Link>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col gap-4 p-4 lg:w-1/4">
              <p className="text-sm font-bold">NewsLetter</p>
              <p className="text-xs font-semibold text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                natus, voluptatibus totam,
              </p>
              <div className="flex flex-row items-center justify-between rounded-md bg-white px-3 py-2">
                <input
                  type="text"
                  className="border-none px-1 py-1 text-sm"
                  placeholder="Your Email Address"
                />
                <button>
                  <ArrowRight className="rounded-full bg-black p-1" />
                </button>
              </div>
            </div>
          </div>
        </MaxWidthContaine>
      </div>
      <div className="bg-slate-600 py-1 text-center text-xs text-white">
        <MaxWidthContaine>Webdev</MaxWidthContaine>
      </div>
    </>
  );
};

export default Footer;
