import { Star } from "lucide-react";
import { NavBar } from "./nav-bar";

export const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-documenso-50 via-documenso-200 to-documenso-50">
      <NavBar />

      <section className="pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-24 lg:pb-32">
        <div className="px-4 mx-auto max-w-screen-lg sm:px-6 lg:px-8">
          <div className="max-w-[75ch]">
            <h1 className="text-5xl font-bold text-documenso-950 sm:text-6xl lg:text-7xl">
              The{" "}
              <div className="relative inline-flex">
                <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-documenso-500 -rotate-1 -translate-y-0.5 md:-translate-y-1 lg:-translate-y-2.5" />
                <h1 className="relative text-5xl font-bold text-documenso-950 sm:text-6xl lg:text-7xl">
                  Open Source
                </h1>
              </div>{" "}
              DocuSign Alternative.
            </h1>

            <p className="mt-8 text-base text-documenso-950 sm:text-xl">
              Our goal at Documenso is to establish ourselves as the most
              reliable document signing solution globally. We aim to earn your
              trust by enabling you to self-host the platform and examine its
              inner workings. Let's collaborate in shaping a new era of
              trustworthy internet.
            </p>

            <div className="mt-6 lg:mt-10 sm:flex sm:items-center space-x-6 sm:space-x-8">
              <a
                href="#"
                className="group inline-flex items-center justify-center h-14 px-8 text-base font-semibold text-documenso-950 border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white"
                role="button"
              >
                Star us on GitHub
                <Star className="ml-3 text-documenso-950 duration-200 group-hover:text-yellow-300" />
              </a>
              
              <a
                href="#"
                className="group inline-flex items-center justify-center text-base font-semibold text-documenso-950 border-b-4 border-transparent hover:border-documenso-950 transition-all duration-200 focus:border-documenso-950"
                role="button"
              >
                Join us on Slack
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
