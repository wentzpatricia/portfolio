import { Bars3Icon } from "@heroicons/react/24/outline";
import { navigationItems } from "../../constants/menu";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import Logo from "../../../src/assets/img/logo.svg?react";

interface NavbarProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  handleSmoothScroll: (id: string) => void;
  activeItem: string;
}

export default function Navbar({
  toggleMobileMenu,
  handleSmoothScroll,
  activeItem,
}: NavbarProps) {
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
              onClick={toggleMobileMenu}
            >
              <Bars3Icon
                className="block h-6 w-6 text-medium-red-violet-900"
                aria-hidden="true"
              />
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="hidden sm:flex shrink-0 items-center">
              <Logo className="h-5 w-auto" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSmoothScroll(item.href.substring(1));
                    }}
                    className={`${
                      activeItem === item.href
                        ? "bg-medium-red-violet-900/50 rounded-md"
                        : " hover:text-medium-red-violet-700"
                    } 
                      px-3 py-2 text-sm font-medium`}
                    aria-current={activeItem === item.href ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
