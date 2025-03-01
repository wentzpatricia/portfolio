import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigationItems } from "../../constants/menu";
import MobileMenu from "../MobileMenu/MobileMenu";

const logo = "../../../src/assets/logo.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2
               text-medium-red-violet-200 hover:bg-medium-red-violet-900 hover:text-white focus:outline-none
                focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex shrink-0 items-center">
              <img
                className="h-5 w-auto"
                src={logo}
                alt="patricia moraes logo"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`${
                      item.current
                        ? "bg-medium-red-violet-900 text-white rounded-md"
                        : "text-gray-300 border-b-2 border-transparent hover:border-medium-red-violet-900 border-dashed hover:text-white"
                    } 
                      px-3 py-2 text-sm font-medium`}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} />
    </nav>
  );
}
