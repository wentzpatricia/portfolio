import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigationItems } from "../../constants/menu";
import MobileMenu from "../MobileMenu/MobileMenu";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

import { ReactComponent as Logo} from '../../../src/assets/logo.svg';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-background text-text">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2
               text-medium-red-violet-300 hover:bg-medium-red-violet-900/50 hover:text-medium-red-violet-300 focus:outline-none
                focus:ring-2 focus:ring-inset focus:ring-medium-red-violet-900"
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
              <Logo className="h-5 w-auto text-black dark:text-white" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`${
                      item.current
                        ? "bg-medium-red-violet-900/50 rounded-md"
                        : "border-b-2 border-transparent hover:border-medium-red-violet-900 border-dashed hover:text-medium-red-violet-700"
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

          <ThemeToggle />
        </div> 
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} />
    </nav>
  );
}
