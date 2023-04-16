import { onNavClick } from "../helper/on-nav-click";
import { Logo } from "./logo";

export const NavBar = () => {
  return (
    <header className="max-w-screen-lg mx-auto">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <a href="#top" title="" onClick={onNavClick} className="flex">
              <Logo className="text-slate-900 h-5" />
            </a>
          </div>

          <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
            <a
              href="#early-access"
              title=""
              onClick={onNavClick}
              className="text-base font-semibold text-documenso-950 transition-all duration-200 hover:text-opacity-80"
            >
              Early Access
            </a>

            <a
              href="#features"
              title=""
              onClick={onNavClick}
              className="text-base font-semibold text-documenso-950 transition-all duration-200 hover:text-opacity-80"
            >
              Features
            </a>

            <a
              href="#get-notified"
              title=""
              onClick={onNavClick}
              className="text-base font-semibold text-documenso-950 transition-all duration-200 hover:text-opacity-80"
            >
              Get Notified
            </a>

            <a
              href="#faq"
              title=""
              onClick={onNavClick}
              className="text-base font-semibold text-documenso-950 transition-all duration-200 hover:text-opacity-80"
            >
              FAQ
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
