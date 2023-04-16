import { PackageOpen, Rocket, Unlock, Wand2 } from "lucide-react";

export const Features = () => {
  return (
    <section className="py-12 bg-slate-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-screen-lg sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-y-10 lg:grid-cols-2 gap-x-4">
          <div className="">
            <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
              Powerful, open signing tools
            </h2>

            <p className="mt-8 max-w-[50ch]">
              Documenso allows you to use state of the art document signing with
              minimal hassle. Open and extendable for everyone.
            </p>

            <p className="mt-4 max-w-[50ch]">
              Documenso is built with the latest technologies and is open
              source. We believe that everyone should be able to use the best
              tools available.
            </p>
          </div>

          <div className="space-y-8 lg:pl-16 xl:pl-24 lg:space-y-12">
            <div className="flex items-start">
              <div className="w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0 bg-documenso-100">
                <Rocket className="h-6 w-6 flex-shrink-0 text-documenso-900" />
              </div>

              <div className="ml-5">
                <h3 className="text-xl font-semibold text-black">
                  Signing digitally is fast. Really fast.
                </h3>
                <p className="mt-3 text-base text-gray-600">
                  Signing documents digitally is way faster than signing on
                  paper. Boost the speed of whatever your are working on. From
                  sales to hiring.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0 bg-documenso-100">
                <PackageOpen className="h-6 w-6 flex-shrink-0 text-documenso-900" />
              </div>

              <div className="ml-5">
                <h3 className="text-xl font-semibold text-black">
                  We are and always will be open.
                </h3>
                <p className="mt-3 text-base text-gray-600">
                  This means you can host your own version and even build on top
                  of it. Completely free. Join a community of like-minded
                  document signing fans and become a provider of trust.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0 bg-documenso-100">
                <Wand2 className="h-6 w-6 flex-shrink-0 text-documenso-900" />
              </div>

              <div className="ml-5">
                <h3 className="text-xl font-semibold text-black">
                  Not just easy, but beautiful too.
                </h3>
                <p className="mt-3 text-base text-gray-600">
                  Too many open signing solutions look and feel like complicated
                  developer tools. Documenso aims to be really easy to use for
                  everybody.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
