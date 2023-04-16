export const FAQ = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20" id="faq">
      <div className="px-4 mx-auto max-w-screen-lg sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-documenso-950 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-lg mx-auto mt-6 text-base text-gray-600">
            If you have any further questions, you are welcome to reach out to
            us at{" "}
            <a
              href="mailto:hi@documenso.com"
              className="text-documenso-500 hover:underline"
            >
              hi@documenso.com
            </a>
            .
          </p>
        </div>

        <div className="grid max-w-screen-lg grid-cols-1 mx-auto mt-10 sm:mt-20 md:grid-cols-2 md:gap-x-16 gap-y-8 md:gap-y-12">
          <div>
            <p className="text-xl font-bold text-gray-900 sm:text-2xl">
              Why should I prefer Documenso over DocuSign or some other signing
              tool?
            </p>
            <p className="mt-3 text-base font-normal text-gray-600 sm:mt-6 ">
              Documenso is a community effort to create an open and vibrant
              ecosystem around a tool, everybody is free to use and adapt. By
              beeing truly open we want to create trusted infrastructure for the
              future of the internet.
            </p>
          </div>

          <div>
            <p className="text-xl font-bold text-gray-900 sm:text-2xl">
              I don't want to self-host, will there a be ready-to-use version?
            </p>

            <p className="mt-3 text-base font-normal text-gray-600 sm:mt-6 ">
              Documenso will be addiontionally offered as a subscription based
              service you can just sign up for after launch at Documenso.com.
            </p>
          </div>

          <div>
            <p className="text-xl font-bold text-gray-900 sm:text-2xl">
              When will Documenso be launched?
            </p>
            <p className="mt-3 text-base font-normal text-gray-600 sm:mt-6 ">
              The launch is planned for 2023. Just sign up and we will keep you
              posted. You can also follow us on Twitter at{" "}
              <a
                href="https://twitter.com/documenso"
                className="text-documenso-500 hover:underline"
              >
                @Documenso
              </a>{" "}
              to keep up to date.
            </p>
          </div>

          <div>
            <p className="text-xl font-bold text-gray-900 sm:text-2xl">
              I like the idea and want to contribute
            </p>
            <p className="mt-3 text-base font-normal text-gray-600 sm:mt-6 ">
              Awesome. You can sign up to stay up to date with the newest
              developments and chances to contribute.
            </p>
          </div>

          <div>
            <p className="text-xl font-bold text-gray-900 sm:text-2xl">
              Can I use Documenso commercially?
            </p>
            <p className="mt-3 text-base font-normal text-gray-600 sm:mt-6 ">
              Yes! Documenso will be offered under GNU AGPL V3 or a similar open
              source license. This means you can use it for free and even modify
              it to your needs, as long as you publish your changes under the
              same license.
            </p>
          </div>

          <div>
            <p className="text-xl font-bold text-gray-900 sm:text-2xl">
              Who can contribute?
            </p>
            <p className="mt-3 text-base font-normal text-gray-600 sm:mt-6 ">
              Since we are still in th early phases we need all kinds of people
              from user to tester and developers. If you want to be a part of
              our journey let us know, help is always appreciated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
