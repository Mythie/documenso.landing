export const ComingSoon = () => {
  return (
    <section
      className="py-12 bg-documenso-500 sm:py-16 lg:py-20 xl:py-24"
      id="get-notified"
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <p className="inline-block bg-documenso-100 rounded-full text-documenso-950 text-sm font-medium px-5 py-1.5">
            Get notified
          </p>

          <h2 className="mt-8 text-3xl font-extrabold text-documenso-950 sm:text-4xl">
            Documenso Cloud will be here soon!
          </h2>

          <p className="mt-4 text-lg text-documenso-900">
            Love Documenso but don't want to self-host? A ready-to-use version
            will be availible soon. Sign to to be notfied when we launch.
          </p>
        </div>

        <form className="mt-12 sm:max-w-lg sm:mx-auto sm:flex-col">
          <div className="flex-1">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              className="flex bg-documenso-50 h-12 w-full border border-transparent py-3 px-5 placeholder:text-documenso-950 focus:outline-none focus:ring-2 focus:ring-documenso-950  disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div className="mt-6 flex flex-col gap-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="want-to-use"
                id="want-to-use"
                className="h-5 w-5 bg-documenso-50 accent-documenso-50 text-documenso-500"
              />

              <label htmlFor="want-to-use" className="ml-4 text-documenso-950">
                I want to use Documenso
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="want-to-contribute"
                id="want-to-contribute"
                className="h-5 w-5 bg-documenso-50 accent-documenso-50 text-documenso-500"
              />

              <label
                htmlFor="want-to-contribute"
                className="ml-4 text-documenso-950"
              >
                I want to contribute to Documenso
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="want-cloud-access"
                id="want-cloud-access"
                className="h-5 w-5 bg-documenso-50 accent-documenso-50 text-documenso-500"
              />

              <label
                htmlFor="want-cloud-access"
                className="ml-4 text-documenso-950"
              >
                I want access Documenso Cloud
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 group w-full inline-flex items-center justify-center h-14 px-8 text-base font-semibold text-documenso-950 border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white"
            role="button"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};
