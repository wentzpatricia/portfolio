import { navigationItems } from "../../constants/menu";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../../src/assets/img/logo.svg?react";

interface MobileMenuProps {
  isOpen: boolean;
  handleSmoothScroll: (id: string) => void;
  activeItem: string;
  onClose: () => void;
}

export default function MobileMenu({
  isOpen,
  handleSmoothScroll,
  activeItem,
  onClose,
}: MobileMenuProps) {
  const handleItemClick = (id: string) => {
    handleSmoothScroll(id);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 sm:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-medium-gray-900 z-50 transform transition-transform duration-300 ease-in-out sm:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-medium-gray-700">
            <div className="flex shrink-0 items-center sm:hidden">
              <Logo className="h-5 w-auto" />
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-medium-gray-800 transition-colors"
              aria-label="Fechar menu"
            >
              <XMarkIcon className="h-6 w-6 text-medium-red-violet-950" />
            </button>
          </div>

          <nav className="flex-1 px-6 py-6">
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleItemClick(item.href.substring(1));
                    }}
                    className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
                      activeItem === item.href
                        ? "bg-medium-red-violet-600 text-white"
                        : "text-text hover:bg-medium-gray-800 hover:text-medium-red-violet-400"
                    }`}
                    aria-current={activeItem === item.href ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-6 border-t border-medium-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-medium-gray-400">Tema</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
