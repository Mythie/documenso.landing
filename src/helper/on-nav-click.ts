import { MouseEvent } from "react";

export const onNavClick = (e: MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();

  const target = e.currentTarget.getAttribute("href");

  if (target) {
    const element = document.querySelector(target);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      return;
    }
  }
};
