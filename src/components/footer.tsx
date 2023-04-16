import { Logo } from "./logo";

export const Footer = () => {
  return (
    <footer className="py-12 bg-white sm:pt-16">
      <div className="px-4 mx-auto max-w-screen-lg sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <Logo className="inline-flex h-8 opacity-50 hover:opacity-100 duration-500" />
        </div>

        <hr className="mt-16 border-slate-300" />

        <div className="mt-10 leading-relaxed">
          <p className="text-base text-slate-600">
            Copyright © 2023 Venturo UG | HRB 165716. All rights reserved.
          </p>
          <p className="text-slate-600">Questions: hi@documenso.com</p>
          <p className="text-slate-600">Made with ☔ in Hamburg.</p>
        </div>
      </div>
    </footer>
  );
};
