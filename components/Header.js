"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { GithubLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/angel-delgado-dev",
    icon: <LinkedinLogo size={24} weight="fill" />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/ForaAngel",
    icon: <GithubLogo size={24} weight="fill" />,
    label: "GitHub",
  },
  {
    href: "https://x.com/ElforaDev",
    icon: <XLogo size={24} weight="fill" />,
    label: "Twitter",
  },
];

// A header with a logo on the left, links in the center (like Pricing, etc...), and a CTA (like Get Started or Login) on the right.
// The header is responsive, and on mobile, the links are hidden behind a burger button.
const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  // setIsOpen(false) when the route changes (i.e: when the user clicks on a link on mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  return (
    <header className="bg-base-200">
      <nav
        className="container flex items-center justify-between px-8 py-4 mx-auto"
        aria-label="Global"
      >
        {/* Social icons on the left */}
        <div className="hidden lg:flex lg:gap-6 lg:items-center">
          {socialLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="text-base-content hover:text-primary transition-colors"
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </Link>
          ))}
        </div>

        {/* Burger menu for mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-base-content"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* CV button on the right */}
        <div className="hidden lg:flex">
          <Link
            href="/CurriculumAngelD.pdf"
            className="btn btn-primary"
            download="CurriculumAngelD.pdf"
          >
            Mi CV
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`relative z-50 ${isOpen ? "" : "hidden"}`}>
        <div className="fixed inset-y-0 right-0 z-10 w-full px-8 py-4 overflow-y-auto bg-base-200 sm:max-w-sm sm:ring-1 sm:ring-neutral/10">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flow-root mt-6">
            <div className="py-4">
              <div className="flex flex-col gap-y-4 items-start">
                {socialLinks.map((link) => (
                  <Link
                    href={link.href}
                    key={link.href}
                    className="flex items-center gap-2 text-base-content hover:text-primary transition-colors"
                    title={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="divider"></div>
            <Link
              href="/angel-delgado-cv.pdf"
              className="btn btn-primary w-full"
              download="angel-delgado-cv.pdf"
            >
              Mi CV
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
