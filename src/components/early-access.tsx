import { CheckCircle, CheckCircle2, Star } from "lucide-react";

export const EarlyAccess = () => {
  return (
    <section className="relative py-12 overflow-hidden bg-white sm:py-24 lg:py-28">
      <div className="relative px-4 mx-auto max-w-screen-lg sm:px-6 lg:px-8">
        <div className="text-center lg:w-3/5 xl:w-3/5 lg:text-left lg:pr-8">
          <h2 className="text-3xl font-extrabold text-documenso-950 sm:text-4xl">
            Early Access for Developers is now available!
          </h2>

          <p className="mt-8 inline-block max-w-[50ch]">
            The Documenso early access version is now available! We're looking
            for developers to help us test the platform and provide feedback. If
            you are interested in joining the early access program, please join
            us on either GitHub or Slack.
          </p>

          <div className="mt-6 lg:mt-10 sm:flex sm:items-center sm:justify-center lg:justify-start space-x-6 sm:space-x-8">
            <a
              href="#"
              className="group inline-flex items-center justify-center h-14 px-8 text-base font-semibold bg-slate-950 hover:bg-slate-950/80 focus:bg-slate-950/80 text-white transition-all duration-200"
              role="button"
            >
              Join on Github
            </a>

            <a
              href="#"
              className="group inline-flex items-center justify-center text-base font-semibold text-slate-950 border-b-4 border-transparent hover:border-slate-950 transition-all duration-200 focus:border-slate-950"
              role="button"
            >
              Join on Slack
            </a>
          </div>
        </div>

        <div className="-mt-4 px-8 translate-y-28 lg:absolute lg:bottom-0 lg:right-0 transform lg:translate-x-64 lg:translate-y-36 xl:translate-x-[28rem] xl:translate-y-44">
          <div className="relative">
            <div className="absolute -inset-2">
              <div className="w-full h-full mx-auto opacity-20 blur-sm filter bg-documenso-200" />
            </div>

            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 lg:aspect-none">
                <img
                  className="object-cover object-left-top w-full h-full max-h-[450px] xl:max-h-[550px] lg:max-w-4xl 2xl:max-w-5xl"
                  src="/preview-screen.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
